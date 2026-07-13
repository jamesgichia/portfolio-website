import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'James Gichia — Software Engineer & Security Enthusiast';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080E09', // Dark British Racing Green
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '12px solid #D4AF37', // Antique Gold border
          padding: '80px',
        }}
      >
        {/* Accent Top Blob / Glow representation */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 600,
            height: 600,
            background: '#AA8222', // Aged gold
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: 0.4,
          }}
        />

        {/* Accent Bottom Blob */}
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -150,
            width: 500,
            height: 500,
            background: '#0F7A38', // Deep forest
            borderRadius: '50%',
            filter: 'blur(100px)',
            opacity: 0.5,
          }}
        />

        {/* Logo */}
        <div
          style={{
            background: 'linear-gradient(135deg, #AA8222, #FFE55C)', // Gold gradient
            borderRadius: '24px',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4)',
          }}
        >
          <div
            style={{
              color: '#0A1A0D', // Deep forest text on gold
              fontSize: 60,
              fontWeight: 800,
              fontFamily: 'sans-serif',
              letterSpacing: '-2px',
            }}
          >
            JG
          </div>
        </div>

        {/* Text content */}
        <div
          style={{
            color: '#F2EDD8', // Antique ivory
            fontSize: 72,
            fontWeight: 800,
            fontFamily: 'sans-serif',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          James Gichia
        </div>
        <div
          style={{
            color: '#A8BEA0', // Muted sage
            fontSize: 36,
            fontWeight: 500,
            fontFamily: 'sans-serif',
            textAlign: 'center',
            marginBottom: '40px',
            letterSpacing: '1px',
          }}
        >
          Software Engineer &amp; Security Enthusiast
        </div>

        {/* Bottom tags */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div
            style={{
              color: '#FFE55C', // Bright champagne gold
              background: 'rgba(212, 175, 55, 0.15)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              padding: '10px 24px',
              borderRadius: '999px',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Full-Stack Development
          </div>
          <div
            style={{
              color: '#4ADE80', // Bright emerald
              background: 'rgba(34, 197, 94, 0.15)',
              border: '2px solid rgba(34, 197, 94, 0.3)',
              padding: '10px 24px',
              borderRadius: '999px',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Application Security
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
