import { useEffect, useRef, useState } from 'react';

const miniStats = [
  { label: 'Signups', value: '2,481' },
  { label: 'Activation', value: '64%' },
  { label: 'Revenue', value: '$38.2k' },
];

const bars = [40, 56, 48, 70, 62, 86];

export default function SharePublishMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

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
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setCopied(true), 1400);
    const t2 = setTimeout(() => setCopied(false), 3600);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [visible]);

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
        fontSize: '14px',
        color: '#1a1a1a',
        maxWidth: '540px',
        width: '100%',
        pointerEvents: 'none' as const,
        userSelect: 'none' as const,
      }}
    >
      {/* Share panel */}
      <div style={{ padding: '22px 24px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3d9a72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 600 }}>Share “Q3 Launch Report”</div>
              <div style={{ fontSize: '12.5px', color: '#999', marginTop: '1px' }}>Anyone with the link can view</div>
            </div>
          </div>
          <span style={{ fontSize: '18px', color: '#999', cursor: 'default' }}>&times;</span>
        </div>

        {/* Public toggle row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '18px',
            padding: '11px 14px',
            border: '1px solid #ececeb',
            borderRadius: '10px',
            background: '#fafafa',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3da55d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Public link</div>
              <div style={{ fontSize: '11.5px', color: '#999' }}>Live · updates automatically</div>
            </div>
          </div>
          {/* Toggle (on) */}
          <div style={{ width: '38px', height: '22px', borderRadius: '11px', background: '#4abe4a', position: 'relative', flexShrink: 0 }}>
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '2px', left: '18px', boxShadow: '0 1px 3px rgba(0,0,0,0.18)' }} />
          </div>
        </div>

        {/* URL field */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 13px',
              border: '1px solid #ddd',
              borderRadius: '9px',
              fontSize: '13px',
              color: '#444',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>
              greentea.pub/r/q3-launch-report
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 16px',
              borderRadius: '9px',
              background: copied ? '#eaf5ea' : '#3d9a72',
              color: copied ? '#3da55d' : '#fff',
              fontSize: '13px',
              fontWeight: 500,
              flexShrink: 0,
              transition: 'background 0.25s ease, color 0.25s ease',
            }}
          >
            {copied ? (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3da55d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </>
            )}
          </div>
        </div>

        {/* Meta row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', fontSize: '12px', color: '#999' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Expires in 30 days · renew anytime
          </span>
          <span style={{ color: '#3d9a72', fontWeight: 500 }}>Update published version</span>
        </div>
      </div>

      {/* Recipient browser preview */}
      <div style={{ borderTop: '1px solid #eeedec', background: '#f6f5f4', padding: '16px 18px 0' }}>
        <div
          style={{
            background: '#fff',
            border: '1px solid #e5e3e1',
            borderRadius: '10px 10px 0 0',
            borderBottom: 'none',
            overflow: 'hidden',
            boxShadow: '0 -1px 0 rgba(0,0,0,0.02)',
          }}
        >
          {/* Browser chrome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #eeedec', background: '#faf9f8' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#f0efee',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '11px',
                color: '#9b9997',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9b9997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              greentea.pub/r/q3-launch-report
            </div>
          </div>

          {/* Rendered published page */}
          <div style={{ padding: '16px 18px 18px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>Q3 Launch Report</div>
            <div style={{ fontSize: '10.5px', color: '#aaa', marginTop: '2px' }}>Shared by Green Tea</div>
            <div style={{ display: 'flex', gap: '7px', marginTop: '12px' }}>
              {miniStats.map((s) => (
                <div key={s.label} style={{ flex: 1, minWidth: 0, padding: '8px 10px', border: '1px solid #ececeb', borderRadius: '8px', background: '#fafafa' }}>
                  <div style={{ fontSize: '9px', color: '#999', whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', marginTop: '2px' }}>{s.value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '7px', height: '42px', marginTop: '14px' }}>
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: visible ? `${h}%` : '0%',
                    background: i === bars.length - 1 ? '#3d9a72' : '#cfe8da',
                    borderRadius: '2px 2px 0 0',
                    transition: `height 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
