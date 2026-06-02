import { heroConfig } from './Hero';
import { aboutFallback } from '@/lib/about';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title:
    'Md Kawsar Islam Yeasin | Front-End Focused Full-Stack Software Developer',
  description:
    'Portfolio of Md Kawsar Islam Yeasin, a front-end-focused full-stack software developer with freelance, contract, and client work across web, mobile, and AI-driven workflows.',
  url: process.env.NEXT_PUBLIC_URL || 'https://yeasin2002.netlify.app',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: aboutFallback.name,
    twitter: '@yeasin2002_dev',
    github: 'yeasin2002',
    linkedin: 'yeasin2002',
    email: 'mdkawsarislam2002@gmail.com',
  },
  keywords: [
    'portfolio',
    'frontend developer',
    'full-stack',
    'react',
    'nextjs',
    'react native',
    'expo',
    'typescript',
    'web development',
    'mobile development',
    'ai workflows',
    'agent-based development',
    'open source',
    'freelance',
    'bangladesh',
    'browser extensions',
    'micro-saas',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${aboutFallback.description} Explore my projects, experience, and technical expertise.`,
    keywords: [
      'portfolio',
      'frontend developer',
      'full-stack',
      'web development',
      'mobile development',
      'ai workflows',
      'agent-based development',
      'open source',
      'freelance',
      'projects',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact - Get in Touch',
    description:
      'Get in touch with me for freelance work, collaborations, or opportunities. I would love to hear from you!',
    keywords: ['contact', 'hire', 'collaboration', 'freelance', 'developer'],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title: 'Work Experience - Professional Journey',
    description:
      'Explore my work history across freelance, contract, and client projects in software development.',
    keywords: [
      'work experience',
      'career',
      'professional',
      'software developer',
      'employment history',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: 'Projects - My Work & Projects Portfolio',
    description:
      'Discover my client work, freelance projects, and product experiments across web, mobile, and AI-powered tooling.',
    keywords: [
      'projects',
      'portfolio',
      'web development',
      'mobile development',
      'applications',
      'software',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  // Blog page
  '/blog': {
    title: 'Blog - Thoughts & Tutorials',
    description:
      'Read my notes, tutorials, and thoughts on frontend, full-stack, and AI-assisted development.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'web development',
      'technical writing',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: 'Resume - Professional CV',
    description: `View and download ${heroConfig.name}'s resume and CV. Technical skills, experience, and qualifications.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  // Gears page
  '/gears': {
    title: 'Gears - My Setup & Tools',
    description:
      'Discover the devices and software I use to build, design, and ship projects efficiently.',
    keywords: [
      'setup',
      'tools',
      'devices',
      'software',
      'productivity',
      'development environment',
    ],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  // Setup page
  '/setup': {
    title: 'Setup Guide - VS Code Configuration',
    description:
      'Complete guide to my preferred VS Code configuration, extensions, and fonts for development.',
    keywords: [
      'vscode',
      'setup',
      'configuration',
      'extensions',
      'development environment',
      'guide',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
