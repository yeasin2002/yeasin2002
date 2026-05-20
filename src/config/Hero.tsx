/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import Redux from '@/components/technologies/Redux';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  NodeJs: NodeJs,
  ReactNative: ReactNative,
  TailwindCss: TailwindCss,
  Redux: Redux,
};

export const heroConfig = {
  // Personal Information
  name: 'Md Kawsar Islam Yeasin',
  title: 'Front-End Focused Full-Stack Software Developer',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'React Native',
      href: 'https://reactnative.dev/',
      component: 'ReactNative',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      component: 'TailwindCss',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'Redux',
      href: 'https://redux.js.org/',
      component: 'Redux',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build web and mobile products with {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4}, and {skills:5}, with a strong focus on <b>UI polish</b>, APIs, state management, and scalable architecture.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/yeasin2002_dev',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yeasin2002/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/yeasin2002',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:mdkawsarislam2002@gmail.com',
    icon: <Mail />,
  },
];
