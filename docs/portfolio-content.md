# Portfolio Content Extract

This document extracts the user-facing content from the portfolio's TypeScript and TSX files so it can be reviewed, reused, or handed to another LLM.

## Homepage Structure

The homepage at `src/app/page.tsx` renders these sections in order:

1. Hero
2. Experience
3. Projects
4. About
5. GitHub Activity
6. Blogs
7. CTA
8. Setup
9. Journey

## Personal Profile

### Name and Title

- Name: Md Kawsar Islam Yeasin
- Title: Junior Software Developer
- Avatar: `/assets/yeasin2002.png`

### Hero Description

Template:

> I build web and mobile products with {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4}, and {skills:5}, with a strong focus on UI polish, APIs, state management, and scalable architecture.

Resolved meaning:

> I build web and mobile products with TypeScript, React, Next.js, React Native, Tailwind CSS, and Node.js, with a strong focus on UI polish, APIs, state management, and scalable architecture.

### Hero Buttons

- Resume / CV -> `/resume`
- Get in touch -> `/contact`

### Social Links

- X: `https://x.com/yeasin2002_dev`
- LinkedIn: `https://www.linkedin.com/in/yeasin2002/`
- GitHub: `https://github.com/yeasin2002`
- Email: `mdkawsarislam2002@gmail.com`

### Skill Set

- TypeScript: `https://www.typescriptlang.org/`
- React: `https://react.dev/`
- Next.js: `https://nextjs.org/`
- React Native: `https://reactnative.dev/`
- Tailwind CSS: `https://tailwindcss.com/`
- Node.js: `https://nodejs.org/`
- Redux: `https://redux.js.org/`

## About Section

### About Profile Fallback

- Name: Md Kawsar Islam Yeasin
- Image: `/assets/yeasin-normal.png`
- Description:

> I'm a front-end-focused full-stack software developer with almost 2 years of industry experience. I build web and mobile apps with TypeScript, React, Next.js, React Native, and Expo; contribute to open source with 622+ GitHub stars overall; and enjoy AI-driven workflows, agent-based development, client collaboration, and maintainable freelance and contract work.

## Experience

### Freelance & Contract Work

- Position: Full Stack Developer
- Location: Remote
- Duration: 2024 - Present
- Current: Yes
- Image: `/company/promote.png`
- Website: none

Description:

- Worked with agencies and indie devs on freelance and contract projects.
- Built and maintained web and mobile apps with a TypeScript-first workflow.
- Collaborated with backend developers and clients to gather requirements and ship updates.
- Kept codebases modular, performant, and maintainable.

Technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Redux
- Node.js
- Express.js
- MongoDB
- PostgreSQL
- React Native
- Expo
- Figma

### Techfosys

- Position: Software Developer
- Location: Remote
- Duration: Jul 2025 - Present
- Current: Yes
- Image: `/company/jvai.jpg`
- Website: none

Description:

- Integrated an AI-related API endpoint and collaborated with backend developers to ensure seamless API integration.
- Met with foreign clients, gathered information, and translated requirements into delivery plans.
- Built and maintained applications and API endpoints across multiple client projects.
- Completed 5+ client projects, optimized performance, fixed bugs, and maintained W3C standards and browser compatibility.

Technologies:

- Next.js
- React
- TypeScript
- Node.js
- Express.js
- MongoDB
- Redux
- Postman
- Figma
- Vercel
- Sentry

### Neonency

- Position: Frontend Developer
- Location: Remote
- Duration: Dec 2023 - September 2024
- Current: No
- Image: `/company/loop.png`
- Website: none

Description:

- Optimized frontend performance, reduced loading times, and improved the overall user experience.
- Built responsive layouts across screen sizes and fixed unnecessary re-rendering and client-side issues.
- Improved Lighthouse scores by 10-20 points and consistently targeted 90+ whenever feasible.

Technologies:

- React
- JavaScript
- Tailwind CSS
- Redux
- Figma
- Netlify
- Vercel
- Postman
- Sentry

## Projects

### Port a Vacation

