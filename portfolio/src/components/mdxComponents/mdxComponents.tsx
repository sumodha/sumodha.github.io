import type { ReactNode } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { ImageCarousel } from '../ImageCarousel/ImageCarousel';

export const mdxComponents = {
  Center: ({ children }: { children: ReactNode }) => (
    <span style={{ display: 'block', textAlign: 'center' }}>{children}</span>
  ),
  InlineMath,
  BlockMath,
  ImageCarousel,
};
