import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "ג׳אן מנופים – מנוף הרמה בדרום"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const { width, height } = size

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
          background:
            'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
          color: '#fff',
          textAlign: 'center',
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            marginBottom: 16,
            direction: 'rtl',
            unicodeBidi: 'bidi-override',
          }}
        >
          ג׳אן מנופים
        </div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.95,
            direction: 'rtl',
            unicodeBidi: 'bidi-override',
          }}
        >
          שירותי מנוף הרמה עד 23 קומות, מקצועי ובטיחותי
        </div>
      </div>
    ),
    { width, height }
  )
}
