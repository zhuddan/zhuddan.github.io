import type { ReactNode } from 'react'
import { RootProvider } from 'fumadocs-ui/provider'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = ({
  title: {
    template: '%s | ZDecode',
    default: 'ZDecode',
  },
  description: 'ZDecode is ZD`s Blog.😎',
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <header>
        <link rel="icon" href="/logo.svg" />
      </header>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
