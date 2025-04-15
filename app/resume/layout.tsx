import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4">
      {children}
    </main>
  )
}