- Description: Vacation rental and property management website for a USA client with dynamic search, filters, and detailed property pages.
- Link: `https://www.portavacation.co/`
- Image: `/project/portavacation-property.jpg`
- Status: Working
- Details page slug: `/projects/port-a-vacation`

Technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js
- MongoDB
- Postman

### Wiiz AI

- Description: AI-based job marketplace for a German client. Maintained strict linting with Biome.js, fixed 50+ issues, and handled ongoing production support.
- Link: `https://wiiz.ai/`
- Image: `/project/swish-job-bidding.png`
- Status: Working
- Details page slug: `/projects/wiiz-ai`

Technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Redux
- Node.js
- Express.js
- shadcn/ui
- Postman
- Vercel

### Glowmi.net

- Description: AI-powered skincare e-commerce platform with English LTR and Arabic RTL support, built as a clean and scalable customer/admin experience.
- Link: `https://glowmi.net/`
- Image: `/project/glowmi-coming-soon.jpg`
- Status: Working
- Details page slug: `/projects/glowmi`

Technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Redux
- shadcn/ui
- Vercel

## GitHub Activity

- GitHub username: `yeasin2002`
- API endpoint: `https://github-contributions-api.deno.dev`
- Title: GitHub Activity
- Subtitle: open-source contributions and client work over the past year
- Total count label: `{{count}} contributions in the last year`

Loading state:

- Title: Loading contributions...
- Description: Fetching your GitHub activity data

Error state:

- Title: Unable to load GitHub contributions
- Description: Check out my profile directly for the latest activity
- Button text: View on GitHub

Theme colors:

- Dark theme:
  - rgb(22, 27, 34)
  - rgb(14, 68, 41)
  - rgb(0, 109, 50)
  - rgb(38, 166, 65)
  - rgb(57, 211, 83)
- Light theme:
  - rgb(235, 237, 240)
  - rgb(155, 233, 168)
  - rgb(64, 196, 99)
  - rgb(48, 161, 78)
  - rgb(33, 110, 57)

## Call To Action

- Profile image: `/assets/logo.png`
- Profile alt text: Md Kawsar Islam Yeasin
- Button text: Let's Talk
- Cal.com link: `yeasin2002/15min`
- Pre-text: You made it this far, let's talk about your next project.

## Contact

- Title: Contact
- Description: Get in touch for freelance work, collaborations, or opportunities. I’m open to client projects, agency partnerships, and product builds.

Form labels:

- Name
- Email
- Phone Number
- Message

Form placeholders:

- Your name
- your.email@example.com
- +1 (555) 123-4567
- Tell me about your project, collaboration, or opportunity...

Form messages:

- Submit button: Send Message
- Success: Thanks for your message! I'll get back to you soon.
- Error: Something went wrong. Please try again.

## Journey

### Journey Item

- Name: My Journey
- Description: Overview of my learning and career journey.
- Route: `/journey`

## Setup

### Featured Setup Item

- Name: Gears Used
- Description: Productivity Tools, Gears i use to get my work done.
- Route: `/gears`

### Setup Steps

#### Step 1: Download necessary files

- Download `Fira-code.zip`
- Unzip the font's file
- Select all the fonts, right click, and click to Install
- Download `vsc-extensions.txt`
- Place this file in downloads
- Open the vscode in downloads directory
- Install VSC Export & Import extension in vs code

#### Step 2: Installing all the extensions

- Open Command Palette by pressing the keyboard shortcut
- Shortcut: Cmd + Shift + P (Mac) / Ctrl + Shift + P (Windows)
- Enter the text in prompt and press Enter
- Prompt: VSC Export & Import
- All extension will start to install

#### Step 3: VS Code Settings

- Open Command Palette by pressing the keyboard shortcut
- Shortcut: Cmd + Shift + P (Mac) / Ctrl + Shift + P (Windows)
- Enter the text in prompt and press Enter
- Prompt: Preferences: Open Settings (JSON)
- Copy the settings.json from the below window

### Setup Settings JSON

