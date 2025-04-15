import type { ReactNode } from 'react'

export function CodeDetails({ children }: { children: ReactNode }) {
  return (
    <details>
      <summary className="hover:cursor-pointer">点击展开代码</summary>
      {children}
    </details>
  )
}
