import Link from 'next/link'

interface LinkType {
  title: string
  items: {
    label: string
    to?: string
    href?: string
  }[]
}

const links: LinkType[] = [
  {
    title: 'ZDecode',
    items: [
      {
        label: '归档',
        to: '/docs/css/center',
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

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
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
      <Link href="/resume" className="absolute text-xl bottom-4 right-4 opacity-0 hover:opacity-50">📄</Link>
    </footer>
  )
}
