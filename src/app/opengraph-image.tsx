import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #0D1B3E 0%, #2956FF 100%)',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: '#fff',
              color: siteConfig.themeColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 52,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <span style={{ fontSize: 56, fontWeight: 800 }}>{siteConfig.shortName}</span>
        </div>
        <p style={{ fontSize: 36, fontWeight: 600, maxWidth: 900, lineHeight: 1.3, opacity: 0.95 }}>
          {siteConfig.tagline}
        </p>
        <p style={{ fontSize: 24, marginTop: 28, opacity: 0.75 }}>{siteConfig.name}</p>
      </div>
    ),
    { ...size },
  );
}
