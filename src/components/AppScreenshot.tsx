import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export default function AppScreenshot() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typewriterParagraphs = [
    "I've spent the last year vibe coding... a lot of vibe coding. I built tools for my sister to manage her flower business, games for my nephews, and about a dozen other projects that solve very specific problems in my work and life.",
    "Here's what I realized: we're entering an era where software can be built for an audience of one. This is more powerful than we realize at this moment. Software that solves your exact problem, built the way you want it, for the price of your time.",
  ];
  const totalChars = typewriterParagraphs.join('').length;
  const typewriterDone = charIndex >= totalChars;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || charIndex >= totalChars) return;
    const delay = charIndex === 0 ? 1200 : Math.random() * 8 + 4;
    const t = setTimeout(() => setCharIndex((c) => Math.min(c + 1, totalChars)), delay);
    return () => clearTimeout(t);
  }, [visible, charIndex, totalChars]);

  const sans = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
  const serif = "'Georgia', 'Times New Roman', serif";

  const folders = [
    {
      name: 'Content',
      expanded: true,
      files: [
        { name: 'Green Tea Blog Post - The Notes ...', active: true },
        { name: 'Green Tea Linkedin Post - Outline' },
        { name: 'Product Hunt Launch Copy' },
        { name: 'Twitter/X Launch Thread Draft' },
        { name: 'App Store Description & Keywords' },
      ],
    },
    {
      name: 'Research',
      expanded: true,
      files: [
        { name: 'Competitor Analysis - Notion, Obs...' },
        { name: "April Dunford's Positioning Frame..." },
        { name: 'AI Note Apps Market Landscape' },
        { name: 'User Interview Notes - Beta Testers' },
      ],
    },
    {
      name: 'Launch Plan',
      expanded: false,
      files: [],
    },
    {
      name: 'Messaging',
      expanded: false,
      files: [],
    },
  ];

  return (
    <div
      ref={ref}
      className="gt-mockup-root"
      style={{
        width: 1240,
        margin: '0 auto',
        perspective: 1200,
        position: 'relative',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease',
        transformOrigin: 'top center',
      }}
    >
      <div
        style={{
          transform: 'translate(15%) scale(1.2) rotateX(20deg) rotateY(15deg) rotate(345deg)',
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid #e0dedc',
          background: '#ffffff',
          fontFamily: sans,
          fontSize: 11,
          color: '#1a1a1a',
          userSelect: 'none',
          pointerEvents: 'none',
          position: 'relative',
        }}
      >
        {/* ── Title bar ── */}
        <div
          style={{
            height: 36,
            background: '#f6f5f4',
            borderBottom: '1px solid #e0dedc',
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: 7 }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 11,
              fontWeight: 500,
              color: '#999',
              letterSpacing: '0.01em',
            }}
          >
            Green Tea
          </span>
        </div>

        {/* ── Body ── */}
        <div style={{ display: 'flex', height: 680 }}>

          {/* ── Left Sidebar ── */}
          <div
            style={{
              width: 210,
              background: '#fafaf9',
              borderRight: '1px solid #eeedec',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            {/* Sidebar header: app name + icons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 10px 7px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontWeight: 600, fontSize: 11.5, color: '#1a1a1a' }}>
                Green Tea
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                </svg>
              </div>
            </div>

            {/* Search bar */}
            <div style={{ padding: '0 8px', marginBottom: 10 }}>
              <div
                style={{
                  background: '#f0efee',
                  borderRadius: 5,
                  padding: '4px 8px',
                  fontSize: 10.5,
                  color: '#b0aeab',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b0aeab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search
                </div>
                <span style={{ fontSize: 9, color: '#ccc', fontFamily: 'monospace' }}>⌘K</span>
              </div>
            </div>

            {/* Folders and files */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
              {folders.map((folder, fi) => (
                <div key={fi} style={{ marginBottom: 2 }}>
                  {/* Folder row */}
                  <div style={{ padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 4, fontSize: 10.5, color: '#555', fontWeight: 500, cursor: 'default' }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      {folder.expanded
                        ? <polyline points="6 9 12 15 18 9" />
                        : <polyline points="9 18 15 12 9 6" />
                      }
                    </svg>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                    {folder.name}
                  </div>
                  {/* Files */}
                  {folder.expanded && folder.files.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '3px 10px 3px 30px',
                        fontSize: 10,
                        color: (f as any).active ? '#1a1a1a' : '#6b6966',
                        fontWeight: (f as any).active ? 500 : 400,
                        background: (f as any).active ? '#eeedeb' : 'transparent',
                        borderRadius: (f as any).active ? 4 : 0,
                        margin: (f as any).active ? '0 5px' : 0,
                        paddingLeft: (f as any).active ? 25 : 30,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        cursor: 'default',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={(f as any).active ? '#555' : '#bbb'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                      </svg>
                      {f.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom section */}
            <div style={{ borderTop: '1px solid #eeedec' }}>
              {/* FILES */}
              <div style={{ padding: '8px 10px 3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  <span style={{ fontSize: 9.5, fontWeight: 600, color: '#777', letterSpacing: '0.03em' }}>FILES</span>
                </div>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <div style={{ padding: '3px 10px 8px 23px', fontSize: 9.5, color: '#c5c3c0' }}>
                Drop files or folders here
              </div>

              {/* Scheduled Tasks */}
              <div style={{ position: 'relative' }}>
                <div style={{ padding: '5px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 10.5, color: '#555', cursor: 'default', background: '#eeedeb', borderRadius: 6, margin: '0 5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    Scheduled Tasks
                  </div>
                  <span style={{ fontSize: 9, background: '#e2e0de', borderRadius: 8, padding: '1px 6px', color: '#888' }}>2</span>
                </div>

                {/* Popover */}
                <div
                  style={{
                    position: 'absolute',
                    left: '100%',
                    bottom: -10,
                    marginLeft: 6,
                    width: 260,
                    background: '#fff',
                    borderRadius: 10,
                    border: '1px solid #e8e6e4',
                    boxShadow: '0 6px 30px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.04)',
                    padding: '10px 0',
                    zIndex: 10,
                    fontSize: 10,
                  }}
                >
                  {/* Popover header */}
                  <div style={{ padding: '2px 14px 8px', borderBottom: '1px solid #f0eeec' }}>
                    <div style={{ fontWeight: 600, fontSize: 11.5, color: '#111' }}>Scheduled Tasks</div>
                    <div style={{ fontSize: 9.5, color: '#aaa', marginTop: 1 }}>2 tasks</div>
                  </div>

                  {/* Task 1 */}
                  <div style={{ padding: '10px 14px 8px' }}>
                    <div style={{ fontWeight: 600, fontSize: 10.5, color: '#222' }}>Morning Daily Briefing</div>
                    <div style={{ fontSize: 9.5, color: '#999', marginTop: 1 }}>Weekdays at 8:00 AM</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, color: '#aaa' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4aba70', display: 'inline-block' }} />
                        4h ago &middot; Next in 19h
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 500, color: '#3d9a72', background: '#e8f5ee', borderRadius: 6, padding: '2px 8px' }}>On</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ borderTop: '1px solid #f0eeec', margin: '0 14px' }} />

                  {/* Task 2 */}
                  <div style={{ padding: '10px 14px 4px' }}>
                    <div style={{ fontWeight: 600, fontSize: 10.5, color: '#222' }}>Daily meeting action items compiler</div>
                    <div style={{ fontSize: 9.5, color: '#999', marginTop: 1 }}>Weekdays at 8:05 AM</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, color: '#aaa' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4aba70', display: 'inline-block' }} />
                        4h ago &middot; Next in 19h
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 500, color: '#3d9a72', background: '#e8f5ee', borderRadius: 6, padding: '2px 8px' }}>On</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div style={{ padding: '5px 10px 10px', display: 'flex', alignItems: 'center', gap: 6, fontSize: 10.5, color: '#777', cursor: 'default' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                Settings
              </div>
            </div>
          </div>

          {/* ── Main content area ── */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            {/* Document toolbar */}
            <div
              style={{
                height: 36,
                borderBottom: '1px solid #eeedec',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                gap: 7,
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
              </svg>
              <span style={{ flex: 1, fontSize: 10.5, color: '#555', fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Green Tea Blog Post - The Notes App That Actually Works
              </span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {/* Document body */}
            <div
              style={{
                flex: 1,
                padding: '28px 44px',
                overflowY: 'auto',
                lineHeight: 1.7,
              }}
            >
              <h2
                style={{
                  fontFamily: serif,
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  margin: 0,
                  lineHeight: 1.25,
                  color: '#111',
                }}
              >
                Apps that build themselves, for you
              </h2>
              <p
                style={{
                  fontFamily: serif,
                  fontSize: 12.5,
                  fontStyle: 'italic',
                  color: '#3d9a72',
                  margin: '8px 0 16px',
                  lineHeight: 1.55,
                }}
              >
                We're entering an era where software can be built for an audience of one — and it's changing how we think about software, AI tools and knowledge work.
              </p>
              <hr style={{ border: 'none', borderTop: '1px solid #e8e6e4', margin: '14px 0' }} />

              <style>{`@keyframes gtPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } } @keyframes gtBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>

              {/* Bordered editing region */}
              <div
                style={{
                  position: 'relative',
                  borderLeft: charIndex > 0 ? `2px solid ${typewriterDone ? '#c8e6d4' : '#3d9a72'}` : '2px solid transparent',
                  paddingLeft: 12,
                  marginLeft: -14,
                  transition: 'border-color 0.4s ease',
                }}
              >
                {/* Badge */}
                {charIndex > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -8,
                      left: -2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      background: typewriterDone ? '#f6f5f4' : '#f0faf4',
                      border: `1px solid ${typewriterDone ? '#e0dedc' : '#c8e6d4'}`,
                      borderRadius: 4,
                      padding: '1px 7px',
                      fontSize: 8.5,
                      fontWeight: 500,
                      fontFamily: sans,
                      color: typewriterDone ? '#999' : '#3d9a72',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {typewriterDone ? (
                      <>
                        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#3d9a72" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        Edit complete
                      </>
                    ) : (
                      <>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#3d9a72', display: 'inline-block', animation: 'gtPulse 1.2s ease-in-out infinite' }} />
                        Editing...
                      </>
                    )}
                  </div>
                )}

                {/* Typewriter paragraphs */}
                {typewriterParagraphs.map((text, pi) => {
                  const prevLen = typewriterParagraphs.slice(0, pi).join('').length;
                  const visibleCount = Math.max(0, Math.min(charIndex - prevLen, text.length));
                  const showCursor = !typewriterDone && charIndex >= prevLen && charIndex < prevLen + text.length;
                  if (charIndex <= prevLen && pi > 0) return null;
                  return (
                    <p key={pi} style={{ fontSize: 11.5, color: '#333', marginBottom: 14, lineHeight: 1.7, position: 'relative' }}>
                      <span>{text.slice(0, visibleCount)}</span>
                      {showCursor && (
                        <span
                          style={{
                            display: 'inline-block',
                            width: 1.5,
                            height: 13,
                            background: '#3d9a72',
                            marginLeft: 1,
                            verticalAlign: 'text-bottom',
                            animation: 'gtBlink 0.6s step-end infinite',
                          }}
                        />
                      )}
                      <span style={{ color: 'transparent' }}>{text.slice(visibleCount)}</span>
                    </p>
                  );
                })}
              </div>
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#111',
                  margin: '24px 0 10px',
                  lineHeight: 1.3,
                }}
              >
                Coding Agents are phenomenal at Knowledge Work
              </h3>
              <p style={{ fontSize: 11.5, color: '#333', marginBottom: 14, lineHeight: 1.7 }}>
                While progress in other areas is accelerating, we're seeing the biggest AI impact in software development. Because agents can easily test their work, building software creates a feedback loop that unlocks rapid, incremental progress.
              </p>
              <p style={{ fontSize: 11.5, color: '#333', marginBottom: 14, lineHeight: 1.7 }}>
                But as my vibe coding and daily work started blending together, I discovered something that initially surprised me: coding agents are incredible for knowledge work too.
              </p>
              <p style={{ fontSize: 11.5, color: '#333', marginBottom: 14, lineHeight: 1.7 }}>
                They can search through dozens of files or websites to get context. Extract specific information to know what to change. Make precise edits to documents. I've been doing a lot of my writing in tools built for software engineers — VS Code, Cursor, even Claude Code — because they let AI work with me, not just at me.
              </p>
              <p style={{ fontSize: 11.5, color: '#333', marginBottom: 14, lineHeight: 1.7 }}>
                I've tried to get my non-techy friends writing and building the same way. It always fails. There's too much terminal, too much git, too much friction.
              </p>
              <p style={{ fontSize: 11.5, color: '#333', marginBottom: 14, lineHeight: 1.7 }}>
                So I built something different.
              </p>
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#111',
                  margin: '24px 0 10px',
                  lineHeight: 1.3,
                }}
              >
                Introducing Green Tea
              </h3>
              <p style={{ fontSize: 11.5, color: '#333', lineHeight: 1.7 }}>
                Green Tea is a notes app built on a powerful AI coding agent framework. It's a desktop app — all of your data lives on your computer. Full data privacy, no cloud or account required.
              </p>
            </div>
          </div>

          {/* ── Right panel — AI assistant ── */}
          <div
            style={{
              width: 360,
              background: '#fafaf9',
              borderLeft: '1px solid #eeedec',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            {/* Tab bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #eeedec',
                padding: '0 10px',
                height: 36,
                gap: 7,
              }}
            >
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 500,
                  color: '#3d9a72',
                  background: '#eaf5ef',
                  padding: '3px 9px',
                  borderRadius: 5,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Boost Your Pro...
              </span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>

            {/* Model selector row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                borderBottom: '1px solid #eeedec',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10.5, color: '#555' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3d9a72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontWeight: 500 }}>Green Tea</span>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 9.5, color: '#bbb' }}>85.2k</span>
                <span style={{ fontSize: 9.5, color: '#bbb' }}>Clear</span>
              </div>
            </div>

            {/* Chat messages */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                fontSize: 10.5,
                lineHeight: 1.5,
              }}
            >
              {[
                // bubble 0 - assistant
                { type: 'assistant' as const, delay: 0.3, content: (
                  <div style={{ color: '#444' }}>
                    <ul style={{ margin: 0, paddingLeft: 16 }}>
                      <li style={{ marginBottom: 3 }}>
                        Ended with a wink: "so you don't have to" — reinforces the "works while you sleep" concept with a light touch
                      </li>
                    </ul>
                    <p style={{ margin: '8px 0 0' }}>Want me to apply this edit to the document?</p>
                  </div>
                )},
                // bubble 1 - user
                { type: 'user' as const, delay: 0.9, content: 'yes' },
                // bubble 2 - actions
                { type: 'actions' as const, delay: 1.5, content: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9.5, color: '#999' }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    3 actions — Proposing changes to Green Tea...
                  </div>
                )},
                // bubble 3 - assistant result
                { type: 'assistant' as const, delay: 2.1, content: (
                  <div style={{ color: '#444' }}>
                    <p style={{ margin: '0 0 8px', fontWeight: 500 }}>Done! The section now reads:</p>
                    <div style={{ fontStyle: 'italic', color: '#3d9a72', lineHeight: 1.55, fontSize: 10, margin: '0 0 10px' }}>
                      "Connect it to your email and calendar, and Green Tea becomes your daily briefing — know exactly what meetings you have and which emails are silently judging you. Convert docs to Word, pull insights from spreadsheets, automate your morning updates — all without leaving your notes."
                    </div>
                    <p style={{ margin: 0, lineHeight: 1.55 }}>
                      The playful "silently judging you" line adds personality while still communicating the benefit.
                    </p>
                  </div>
                )},
                // bubble 4 - user
                { type: 'user' as const, delay: 3.0, content: 'Can you also strengthen the intro paragraph? Make the hook more compelling.' },
                // bubble 5 - assistant
                { type: 'assistant' as const, delay: 3.8, content: (
                  <div style={{ color: '#444' }}>
                    <p style={{ margin: '0 0 6px', fontWeight: 500 }}>Here's a revised intro:</p>
                    <div style={{ fontStyle: 'italic', color: '#3d9a72', lineHeight: 1.55, fontSize: 10, margin: '0 0 8px' }}>
                      "Most note apps are where ideas go to die. Green Tea is where they come alive — an AI-native workspace that reads your documents, drafts your emails, and automates the busywork you keep putting off."
                    </div>
                    <p style={{ margin: 0, lineHeight: 1.55 }}>
                      This version leads with a provocation and immediately contrasts it with what Green Tea does differently. Want me to apply it?
                    </p>
                  </div>
                )},
                // bubble 6 - user
                { type: 'user' as const, delay: 4.6, content: 'Yes, apply it. Also make the CTA at the end more urgent.' },
                // bubble 7 - actions
                { type: 'actions' as const, delay: 5.2, content: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9.5, color: '#999' }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    2 actions — Editing Green Tea Blog Post...
                  </div>
                )},
                // bubble 8 - assistant
                { type: 'assistant' as const, delay: 5.8, content: (
                  <div style={{ color: '#444' }}>
                    <p style={{ margin: '0 0 6px', fontWeight: 500 }}>Both changes applied. The new CTA reads:</p>
                    <div style={{ fontStyle: 'italic', color: '#3d9a72', lineHeight: 1.55, fontSize: 10, margin: '0 0 8px' }}>
                      "Download Green Tea today — your first daily briefing is waiting for you tomorrow morning."
                    </div>
                    <p style={{ margin: 0, lineHeight: 1.55 }}>
                      Short, action-oriented, and creates anticipation. The post is looking really strong now — ready to publish?
                    </p>
                  </div>
                )},
              ].map((bubble, i) => (
                <div
                  key={i}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(8px)',
                    transition: `opacity 0.5s ease ${bubble.delay}s, transform 0.5s ease ${bubble.delay}s`,
                    ...(bubble.type === 'user' ? { alignSelf: 'flex-end' } : {}),
                  }}
                >
                  {bubble.type === 'user' ? (
                    <span style={{ background: '#eeedeb', borderRadius: 9, padding: '4px 12px', fontSize: 10.5, color: '#333', display: 'inline-block' }}>
                      {bubble.content}
                    </span>
                  ) : bubble.type === 'actions' ? (
                    bubble.content
                  ) : (
                    bubble.content
                  )}
                </div>
              ))}
            </div>

            {/* Input area */}
            <div
              style={{
                padding: '8px 10px',
                borderTop: '1px solid #eeedec',
              }}
            >
              <div
                style={{
                  background: '#f0efee',
                  borderRadius: 7,
                  padding: '7px 10px',
                  fontSize: 10.5,
                  color: '#c5c3c0',
                  marginBottom: 5,
                }}
              >
                Ask anything...
              </div>
              {/* Bottom toolbar icons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1px 0',
                }}
              >
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontSize: 11, color: '#ccc', fontWeight: 600 }}>@</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ fontSize: 9, color: '#ccc' }}>Fast</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#3d9a72" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontSize: 9, color: '#666' }}>Auto</span>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" />
                  </svg>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right-side fade gradient — matches window transform */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          transform: 'translate(15%) scale(1.2) rotateX(20deg) rotateY(15deg) rotate(345deg)',
          pointerEvents: 'none',
        }}
      >
        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '35%',
            background: 'linear-gradient(to right, rgba(250,250,250,0) 0%, rgba(250,250,250,0.6) 50%, rgba(250,250,250,1) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '35%',
            background: 'linear-gradient(to bottom, rgba(250,250,250,0) 0%, rgba(250,250,250,0.6) 50%, rgba(250,250,250,1) 100%)',
          }}
        />
      </div>
      <style>{`
        @media (max-width: 1240px) {
          .gt-mockup-root { transform: scale(calc(100vw / 1240)); }
        }
      `}</style>
    </div>
  );
}
