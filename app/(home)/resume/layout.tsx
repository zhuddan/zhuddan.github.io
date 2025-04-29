import type { ReactNode } from 'react'
import { DocsBody } from 'fumadocs-ui/page'
// import { usePathname } from 'next/navigation'

export default function Layout({ children }: { children: ReactNode }) {
  // const pathName = usePathname()
  return (
    <main className="container relative max-w-[1100px] px-2 py-4">
      <DocsBody>
        {children}
      </DocsBody>
    </main>
  )
}
