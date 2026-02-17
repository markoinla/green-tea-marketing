const navItems = ['General', 'Appearance', 'Models', 'Skills', 'Accounts', 'MCP Servers'];

const skills = [
  { name: 'apollo-io-search', desc: 'Search Apollo.io database for prospects...' },
  { name: 'copy-editing', desc: 'When the user wants to edit, review, or...' },
  { name: 'copywriting', desc: 'When the user wants to write, rewrite, or...' },
  { name: 'docx', desc: 'Use this skill whenever the user wants t...' },
  { name: 'pdf', desc: 'Use this skill whenever the user wants t...' },
  { name: 'pdf-to-notes', desc: 'Convert PDF documents into well-...' },
  { name: 'pptx', desc: 'Use this skill any time a .pptx file is...' },
  { name: 'product-marketing-context', desc: 'When the user wants to create or updat...' },
  { name: 'skill-creator', desc: 'Guide for creating effective skills. This...' },
  { name: 'xlsx', desc: 'Use this skill any time a spreadsheet file ...' },
];

export default function SkillsMockup() {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '14px',
      border: '1px solid #e5e5e5',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      display: 'flex',
      overflow: 'hidden',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: '14px',
      color: '#1a1a1a',
      maxWidth: '720px',
      width: '100%',
      pointerEvents: 'none' as const,
      userSelect: 'none' as const,
    }}>
      {/* Sidebar */}
      <div style={{
        width: '160px',
        flexShrink: 0,
        borderRight: '1px solid #e5e5e5',
        padding: '24px 0',
      }}>
        <div style={{
          fontSize: '18px',
          fontWeight: 600,
          padding: '0 20px',
          marginBottom: '16px',
        }}>Settings</div>
        {navItems.map((item) => (
          <div key={item} style={{
            padding: '6px 20px',
            fontSize: '14px',
            color: item === 'Skills' ? '#1a1a1a' : '#888',
            fontWeight: item === 'Skills' ? 600 : 400,
            borderLeft: item === 'Skills' ? '2px solid #1a1a1a' : '2px solid transparent',
            cursor: 'default',
          }}>{item}</div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '24px 28px', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 600 }}>Skills</div>
            <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>
              Install and manage agent skills from GitHub.
            </div>
          </div>
          <span style={{ fontSize: '18px', color: '#999', cursor: 'default' }}>&times;</span>
        </div>

        {/* Browse button */}
        <div style={{
          marginTop: '16px',
          padding: '10px',
          background: '#f0f0f8',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#555',
          cursor: 'default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Browse Marketplace
        </div>

        {/* URL input */}
        <div style={{ marginTop: '14px' }}>
          <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.5 }}>
            Add agent skills from GitHub. Paste a URL like<br />
            https://github.com/owner/repo/tree/branch/skills/name
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <div style={{
              flex: 1,
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#bbb',
            }}>https://github.com/...</div>
            <div style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#555',
              cursor: 'default',
            }}>Add</div>
          </div>
        </div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginTop: '16px',
        }}>
          {skills.map(({ name, desc }) => (
            <div key={name} style={{
              padding: '12px 14px',
              background: '#f6f6fa',
              borderRadius: '8px',
              cursor: 'default',
              minWidth: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#4abe4a',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontWeight: 600,
                  fontSize: '13px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap' as const,
                }}>{name}</span>
              </div>
              <div style={{
                fontSize: '12px',
                color: '#888',
                marginTop: '4px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap' as const,
              }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
