import type { ReactNode } from 'react'
import { DocsBody } from 'fumadocs-ui/page'
import './print.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4">
      <DocsBody>
        {children}
      </DocsBody>
    </main>
  )
}
