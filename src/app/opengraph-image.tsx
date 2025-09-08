import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Better text reversal for mixed content
function fixHebrewText(text: string): string {
  // This handles mixed Hebrew/English/numbers better
  const segments = text.split(/(\s+|[0-9]+|[a-zA-Z]+)/);
  return segments.map(segment => {
    // Only reverse Hebrew segments
    if (/[\u0590-\u05FF]/.test(segment)) {
      return segment.split('').reverse().join('');
    }
    return segment;
  }).reverse().join('');
}

export async function GET() {
  return new ImageResponse(
    (
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
        <div style={{ fontSize: 54, fontWeight: 800, marginBottom: 16 }}>
          {fixHebrewText('ג׳אן מנופים')}
        </div>
        <div style={{ fontSize: 28, opacity: 0.95 }}>
          {fixHebrewText('שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי')}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

