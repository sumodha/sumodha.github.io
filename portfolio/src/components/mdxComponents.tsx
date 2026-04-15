import type { ReactNode } from 'react'

export const mdxComponents = {
  Center: ({ children }: { children: ReactNode }) => (
    <div style={{ textAlign: 'center' }}>{children}</div>
  ),
}