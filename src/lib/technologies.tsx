import React from 'react';
import AWS from '@/components/technologies/AWS';
import Appwrite from '@/components/technologies/Appwrite';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import DaisyUi from '@/components/technologies/DaisyUi';
import Expo from '@/components/technologies/Expo';
import ExpressJs from '@/components/technologies/ExpressJs';
import FabricJs from '@/components/technologies/FabricJs';
import Figma from '@/components/technologies/Figma';
import Firebase from '@/components/technologies/Firebase';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import NativeWind from '@/components/technologies/NativeWind';
import NestJs from '@/components/technologies/NestJs';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import Redux from '@/components/technologies/Redux';
import Sentry from '@/components/technologies/Sentry';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const technologiesMap: Record<string, { href: string; icon: React.ReactNode }> = {
  'Next.js': { href: 'https://nextjs.org/', icon: <NextJs /> },
  'React': { href: 'https://react.dev/', icon: <ReactIcon /> },
  'TypeScript': { href: 'https://www.typescriptlang.org/', icon: <TypeScript /> },
  'Tailwind CSS': { href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
  'Redux': { href: 'https://redux.js.org/', icon: <Redux /> },
  'Node.js': { href: 'https://nodejs.org/', icon: <NodeJs /> },
  'Express.js': { href: 'https://expressjs.com/', icon: <ExpressJs /> },
  'MongoDB': { href: 'https://www.mongodb.com/', icon: <MongoDB /> },
  'PostgreSQL': { href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
  'React Native': { href: 'https://reactnative.dev/', icon: <ReactNative /> },
  'Expo': { href: 'https://expo.dev/', icon: <Expo /> },
  'Figma': { href: 'https://figma.com/', icon: <Figma /> },
  'Postman': { href: 'https://www.postman.com/', icon: <Postman /> },
  'Vercel': { href: 'https://vercel.com/', icon: <Vercel /> },
  'Sentry': { href: 'https://sentry.io/', icon: <Sentry /> },
  'JavaScript': { href: 'https://www.javascript.com/', icon: <JavaScript /> },
  'Netlify': { href: 'https://www.netlify.com/', icon: <Netlify /> },
  'AWS': { href: 'https://aws.amazon.com/', icon: <AWS /> },
  'Appwrite': { href: 'https://appwrite.io/', icon: <Appwrite /> },
  'Bootstrap': { href: 'https://getbootstrap.com/', icon: <BootStrap /> },
  'Bun': { href: 'https://bun.sh/', icon: <Bun /> },
  'CSS': { href: 'https://www.w3.org/Style/CSS/', icon: <CSS /> },
  'DaisyUI': { href: 'https://daisyui.com/', icon: <DaisyUi /> },
  'Fabric.js': { href: 'https://fabricjs.com/', icon: <FabricJs /> },
  'Firebase': { href: 'https://firebase.google.com/', icon: <Firebase /> },
  'GitHub': { href: 'https://github.com/', icon: <Github /> },
  'HTML': { href: 'https://html.spec.whatwg.org/', icon: <Html /> },
  'MDX': { href: 'https://mdxjs.com/', icon: <MDXIcon /> },
  'Framer Motion': { href: 'https://motion.dev/', icon: <Motion /> },
  'NativeWind': { href: 'https://www.nativewind.dev/', icon: <NativeWind /> },
  'NestJS': { href: 'https://nestjs.com/', icon: <NestJs /> },
  'Prisma': { href: 'https://www.prisma.io/', icon: <Prisma /> },
  'Shadcn UI': { href: 'https://ui.shadcn.com/', icon: <Shadcn /> },
  'Socket.io': { href: 'https://socket.io/', icon: <SocketIo /> },
  'Three.js': { href: 'https://threejs.org/', icon: <ThreeJs /> },
};

export const getTechnology = (name: string): Technology => {
  const match = technologiesMap[name];
  return {
    name,
    href: match ? match.href : '#',
    icon: match ? match.icon : null,
  };
};

export const allTechnologyNames = Object.keys(technologiesMap).sort();
