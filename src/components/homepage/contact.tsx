import yeasinSticker from '@/assets/yeasin-sticker.png';
import { CONTACT_DATA, SOCIAL_LINKS } from '@/data';
import { ArrowUpRight, FileText, Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Contact() {
  return (
    <>
      <footer
        id="contact"
        className="contact-hero section-pad pt-28 pb-20 scroll-mt-12"
      >
        <div className="mx-auto max-w-[1490px] relative z-10">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-wider text-foreground/80">
            <span>{CONTACT_DATA.kicker}</span>
            <span>{CONTACT_DATA.availability}</span>
          </div>

          {/* Headline */}
          <h2 className="contact-heading my-14 md:my-20">
            You made it this far —<br />
            <em>let&apos;s build something.</em>
          </h2>

          {/* Bottom Info & Contact Actions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-foreground/20 pt-8 items-start">
            <div className="md:col-span-6 max-w-md">
              <p className="text-base md:text-lg leading-relaxed text-foreground/85 font-medium">
                {CONTACT_DATA.pitch}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href={CONTACT_DATA.cvPath}
                  download={CONTACT_DATA.cvFilename}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/30 font-semibold hover:bg-foreground hover:text-background transition-colors"
                >
                  <FileText size={14} /> Download CV (PDF)
                </a>
                <span className="text-muted-foreground">
                  {CONTACT_DATA.location}
                </span>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col gap-3">
              <a
                className="contact-link-row"
                href={`mailto:${CONTACT_DATA.email}`}
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} className="text-foreground/70" />
                  <span>{CONTACT_DATA.email}</span>
                </span>
                <ArrowUpRight size={20} />
              </a>

              <a
                className="contact-link-row"
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3">
                  <MessageSquare size={18} className="text-foreground/70" />
                  <span>WhatsApp ({CONTACT_DATA.whatsappNumber})</span>
                </span>
                <ArrowUpRight size={20} />
              </a>

              <div className="pt-4 grid grid-cols-3 gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-foreground/20 bg-white/20 hover:bg-white/40 transition-colors text-xs font-mono uppercase font-bold"
                  >
                    <span className="flex items-center gap-2">
                      {item.type === 'github' && <GithubIcon size={15} />}
                      {item.type === 'linkedin' && <LinkedinIcon size={15} />}
                      {item.type === 'x' && <XIcon size={15} />}
                      {item.name}
                    </span>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sub-footer Bar */}
      <div className="bg-[#10100f] text-[#f5f2eb] px-6 py-6 md:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1490px] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20">
              <Image
                src={yeasinSticker}
                alt="Yeasin"
                width={20}
                height={20}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold tracking-wider">YEASIN.DEV</span>
          </div>

          <span className="text-[#888888] text-center">
            Designed &amp; developed by Md Kawsar Islam Yeasin © 2026 — All
            rights reserved
          </span>

          <a href="#top" className="hover:text-primary transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </>
  );
}
