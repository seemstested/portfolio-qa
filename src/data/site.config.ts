import type { SiteConfig, Experience } from '@/types';

export const site: SiteConfig = {
  title: 'Theodore\'s Thing',
  description: 'Senior QA Engineer specializing in test automation, API testing, and quality assurance. Building robust testing frameworks and ensuring software quality.',
  author: 'Theodore',
  email: 'hello@theodores.dev',
  url: 'https://theodores.dev',
  github: 'https://github.com/theodores',
  linkedin: 'https://linkedin.com/in/theodores',
};

export const experiences: Experience[] = [
  {
    role: 'Software Quality Assurance',
    type: 'Contract',
    company: 'muatmuat',
    period: 'Aug 2025 - Present',
    description: [
      'shipping muatparts plus. handling complex b2b cross-border logic (multi-currency, 3 languages) like it\'s nothing.',
      'early-stage hunter. poking at ui/ux mockups and api contracts before development even starts to kill blockers early.',
      'keeping muatrans logistics engines tight. verifying matchmaking algorithms and real-time gps tracking for fleet management.',
    ],
  },
  {
    role: 'Software Quality Assurance',
    type: 'Freelance',
    company: 'muatmuat',
    period: 'Dec 2024 - Aug 2025',
    description: [
      'crushed 200+ test cases across 5 platforms (web, desktop, and 3 mobile apps). making sure the vibe is seamless everywhere.',
      'hunted down 50+ bugs and worked with the team to nuke post-release issues by 15%. zero tolerance for critical crashes.',
      'proactive flow exploration. i don’t just follow the tickets—i hunt for hidden edge cases that users might actually hit.',
    ],
  },
  {
    role: 'Digital Talent Development',
    company: 'Telkomsel',
    period: 'Jun 2024 - Oct 2024',
    description: [
      'pure grind: made it to the top 11 teams out of 1000+ participants in indonesiaNEXT season 8.',
      'living the agile scrum life. building functional MVPs while keeping user-centric vibes and sdgs in mind.',
    ],
  },
  {
    role: 'Frontend Developer',
    type: 'Part-time',
    company: 'LCOY Indonesia',
    period: 'Jun 2024 - Aug 2024',
    description: [
      'switching gears to frontend. building responsive views and keeping the digital presence tight for a national climate conference.',
    ],
  },
  {
    role: 'Frontend Developer',
    type: 'Part-time',
    company: 'Money Masters',
    period: 'Dec 2023 - Mar 2024',
    description: [
      'hacking away at UI components for a finance platform. making sure the interface looks clean and performs heavy math correctly.',
    ],
  },
  {
    role: 'Software Quality Assurance',
    type: 'Internship',
    company: 'muatmuat',
    period: 'Sep 2023 - Dec 2023',
    description: [
      'where the obsession started. boosted customer satisfaction by personalizing the test design process.',
      'slashed bug resolution time by 30% by writing docs so clear and precise that even a non-dev could replicate them.',
    ],
  },
];

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
