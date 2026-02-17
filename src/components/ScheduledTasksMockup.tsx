const tasks = [
  {
    title: 'Morning Daily Briefing',
    schedule: 'Weekdays at 8:00 AM',
    status: 'completed',
    statusText: '5h ago',
    nextText: 'Next in 18h',
  },
  {
    title: 'Daily meeting action items compiler',
    schedule: 'Weekdays at 8:05 AM',
    status: 'completed',
    statusText: '5h ago',
    nextText: 'Next in 18h',
  },
  {
    title: 'Daily Edge Computing Briefing',
    schedule: 'Weekdays at 7:30 AM',
    status: 'running',
    statusText: 'Running...',
    nextText: '',
  },
];

export default function ScheduledTasksMockup() {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '14px',
      border: '1px solid #e5e5e5',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: '14px',
      color: '#1a1a1a',
      maxWidth: '520px',
      width: '100%',
      pointerEvents: 'none' as const,
      userSelect: 'none' as const,
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ padding: '20px 24px 16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 600 }}>Scheduled Tasks</div>
        <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>
          {tasks.length} tasks
        </div>
      </div>

      {/* Task list */}
      {tasks.map(({ title, schedule, status, statusText, nextText }, i) => (
        <div key={i} style={{
          padding: '18px 24px',
          borderTop: '1px solid #f0f0f0',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            {status === 'running' && (
              <svg width="18" height="18" viewBox="0 0 18 18" style={{ marginTop: '1px', flexShrink: 0 }}>
                <circle cx="9" cy="9" r="7" fill="none" stroke="#d0d0d0" strokeWidth="2" />
                <path d="M9 2a7 7 0 0 1 7 7" fill="none" stroke="#4a8df8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '15px', fontWeight: 600 }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{schedule}</div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '8px',
            paddingLeft: status === 'running' ? '26px' : 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              {status === 'completed' && (
                <>
                  <span style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#4abe4a',
                    flexShrink: 0,
                  }} />
                  <span style={{ color: '#888' }}>
                    {statusText} &middot; {nextText}
                  </span>
                </>
              )}
              {status === 'running' && (
                <span style={{ color: '#4a8df8' }}>{statusText}</span>
              )}
            </div>
            <span style={{
              padding: '3px 10px',
              borderRadius: '6px',
              background: '#eaf5ea',
              color: '#3da55d',
              fontSize: '12px',
              fontWeight: 500,
            }}>On</span>
          </div>
        </div>
      ))}
    </div>
  );
}
