export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-ink/70">
        <p>
          Design &amp; developed by{" "}
          <strong className="text-ink">Md Kawsar Islam Yeasin</strong>.
        </p>
        <p className="font-mono text-xs uppercase tracking-wider">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}