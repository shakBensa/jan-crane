// app/api/og/route.tsx
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Use node-canvas or @napi-rs/canvas for server-side canvas rendering
    // This requires installing additional dependencies
    
    // Example with @napi-rs/canvas:
    // npm install @napi-rs/canvas
    
    const { createCanvas } = await import('@napi-rs/canvas');
    
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1e3a8a');
    gradient.addColorStop(0.5, '#1e40af');
    gradient.addColorStop(1, '#2563eb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Set text properties
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw Hebrew text with proper RTL
    ctx.font = 'bold 54px Arial';
    ctx.direction = 'rtl';
    ctx.fillText('ג׳אן מנופים', width / 2, height / 2 - 40);
    
    ctx.font = '28px Arial';
    ctx.globalAlpha = 0.95;
    ctx.fillText('שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי', width / 2, height / 2 + 40);
    
    const buffer = canvas.toBuffer('image/png');
    const uint8Array = new Uint8Array(buffer);

    return new NextResponse(uint8Array, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    return new NextResponse('Error generating image', { status: 500 });
  }
}