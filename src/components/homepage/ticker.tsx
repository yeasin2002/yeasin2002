import { TICKER_ITEMS } from '@/data';

export function Ticker() {
  return (
    <div className="ticker-strip" aria-hidden="true">
      <div className="ticker-track">
        {[
          ...TICKER_ITEMS,
          ...TICKER_ITEMS,
          ...TICKER_ITEMS,
          ...TICKER_ITEMS,
        ].map((text, idx) => (
          <span key={idx} className="flex items-center gap-7">
            <span>{text}</span>
            <i className="text-primary not-italic">✳</i>
          </span>
        ))}
      </div>
    </div>
  );
}
