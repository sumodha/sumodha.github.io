import type { LinkMap } from '../types/portfolio';

export const site = {
  name: 'sumodha pokhrel',
  signature: 'sumodha pokhrel',
  pageTitle: 'sumodha pokhrel | portfolio',
  contacts: {
    email: 'mailto:pokhrel.sumodha@gmail.com',
    github: 'https://github.com/sumodha',
    linkedin: 'https://www.linkedin.com/in/sumodha/',
    resume: '/portfolio/resume/resume.pdf',
  } satisfies LinkMap,
} as const;

export const navigation = [
  { id: 'work', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'miscellany', label: 'miscellany' },
] as const;

export type SectionId = (typeof navigation)[number]['id'];
