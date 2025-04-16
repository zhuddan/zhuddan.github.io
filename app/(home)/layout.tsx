import type { ReactNode } from 'react'
import { baseOptions } from '@/app/layout.config'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import Link from 'next/link'

const links: {
  title: string
  items: {
    label: string
    to?: string
    href?: string
  }[]
}[] = [
  {
    title: 'ZDecode',
    items: [
      {
        label: '归档',
        to: '/docs/css/color-opacity',
      },
      {
        label: '博客',
        to: '/blog',
      },
    ],
  },
  {
    title: '参考链接',
    items: [
      {
        label: 'github',
        href: 'https://github.com/zhuddan',
      },
      {
        label: 'npm',
        href: 'https://www.npmjs.com/~zhuddan',
      },
      {
        label: 'zhuddan.github.io',
        href: 'https://zhuddan.github.io/',
      },
    ],
  },
  {
    title: '更多链接',
    items: [
      {
        label: 'react',
        to: 'https://react.dev/',
      },
      {
        label: 'nextjs',
        to: 'https://nextjs.org/',
      },
      {
        label: 'fumadocs',
        href: 'https://fumadocs.vercel.app/',
      },
    ],
  },
]

const copyright = `Copyright © ${new Date().getFullYear()} zhuddan, Inc. Built with Fumadocs.`

function Footer() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container justify-start flex flex-col gap-4 sm:flex-row  items-star sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">Fumadocs</p>
          <p className="text-xs">
            Built with ❤️ by
            {' '}
            <a
              href="https://fuma-dev.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Fuma
            </a>
          </p>
        </div>
        {
          links.map((e) => {
            return (
              <div key={e.title} className=" h-full">
                <p className="mb-1 text-sm font-semibold">{e.title}</p>
                {
                  e.items.map((link) => {
                    return (
                      <p className="text-xs" key={link.label}>
                        {
                          link.to
                            ? (
                                <Link
                                  href={link.to}
                                  className="font-medium"
                                >
                                  {link.label}
                                </Link>
                              )
                            : (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  className="font-medium"
                                >
                                  {link.label}
                                </a>
                              )
                        }
                      </p>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      <p className="text-center text-sm mt-4">{copyright}</p>
    </footer>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  )
}
