import { GitFork, Brain, Wrench, Clock, Share2, KeyRound } from 'lucide-react';

const features = [
  {
    icon: GitFork,
    title: 'Open source & local-first',
    desc: 'Auditable, no lock-in, self-hostable. Your notes and everything the AI touches stay on your machine, not someone else’s cloud.',
  },
  {
    icon: Brain,
    title: 'Agents that do the work',
    desc: 'Not just chat. One coherent AI with full context of your workspace runs tasks in the background — tell it to pull competitor pricing every Monday morning, and it will.',
  },
  {
    icon: Wrench,
    title: 'Skills & automations',
    desc: 'Build custom AI tools and workflows. Teach your AI coworker new tricks and make it work the way you do — no terminal required.',
  },
  {
    icon: Clock,
    title: 'Scheduled tasks',
    desc: 'Recurring research, monitoring, and briefings that run on autopilot and write straight into your notes.',
  },
  {
    icon: Share2,
    title: 'From notes to published',
    desc: 'Turn notes into reports, dashboards, and slides, then publish to a live interactive link. Hand clients a URL, not a PDF.',
  },
  {
    icon: KeyRound,
    title: 'Any model, your key',
    desc: 'Model agnostic and BYOK. Start with open models out of the box, or drop in your own key — you choose what processes your data, with no markup.',
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
        }}>An open source AI workspace that does real work.</h2>
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 400,
          color: '#6b7472',
          letterSpacing: '0.01em',
          lineHeight: 1.7,
          marginTop: '0.75rem',
        }}>Green Tea runs on a professional-grade agent framework — the same kind of AI tooling that powers serious developer tools — wrapped in a notes app anyone can use. That means real work done for you, not just another chat box.</p>
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
