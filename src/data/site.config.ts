import type { SiteConfig, Experience } from '@/types';

export const site: SiteConfig = {
  title: 'Theodores | Senior QA Engineer',
  description: 'Senior QA Engineer specializing in test automation, API testing, and quality assurance. Building robust testing frameworks and ensuring software quality.',
  author: 'Theodores',
  email: 'theodores.dev@gmail.com',
  url: 'https://theodores.dev',
  github: 'https://github.com/theodores',
  linkedin: 'https://linkedin.com/in/theodores',
};

export const experiences: Experience[] = [
  {
    role: 'Senior QA Engineer',
    company: 'GoTo Financial',
    period: '2022 - Present',
    description: [
      'Lead test automation initiatives across 5 product teams with 50+ microservices',
      'Reduced production bugs by 45% through comprehensive testing strategies',
      'Architected payment reliability framework achieving 99.99% success rate',
      'Mentored 3 junior QA engineers in automation best practices',
    ],
  },
  {
    role: 'QA Engineer',
    company: 'Fintech Unicorn',
    period: '2020 - 2022',
    description: [
      'Developed API testing suite covering 100+ endpoints with 95% coverage',
      'Implemented CI/CD pipelines reducing test execution time from 4hrs to 12min',
      'Established QA processes and documentation standards adopted company-wide',
    ],
  },
  {
    role: 'Junior QA Engineer',
    company: 'Early Stage Startup',
    period: '2019 - 2020',
    description: [
      'Built foundation of automated testing from manual processes',
      'Collaborated with developers to implement testable architecture patterns',
    ],
  },
];

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
