interface Service {
  name: string;
  detail: string;
  color: string;
  icon: 'calendar' | 'mail' | 'drive' | 'outlook';
}

interface Account {
  name: string;
  email: string;
  services: Service[];
}

const accounts: Account[] = [
  {
    name: 'Google',
    email: 'you@gmail.com',
    services: [
      { name: 'Calendar', detail: 'Events & schedule', color: '#4285f4', icon: 'calendar' },
      { name: 'Gmail', detail: 'Search & read mail', color: '#ea4335', icon: 'mail' },
      { name: 'Drive', detail: 'Docs, Sheets & Slides', color: '#0f9d58', icon: 'drive' },
    ],
  },
  {
    name: 'Microsoft',
    email: 'you@outlook.com',
    services: [
      { name: 'Outlook', detail: 'Search & read mail', color: '#0078d4', icon: 'outlook' },
    ],
  },
];

function ServiceIcon({ icon, color }: { icon: Service['icon']; color: string }) {
  const common = {
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  const paths = {
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </>
    ),
    drive: (
      <>
        <path d="M8 3l8 14H8L4 10z" />
        <path d="M8 17h12l-4-7" />
      </>
    ),
    outlook: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </>
    ),
  };
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 7,
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg {...common}>{paths[icon]}</svg>
    </div>
  );
}

export default function IntegrationsMockup() {
  return (
    <div
      style={{
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
      }}
    >
      {/* Header */}
      <div style={{ padding: '24px 28px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 600 }}>Accounts</div>
            <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>
              Connect accounts so your agent can work with your real data.
            </div>
          </div>
          <span style={{ fontSize: '18px', color: '#999', cursor: 'default' }}>&times;</span>
        </div>
      </div>

      {/* Accounts */}
      <div style={{ padding: '20px 28px 28px' }}>
        {accounts.map((account, idx) => (
          <div
            key={account.name}
            style={{
              borderTop: idx > 0 ? '1px solid rgba(61, 154, 114, 0.15)' : 'none',
              paddingTop: idx > 0 ? '20px' : 0,
              marginTop: idx > 0 ? '20px' : 0,
            }}
          >
            {/* Account header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 600 }}>{account.name}</span>
                <span style={{ fontSize: '13px', color: '#aaa' }}>{account.email}</span>
              </div>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  background: '#eaf5ea',
                  color: '#3da55d',
                  fontSize: '12px',
                  fontWeight: 500,
                }}
              >
                <span
                  style={{ width: 7, height: 7, borderRadius: '50%', background: '#4abe4a', display: 'inline-block' }}
                />
                Connected
              </span>
            </div>

            {/* Services */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {account.services.map((service) => (
                <div
                  key={service.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    border: '1px solid #e8e8e8',
                    borderRadius: '10px',
                    background: '#fafafa',
                  }}
                >
                  <ServiceIcon icon={service.icon} color={service.color} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '14px', fontWeight: 500 }}>{service.name}</div>
                    <div style={{ fontSize: '12px', color: '#999', marginTop: '1px' }}>{service.detail}</div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4abe4a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
