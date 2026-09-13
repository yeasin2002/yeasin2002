export function Ticker() {
  const items = [
    'TYPESCRIPT',
    'REACT & NEXT.JS',
    'REACT NATIVE & EXPO',
    'NODE.JS & BACKEND',
    'POSTGRESQL & MONGO',
    'AI AGENTS & LLMS',
    'TAILWIND CSS',
    'OPEN SOURCE',
    'PERFORMANCE 90+',
  ];

  return (
    <div className="ticker-strip" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <span key={idx} className="flex items-center gap-7">
            <span>{text}</span>
            <i className="text-primary not-italic">✳</i>
          </span>
        ))}
      </div>
    </div>
  );
}
