import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

export async function GET(request: NextRequest) {
  try {
    // Generate SVG with Satori
    const svg = await satori(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
          color: '#fff',
          textAlign: 'center',
          padding: 48,
        }}
      >
        <div style={{ 
          fontSize: 54, 
          fontWeight: 800, 
          marginBottom: 16,
          // Try these RTL approaches
          direction: 'rtl',
          unicodeBidi: 'bidi-override',
        }}>
          ג׳אן מנופים
        </div>
        <div style={{ 
          fontSize: 28, 
          opacity: 0.95,
          direction: 'rtl',
          unicodeBidi: 'bidi-override',
        }}>
          שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [], // Add custom fonts if needed
      }
    );

    // Convert SVG to PNG using @resvg/resvg-js
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new NextResponse(new Uint8Array(pngBuffer), {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('Error generating image', { status: 500 });
  }
}
