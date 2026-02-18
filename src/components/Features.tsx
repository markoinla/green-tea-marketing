import { Brain, Gem, Wrench, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Agents within your workflows',
    desc: "Not just chat. Green Tea's AI does the work while you focus on something else. It runs tasks in the background, builds automations, and works while you sleep.",
  },
  {
    icon: Gem,
    title: 'Code without the complexity',
    desc: 'The same powerful AI agent framework that developers use for coding, now in a notes app anyone can use. No technical setup, no prompts to learn, just tell it what you need.',
  },
  {
    icon: Wrench,
    title: 'Skills & Automations',
    desc: 'Build your own custom AI tools and workflows. Teach your AI coworker new tricks. Make Green Tea work the way you work.',
  },
  {
    icon: Clock,
    title: 'Scheduled Tasks',
    desc: 'Your AI coworker never sleeps. Fetch the latest news on topics you track, pull daily briefings from your calendar or email, surface relevant updates automatically.',
  },
  {
    icon: ShieldCheck,
    title: 'Works Offline',
    desc: 'All data stays on your computer, not in the cloud. Full data ownership, works without internet.',
  },
];

export default function Features() {
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2.5rem 3rem',
      maxWidth: '1080px',
      width: '100%',
      marginTop: '300px',
      padding: '0 1rem',
    }}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 500,
          color: '#111111',
          letterSpacing: '-0.02em',
          margin: 0,
        }}>Notes built on a powerful agentic coding framework.</h2>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 400,
          color: '#6b7472',
          letterSpacing: '0.01em',
          lineHeight: 1.7,
          marginTop: '0.75rem',
        }}>Green Tea is built on the <a href="https://github.com/badlogic/pi-mono" target="_blank" rel="noopener noreferrer" style={{ color: '#3d9a72', textDecoration: 'none' }}>Pi coding agent</a>, the same coding agent that powers <a href="https://openclaw.ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#3d9a72', textDecoration: 'none' }}>OpenClaw</a> and is trusted by developers worldwide. That means your notes app has professional-grade AI tools, reliability, and intelligence under the hood.</p>
      </div>

      {features.map(({ icon: Icon, title, desc }) => (
        <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: 'calc((100% - 6rem) / 3)' }}>
          <div style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            background: 'rgba(61, 154, 114, 0.07)',
            color: '#3d9a72',
          }}>
            <Icon size={22} strokeWidth={1.5} />
          </div>
          <h3 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.125rem',
            fontWeight: 500,
            color: '#111111',
            letterSpacing: '-0.01em',
            margin: 0,
          }}>{title}</h3>
          <p style={{
            fontSize: '0.9375rem',
            fontWeight: 400,
            lineHeight: 1.65,
            color: '#6b7472',
            margin: 0,
          }}>{desc}</p>
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          section > div { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
