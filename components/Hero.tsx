import clsx from 'clsx'
import Link from 'next/link'
import { DEFAULT_DOCS_LINK } from '@/config'

export default function Hero() {
  return (
    <div className="relative z-[2] flex flex-col border-x border bg-fd-card/80 px-6 py-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden max-lg:overflow-hidden">
      <h1 className="mb-8 text-4xl font-medium md:hidden">ZDecode</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        Zd`s Blog.
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Zd`s Blog is a self-indulgent, opinionated personal blog — built solely for my own amusement.
        Powered by Next.js and the elegant Fumadocs, because why settle for less when you can have both beauty and brains?
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href={DEFAULT_DOCS_LINK}
          className={clsx(
            'inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-fd-primary to-fd-primary/60 text-fd-primary-foreground shadow-fd-background/20 hover:bg-fd-primary/90 h-11 px-6 rounded-full',
            // buttonVariants({ size: 'lg', className: 'rounded-full' }),
          )}
        >
          归档
        </Link>
        <Link
          href="/blog"
          target="_blank"
          rel="noreferrer noopener"
          className={clsx(
            'inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 border from-fd-primary/10 shadow-fd-primary/10 hover:bg-fd-accent/50 hover:text-fd-accent-foreground h-11 px-6 rounded-full bg-fd-background',
          )}
        >
          博客
        </Link>
      </div>
    </div>
  )
}
