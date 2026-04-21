import type { ReactNode } from 'react'
import { InlineMath, BlockMath } from 'react-katex'

export const mdxComponents = {
  Center: ({ children }: { children: ReactNode }) => (
    <div style={{ textAlign: 'center' }}>{children}</div>
  ),
  InlineMath, 
  BlockMath

}