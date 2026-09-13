export interface SocialLink {
  name: string;
  url: string;
  type: 'github' | 'linkedin' | 'x';
}

export const CONTACT_DATA = {
  kicker: '08 — Have an opportunity?',
  availability: 'Available for full-time, contract & freelance builds',
  headline: "You made it this far — let's build something.",
  pitch:
    'Open to product engineering roles, agency partnerships, and high-impact software builds across web, mobile, and AI-driven workflows.',
  cvPath: '/assets/cv.pdf',
  cvFilename: 'Md_Kawsar_Islam_Yeasin_CV.pdf',
  location: 'Dhaka, Bangladesh (UTC+6)',
  email: 'mdkawsarislam2002@gmail.com',
  whatsappNumber: '+966 57 357 6731',
  whatsappUrl: 'https://wa.me/966573576731',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yeasin2002',
    type: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yeasin2002-dev/',
    type: 'linkedin',
  },
  {
    name: 'X',
    url: 'https://x.com/yeasin2002_dev',
    type: 'x',
  },
];