```json
{
  "CodeGPT.model": "gpt-4",
  "vscode-edge-devtools.webhint": false,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "cmake.configureOnOpen": true,
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "explorer.confirmDragAndDrop": false,
  "liveServer.settings.donotVerifyTags": true,
  "github.copilot.advanced": {},
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "smooth",
  "files.autoSave": "afterDelay",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDelete": false,
  "editor.stickyScroll.enabled": false,
  "git.autofetch": true,
  "git.postCommitCommand": "push",
  "workbench.iconTheme": "material-icon-theme",
  "breadcrumbs.enabled": false,
  "editor.hover.enabled": true,
  "workbench.tips.enabled": false,
  "editor.colorDecorators": false,
  "workbench.startupEditor": "none",
  "editor.lightbulb.enabled": "off",
  "editor.overviewRulerBorder": false,
  "editor.renderLineHighlight": "none",
  "editor.occurrencesHighlight": "off",
  "problems.decorations.enabled": false,
  "editor.renderControlCharacters": false,
  "editor.hideCursorInOverviewRuler": true,
  "editor.gotoLocation.multipleReferences": "goto",
  "editor.gotoLocation.multipleDefinitions": "goto",
  "editor.gotoLocation.multipleDeclarations": "goto",
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "editor.gotoLocation.multipleImplementations": "goto",
  "editor.gotoLocation.multipleTypeDefinitions": "goto",
  "vscode_custom_css.imports": [
    "file:///E:/vscode/custom-vscode.css",
    "file:///E:/vscode/custom-vscode-script.js"
  ],
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.fontFamily": "\"fira code\", Consolas, 'Courier New', monospace",
  "workbench.statusBar.visible": false,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git-auto-pull.watchForChanges": true,
  "git-auto-pull.pullInterval": 2,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "HookyQR.beautify",
  "editor.formatOnSave": true,
  "eslint.run": "onSave",
  "cSpell.userWords": [
    "autofetch",
    "Consolas",
    "donot",
    "esbenp",
    "fileupload",
    "fira",
    "tabnine",
    "webhint"
  ],
  "workbench.settings.applyToAllProfiles": [
    "github.copilot.editor.enableAutoCompletions"
  ],
  "emmet.triggerExpansionOnTab": true,
  "emmet.useInlineCompletions": true,
  "tailwindCSS.emmetCompletions": true,
  "workbench.colorTheme": "Night Owl (No Italics)",
  "editor.wordWrap": "wordWrapColumn",
  "reactSnippets.settings.importReactOnTop": false,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Gears

### Devices

- Huawei MateBook D16 16GB RAM 512GB SSD
- DESKTOP-CM0MML7 12th Gen Intel(R) Core(TM) i5-12400 (2.50 GHz) 16.0 GB (15.8 GB usable)
- Magic Keyboard
- Logitech MX Master 3S Mouse
- Crossbeats Roar 2.0 (Special Addition)
- Pixel 4a (6GB RAM 128GB Storage)

### Web Extensions

- Unhook
- uBlock Origin
- React Developer Tools
- daily.dev
- Grammarly
- Wappalyzer
- Redux DevTools
- Temp Mail
- Mobile simulator
- Fake filler

### Software

- Cursor
- Antigravity
- Notion
- TickTick
- OBS Studio
- VLC

## Site Navigation and Metadata

### Navbar

- Logo image: `/assets/yeasein-stricker.jpg`
- Logo alt text: Md Kawsar Islam Yeasin
- Work -> `/work-experience`
- Blogs -> `/blog`
- Projects -> `/projects`

### Footer

- Developer: Md Kawsar Islam Yeasin
- Text: Design & Developed by
- Copyright: All rights reserved.

### Resume

- Resume URL: `/assets/cv.html`

### Site Config

- Site title: Md Kawsar Islam Yeasin | Front-End Focused Full-Stack Software Developer
- Site description: Portfolio of Md Kawsar Islam Yeasin, a front-end-focused full-stack software developer with freelance, contract, and client work across web, mobile, and AI-driven workflows.
- Site URL: `https://yeasin2002.netlify.app` unless `NEXT_PUBLIC_URL` is set
- Open Graph image: `/meta/opengraph-image.png`

### Site Keywords

