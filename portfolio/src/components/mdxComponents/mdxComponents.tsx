import type { ReactNode } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import { ImageCarousel } from './ImageCarousel'

export const mdxComponents = {
  Center: ({ children }: { children: ReactNode }) => (
    <div style={{ textAlign: 'center' }}>{children}</div>
  ),
  InlineMath,
  BlockMath,
  ImageCarousel,
}