import { useEffect, useRef, useState } from 'react';

// Syntax-highlighted HTML source lines (token = [text, color])
type Tok = [string, string];
const C = {
  tag: '#3d9a72',
  attr: '#9a6b3d',
  str: '#b06a4f',
  text: '#555',
  punct: '#bbb',
  comment: '#aaa',
};

const codeLines: Tok[][] = [
  [['<section ', C.tag], ['class', C.attr], ['=', C.punct], ['"report"', C.str], ['>', C.tag]],
  [['  <h1>', C.tag], ['Q3 Launch Report', C.text], ['</h1>', C.tag]],
  [['  <div ', C.tag], ['class', C.attr], ['=', C.punct], ['"kpis"', C.str], ['>', C.tag]],
  [['    <div ', C.tag], ['class', C.attr], ['=', C.punct], ['"card"', C.str], ['>', C.tag]],
  [['      <span>', C.tag], ['Signups', C.text], ['</span>', C.tag]],
  [['      <strong>', C.tag], ['2,481', C.text], ['</strong>', C.tag]],
  [['    </div>', C.tag]],
  [['    ', C.text], ['<!-- + 2 more -->', C.comment]],
  [['  </div>', C.tag]],
  [['  <canvas ', C.tag], ['id', C.attr], ['=', C.punct], ['"chart"', C.str], ['/>', C.tag]],
  [['</section>', C.tag]],
];

const kpis = [
  { label: 'Signups', value: '2,481', delta: '+18%' },
  { label: 'Activation', value: '64%', delta: '+6%' },
  { label: 'Revenue', value: '$38.2k', delta: '+12%' },
];

const bars = [42, 58, 50, 71, 64, 88];

export default function ArtifactsMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: '#ffffff',
        borderRadius: '14px',
        border: '1px solid #e5e5e5',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: '#1a1a1a',
        maxWidth: '720px',
        width: '100%',
        pointerEvents: 'none' as const,
        userSelect: 'none' as const,
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          borderBottom: '1px solid #eeedec',
          background: '#fafaf9',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3d9a72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1a1a1a' }}>launch-report.html</span>
        <div style={{ flex: 1 }} />
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '11px',
            color: '#3da55d',
            fontWeight: 500,
            background: '#eaf5ea',
            borderRadius: '6px',
            padding: '3px 9px',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#4abe4a',
              display: 'inline-block',
              animation: 'gtArtifactPulse 1.6s ease-in-out infinite',
            }}
          />
          Live preview
        </span>
      </div>

      {/* Split body */}
      <div style={{ display: 'flex', height: '320px' }}>
        {/* Code pane */}
        <div
          className="gt-artifact-code"
          style={{
            width: '44%',
            flexShrink: 0,
            borderRight: '1px solid #eeedec',
            background: '#fbfbfa',
            padding: '12px 0',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: "'SF Mono', 'JetBrains Mono', Menlo, monospace",
            fontSize: '10.5px',
            lineHeight: '1.85',
          }}
        >
          {/* Agent editing badge */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#f0faf4',
              border: '1px solid #c8e6d4',
              borderRadius: '5px',
              padding: '2px 8px',
              fontSize: '9px',
              fontWeight: 500,
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
              color: '#3d9a72',
              whiteSpace: 'nowrap' as const,
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: '#3d9a72',
                display: 'inline-block',
                animation: 'gtArtifactPulse 1.2s ease-in-out infinite',
              }}
            />
            Agent editing
          </div>

          {codeLines.map((line, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                padding: '0 12px 0 0',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(3px)',
                transition: `opacity 0.3s ease ${i * 0.06}s, transform 0.3s ease ${i * 0.06}s`,
              }}
            >
              <span
                style={{
                  width: 26,
                  flexShrink: 0,
                  textAlign: 'right',
                  paddingRight: 10,
                  color: '#cdcbc9',
                  userSelect: 'none' as const,
                }}
              >
                {i + 1}
              </span>
              <span style={{ whiteSpace: 'pre' as const, overflow: 'hidden' }}>
                {line.map(([text, color], j) => (
                  <span key={j} style={{ color }}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        {/* Preview pane */}
        <div style={{ flex: 1, padding: '20px 22px', overflow: 'hidden', minWidth: 0 }}>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#111',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.4s ease 0.2s',
            }}
          >
            Q3 Launch Report
          </div>
          <div
            style={{
              fontSize: '11px',
              color: '#999',
              marginTop: '2px',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.4s ease 0.3s',
            }}
          >
            Generated from your notes · updated just now
          </div>

          {/* KPI cards */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            {kpis.map((k, i) => (
              <div
                key={k.label}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '10px 11px',
                  border: '1px solid #ececeb',
                  borderRadius: '9px',
                  background: '#fafafa',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(6px)',
                  transition: `opacity 0.4s ease ${0.35 + i * 0.1}s, transform 0.4s ease ${0.35 + i * 0.1}s`,
                }}
              >
                <div style={{ fontSize: '9.5px', color: '#999', whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {k.label}
                </div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: '#111', marginTop: '3px' }}>{k.value}</div>
                <div style={{ fontSize: '9.5px', color: '#3da55d', fontWeight: 600, marginTop: '1px' }}>{k.delta}</div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div
            style={{
              marginTop: '16px',
              padding: '14px 14px 12px',
              border: '1px solid #ececeb',
              borderRadius: '9px',
              background: '#fff',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.4s ease 0.6s',
            }}
          >
            <div style={{ fontSize: '10px', color: '#999', marginBottom: '10px' }}>Weekly signups</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '64px' }}>
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: visible ? `${h}%` : '0%',
                    background: i === bars.length - 1 ? '#3d9a72' : '#cfe8da',
                    borderRadius: '3px 3px 0 0',
                    transition: `height 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.7 + i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gtArtifactPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @media (max-width: 560px) { .gt-artifact-code { display: none !important; } }
      `}</style>
    </div>
  );
}