- portfolio
- frontend developer
- full-stack
- react
- nextjs
- react native
- expo
- typescript
- web development
- mobile development
- ai workflows
- agent-based development
- open source
- freelance
- bangladesh
- browser extensions
- micro-saas
- md kawsar islam yeasin

### Page Metadata

#### Home

- Title: Md Kawsar Islam Yeasin - Junior Software Developer
- Description: I'm a front-end-focused full-stack software developer with almost 2 years of industry experience. I build web and mobile apps with TypeScript, React, Next.js, React Native, and Expo; contribute to open source with 622+ GitHub stars overall; and enjoy AI-driven workflows, agent-based development, client collaboration, and maintainable freelance and contract work. Explore my projects, experience, and technical expertise.
- Open Graph image: `/meta/hero.png`

#### Contact

- Title: Contact - Get in Touch
- Description: Get in touch with me for freelance work, collaborations, or opportunities. I would love to hear from you!
- Open Graph image: `/assets/logo.png`

#### Work Experience

- Title: Work Experience - Professional Journey
- Description: Explore my work history across freelance, contract, and client projects in software development.
- Open Graph image: `/meta/work.png`

#### Projects

- Title: Projects - My Work & Projects Portfolio
- Description: Discover my client work, freelance projects, and product experiments across web, mobile, and AI-powered tooling.
- Open Graph image: `/meta/projects.png`

#### Blog

- Title: Blog - Thoughts & Tutorials
- Description: Read my notes, tutorials, and thoughts on frontend, full-stack, and AI-assisted development.
- Open Graph image: `/meta/blogs.png`

#### Resume

- Title: Resume - Professional CV
- Description: View and download Md Kawsar Islam Yeasin's resume and CV. Technical skills, experience, and qualifications.
- Open Graph image: `/meta/resume.png`

#### Gears

- Title: Gears - My Setup & Tools
- Description: Discover the devices and software I use to build, design, and ship projects efficiently.
- Open Graph image: `/meta/gears.png`

#### Setup

- Title: Setup Guide - VS Code Configuration
- Description: Complete guide to my preferred VS Code configuration, extensions, and fonts for development.
- Open Graph image: `/meta/setup.png`

## Quotes

### Featured Quotes

- "A man who is master of patience is master of everything else." - George Savile
- "If the pain doesn't kill me, it will only make me stronger." - Sung Jin-Woo, Solo Leveling
- "I’ll take a potato chip… AND EAT IT!" - Light Yagami, Death Note

### Additional Quote Bank

- "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose." - Quran 65:3
- "And it is He who created the heavens and earth in truth. And the day He says, \"Be,\" and it is, His word is the truth." - Quran 6:73
- "The believer is not one who eats his fill while his neighbor goes hungry." - Prophet Muhammad (PBUH)
- "The unexamined life is not worth living." - Socrates
- "I think, therefore I am." - Rene Descartes
- "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does." - Jean-Paul Sartre
- "The only true wisdom is in knowing you know nothing." - Socrates
- "What does not kill me, makes me stronger." - Friedrich Nietzsche
- "The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb
- "In the end, we will remember not the words of our enemies, but the silence of our friends." - Martin Luther King Jr.
- "Be the change that you wish to see in the world." - Mahatma Gandhi
- "The way to get started is to quit talking and begin doing." - Walt Disney
- "It is during our darkest moments that we must focus to see the light." - Aristotle
- "Imagination is more important than knowledge." - Albert Einstein
- "The important thing is not to stop questioning." - Albert Einstein
- "Innovation distinguishes between a leader and a follower." - Steve Jobs
- "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." - Ralph Waldo Emerson
- "Two roads diverged in a wood, and I - I took the one less traveled by, And that has made all the difference." - Robert Frost
- "Your limitation- it's only your imagination." - Unknown
- "Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill
- "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt

## Miscellaneous

- Achievements certificates: none currently listed
- Cat feature enabled: true

## Chat Assistant Prompt

The portfolio includes an internal assistant prompt that uses the profile, experience, projects, and social links above to answer questions in first person as Md Kawsar Islam Yeasin. It also exposes these quick prompts:

- What technologies do you work with?
- Tell me about your open-source work
- How can I contact you for freelance work?

