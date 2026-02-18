interface Provider {
  name: string;
  connected: boolean;
  expanded: boolean;
  models?: { name: string; enabled: boolean }[];
}

const providers: Provider[] = [
  {
    name: 'Anthropic',
    connected: true,
    expanded: true,
    models: [
      { name: 'Claude Sonnet 4.5', enabled: false },
      { name: 'Claude Opus 4.6', enabled: true },
      { name: 'Claude Haiku 4.5', enabled: true },
    ],
  },
  { name: 'Together AI', connected: false, expanded: false },
  { name: 'OpenRouter', connected: false, expanded: false },
];

function Toggle({ enabled }: { enabled: boolean }) {
  return (
    <div style={{
      width: '36px',
      height: '20px',
      borderRadius: '10px',
      background: enabled ? '#4abe4a' : '#d0d0d0',
      position: 'relative',
      flexShrink: 0,
      transition: 'background 0.2s ease',
    }}>
      <div style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#fff',
        position: 'absolute',
        top: '2px',
        left: enabled ? '18px' : '2px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        transition: 'left 0.2s ease',
      }} />
    </div>
  );
}

export default function ModelsMockup() {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '14px',
      border: '1px solid #e5e5e5',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      overflow: 'hidden',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: '14px',
      color: '#1a1a1a',
      maxWidth: '520px',
      width: '100%',
      pointerEvents: 'none' as const,
      userSelect: 'none' as const,
    }}>
      {/* Header */}
      <div style={{ padding: '24px 28px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 600 }}>Models</div>
            <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>
              Add API keys and choose which models are available.
            </div>
          </div>
          <span style={{ fontSize: '18px', color: '#999', cursor: 'default' }}>&times;</span>
        </div>
      </div>

      {/* Providers */}
      <div style={{ padding: '24px 28px' }}>
        {providers.map((provider, idx) => (
          <div key={provider.name} style={{
            borderTop: idx > 0 ? '1px solid rgba(61, 154, 114, 0.15)' : 'none',
            paddingTop: idx > 0 ? '20px' : 0,
            marginTop: idx > 0 ? '20px' : 0,
          }}>
            {/* Provider header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 600 }}>{provider.name}</span>
                {provider.connected && (
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#4abe4a',
                    flexShrink: 0,
                  }} />
                )}
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: provider.expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Expanded content */}
            {provider.expanded && provider.models && (
              <div style={{ marginTop: '16px' }}>
                {/* API Key section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                  </svg>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>API Key</span>
                </div>
                <div style={{
                  padding: '10px 14px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1a1a1a',
                  letterSpacing: '1px',
                  lineHeight: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap' as const,
                }}>
                  {'●'.repeat(50)}
                </div>
                <div style={{
                  display: 'inline-block',
                  marginTop: '12px',
                  padding: '7px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#555',
                  cursor: 'default',
                }}>Test Connection</div>

                {/* Models list */}
                <div style={{ marginTop: '20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>Models</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {provider.models.map((model) => (
                      <div key={model.name} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 14px',
                        border: '1px solid #e8e8e8',
                        borderRadius: '10px',
                        background: '#fafafa',
                      }}>
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{model.name}</span>
                        <Toggle enabled={model.enabled} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
