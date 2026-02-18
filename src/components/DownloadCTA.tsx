import { useEffect, useState } from 'react';

const MAC_URL = 'https://github.com/markoinla/green-tea-releases/releases/latest/download/greentea.dmg';
const WIN_URL = 'https://github.com/markoinla/green-tea-releases/releases/latest/download/greentea-setup.exe';

export default function DownloadCTA() {
  const [isWindows, setIsWindows] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setIsWindows(navigator.userAgent.indexOf('Win') !== -1);
    setReady(true);
  }, []);

  const primaryHref = isWindows ? WIN_URL : MAC_URL;
  const primaryLabel = isWindows ? 'Download for Windows' : 'Download for macOS';
  const altHref = isWindows ? MAC_URL : WIN_URL;
  const altLabel = isWindows ? 'Also available for macOS' : 'Also available for Windows';

  return (
    <section style={{
      width: '100%',
      maxWidth: '860px',
      textAlign: 'center',
      padding: '0 1rem',
      marginTop: '6rem',
    }}>
      <span style={{
        display: 'block',
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: '#3d9a72',
        marginBottom: '0.75rem',
      }}>Get Started</span>

      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: '2.5rem',
        fontWeight: 500,
        color: '#111111',
        letterSpacing: '-0.02em',
        margin: 0,
        lineHeight: 1.2,
      }}>Try Green Tea today.</h2>

      <p style={{
        fontSize: '1.0625rem',
        fontWeight: 400,
        color: '#6b7472',
        letterSpacing: '0.01em',
        lineHeight: 1.7,
        marginTop: '1rem',
        marginBottom: 0,
      }}>Free to download. No account required.</p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        marginTop: '2rem',
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}>
        <a
          href={primaryHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.75rem',
            background: 'rgba(61, 154, 114, 0.08)',
            border: '1px solid rgba(61, 154, 114, 0.25)',
            borderRadius: '8px',
            color: '#3d9a72',
            fontFamily: 'inherit',
            fontSize: '0.9375rem',
            fontWeight: 400,
            letterSpacing: '0.01em',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(61, 154, 114, 0.14)';
            e.currentTarget.style.borderColor = 'rgba(61, 154, 114, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(61, 154, 114, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(61, 154, 114, 0.25)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {primaryLabel}
        </a>

        <a
          href={altHref}
          style={{
            fontSize: '0.8125rem',
            color: '#999896',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#3d9a72'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#999896'; }}
        >{altLabel}</a>
      </div>
    </section>
  );
}
