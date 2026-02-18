import { useState, useEffect, useRef } from 'react';

interface Task {
  title: string;
  schedule: string;
  status: 'completed' | 'running' | 'pending';
  statusText: string;
  nextText: string;
}

const initialTasks: Task[] = [
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
    status: 'pending',
    statusText: '',
    nextText: '',
  },
  {
    title: 'Daily Edge Computing Briefing',
    schedule: 'Weekdays at 7:30 AM',
    status: 'pending',
    statusText: '',
    nextText: '',
  },
];

const sequence: { taskIndex: number; status: 'running' | 'completed'; statusText: string; nextText: string; delay: number }[] = [
  { taskIndex: 1, status: 'running', statusText: 'Running...', nextText: '', delay: 1500 },
  { taskIndex: 1, status: 'completed', statusText: '1m ago', nextText: 'Next in 23h', delay: 5000 },
  { taskIndex: 2, status: 'running', statusText: 'Running...', nextText: '', delay: 6500 },
  { taskIndex: 2, status: 'completed', statusText: 'Just now', nextText: 'Next in 23h', delay: 10000 },
];

export default function ScheduledTasksMockup() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const ref = useRef<HTMLDivElement>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          observer.disconnect();

          const timeouts: ReturnType<typeof setTimeout>[] = [];
          sequence.forEach(({ taskIndex, status, statusText, nextText, delay }) => {
            timeouts.push(setTimeout(() => {
              setTasks(prev => prev.map((task, i) =>
                i === taskIndex ? { ...task, status, statusText, nextText } : task
              ));
            }, delay));
          });
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
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
      <style>{`
        @keyframes spin-task {
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in-task {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }
        @keyframes check-draw {
          from { stroke-dashoffset: 12; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes status-slide {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

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
          transition: 'background-color 0.4s ease',
          backgroundColor: status === 'running' ? 'rgba(74, 141, 248, 0.03)' : 'transparent',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            {status === 'running' && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                style={{
                  marginTop: '1px',
                  flexShrink: 0,
                  animation: 'fade-in-task 0.3s ease-out',
                }}
              >
                <circle cx="9" cy="9" r="7" fill="none" stroke="#d0d0d0" strokeWidth="2" />
                <path
                  d="M9 2a7 7 0 0 1 7 7"
                  fill="none"
                  stroke="#4a8df8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: '9px 9px',
                    animation: 'spin-task 1s linear infinite',
                  }}
                />
              </svg>
            )}
            {status === 'completed' && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                style={{
                  marginTop: '1px',
                  flexShrink: 0,
                  animation: 'fade-in-task 0.35s ease-out',
                }}
              >
                <circle cx="9" cy="9" r="7" fill="none" stroke="#4abe4a" strokeWidth="2" />
                <path
                  d="M5.5 9.5l2 2 5-5"
                  fill="none"
                  stroke="#4abe4a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="12"
                  style={{ animation: 'check-draw 0.4s ease-out forwards' }}
                />
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
            paddingLeft: (status === 'running' || status === 'completed') ? '26px' : 0,
            transition: 'padding-left 0.3s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              {status === 'completed' && (
                <span style={{ animation: 'status-slide 0.4s ease-out', display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                </span>
              )}
              {status === 'running' && (
                <span style={{
                  color: '#4a8df8',
                  animation: 'status-slide 0.3s ease-out',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#4a8df8',
                    animation: 'pulse-dot 1.2s ease-in-out infinite',
                    flexShrink: 0,
                  }} />
                  {statusText}
                </span>
              )}
              {status === 'pending' && (
                <span style={{ color: '#bbb', fontSize: '13px' }}>Waiting...</span>
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
