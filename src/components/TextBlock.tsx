import type { ReactNode } from 'react';

interface TextBlockProps {
  label?: string;
  heading: string;
  body: string | string[];
  buttonText?: string;
  buttonHref?: string;
  children?: ReactNode;
}

export default function TextBlock({ label, heading, body, buttonText, buttonHref, children }: TextBlockProps) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section style={{
      width: '100%',
      maxWidth: '860px',
      textAlign: 'left',
      padding: '0 1rem',
      marginTop: '6rem',
    }}>
      {label && (
        <span style={{
          display: 'block',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase' as const,
          color: '#3d9a72',
          marginBottom: '0.75rem',
        }}>{label}</span>
      )}

      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: '2.5rem',
        fontWeight: 500,
        color: '#111111',
        letterSpacing: '-0.02em',
        margin: 0,
        lineHeight: 1.2,
      }}>{heading}</h2>

      {paragraphs.map((text, i) => (
        <p key={i} style={{
          fontSize: '1.0625rem',
          fontWeight: 400,
          color: '#6b7472',
          letterSpacing: '0.01em',
          lineHeight: 1.7,
          marginTop: '1rem',
          marginBottom: 0,
        }}>{text}</p>
      ))}

      {buttonText && buttonHref && (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
            padding: '0.75rem 1.75rem',
            background: 'rgba(61, 154, 114, 0.08)',
            border: '1px solid rgba(61, 154, 114, 0.25)',
            borderRadius: '8px',
            color: '#3d9a72',
            fontFamily: 'inherit',
            fontSize: '0.9375rem',
            fontWeight: 400,
            letterSpacing: '0.01em',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(61, 154, 114, 0.14)';
            e.currentTarget.style.borderColor = 'rgba(61, 154, 114, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(61, 154, 114, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(61, 154, 114, 0.25)';
          }}
        >{buttonText}</a>
      )}

      {children && (
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          {children}
        </div>
      )}
    </section>
  );
}
