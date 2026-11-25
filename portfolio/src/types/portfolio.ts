import type { ComponentType } from 'react';
import type { ImageCollection } from './media';

export type LinkMap = Readonly<Record<string, string>>;
export type MiscellanyCategory = 'art' | 'teaching' | 'thinking' | 'community';
export type MiscellanyFilter = 'all' | MiscellanyCategory;

type CardBase = {
  slug: string;
  title: string;
  date?: string;
  description: string;
  /** Cover first, followed by gallery photos. */
  images: ImageCollection;
  links?: LinkMap;
  Content?: ComponentType;
};

type DetailedCard = {
  role: string;
  details: string;
  skills: readonly string[];
};

export type WorkCard = Readonly<CardBase & DetailedCard & {
  type: 'work';
  companyLink: string;
}>;

export type ProjectCard = Readonly<CardBase & DetailedCard & {
  type: 'projects';
}>;

export type MiscellanyCard = Readonly<CardBase & Partial<DetailedCard> & {
  type: 'miscellany';
  category: MiscellanyCategory;
  tall: boolean;
}>;

export type PortfolioCard = WorkCard | ProjectCard | MiscellanyCard;
