import yeasinSticker from '@/assets/yeasin-sticker.png';
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
            <span>08 — Have an opportunity?</span>
            <span>
              Available for full-time, contract &amp; freelance builds
            </span>
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
                Open to product engineering roles, agency partnerships, and
                high-impact software builds across web, mobile, and AI-driven
                workflows.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href="/assets/cv.pdf"
                  download="Md_Kawsar_Islam_Yeasin_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/30 font-semibold hover:bg-foreground hover:text-background transition-colors"
                >
                  <FileText size={14} /> Download CV (PDF)
                </a>
                <span className="text-muted-foreground">
                  Dhaka, Bangladesh (UTC+6)
                </span>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col gap-3">
              <a
                className="contact-link-row"
                href="mailto:mdkawsarislam2002@gmail.com"
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} className="text-foreground/70" />
                  <span>mdkawsarislam2002@gmail.com</span>
                </span>
                <ArrowUpRight size={20} />
              </a>

              <a
                className="contact-link-row"
                href="https://wa.me/966573576731"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3">
                  <MessageSquare size={18} className="text-foreground/70" />
                  <span>WhatsApp (+966 57 357 6731)</span>
                </span>
                <ArrowUpRight size={20} />
              </a>

              <div className="pt-4 grid grid-cols-3 gap-3">
                <a
                  href="https://github.com/yeasin2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-foreground/20 bg-white/20 hover:bg-white/40 transition-colors text-xs font-mono uppercase font-bold"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon size={15} /> GitHub
                  </span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/in/yeasin2002-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-foreground/20 bg-white/20 hover:bg-white/40 transition-colors text-xs font-mono uppercase font-bold"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon size={15} /> LinkedIn
                  </span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://x.com/yeasin2002_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-foreground/20 bg-white/20 hover:bg-white/40 transition-colors text-xs font-mono uppercase font-bold"
                >
                  <span className="flex items-center gap-2">
                    <XIcon size={15} /> X
                  </span>
                  <ArrowUpRight size={14} />
                </a>
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
