import { GitFork, Brain, Wrench, Plug, Shapes, KeyRound } from 'lucide-react';

const features = [
  {
    icon: GitFork,
    title: 'Open source & local-first',
    desc: 'Open, auditable, and self-hostable, with no lock-in. Your notes and everything the AI touches stay on your machine, not someone else’s cloud.',
  },
  {
    icon: Brain,
    title: 'Agents that do the work',
    desc: 'Not just chat. One AI that knows your whole workspace and runs tasks in the background. Tell it to pull competitor pricing every Monday morning and it will.',
  },
  {
    icon: Shapes,
    title: 'Canvas, tables & docs',
    desc: 'Far more than notes. Excalidraw canvases, editable tables, HTML dashboards, and PDFs sit right beside your notes. The agent can build Word, Excel, and slides too.',
  },
  {
    icon: Plug,
    title: 'Connects to your tools',
    desc: 'Link Google and Microsoft and the agent works from your real calendar, inbox, and Drive. Add MCP servers to reach almost anything else.',
  },
  {
    icon: Wrench,
    title: 'Skills & automations',
    desc: 'Build your own AI tools and workflows. Teach Green Tea new tricks and make it work the way you do. No terminal required.',
  },
  {
    icon: KeyRound,
    title: 'Any model, your key',
    desc: 'Bring your own key. Start with the open models that ship with the app, or plug in your own. You pick what touches your data, and you pay no markup.',
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
        }}>Green Tea runs on a professional-grade agent framework, the same kind of AI tooling that powers serious developer tools, wrapped in a notes app anyone can use. It does real work for you instead of just chatting.</p>
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
