import type { Metadata } from 'next'
import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blog } from '@/lib/source'
import { getMDXComponents } from '@/mdx-components'

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page)
    notFound()
  const { body: Mdx, toc } = await page.data.load()

  return (
    <>
      <div
        className="container rounded-xl border py-12 md:px-8"
        style={{
          backgroundColor: '#050714',
          backgroundImage: [
            'radial-gradient(circle at 10% 20%, hsla(180, 100%, 50%, 0.2), transparent 40%)',
            'linear-gradient(140deg, hsla(200, 100%, 60%, 0.3), transparent 50%)',
            'linear-gradient(to left top, hsla(310, 100%, 50%, 0.4), transparent 60%)',
            'radial-gradient(circle at 90% 90%, hsla(260, 100%, 70%, 0.8), hsla(220, 80%, 40%, 0.6) 20%, hsla(200, 90%, 40%, 0.3) 40%, transparent)',
          ].join(', '),
          backgroundBlendMode: 'screen, difference, overlay, normal',
          boxShadow: 'inset 0 0 30px rgba(0, 195, 255, 0.3)',
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-white">
          {page.data.title}
        </h1>
        <p className="mb-4 text-white/80">{page.data.description}</p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground h-9 rounded-md px-3"
        >
          Back
        </Link>
      </div>
      <article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-4">
        <div className="prose min-w-0 flex-1 p-4">
          <InlineTOC items={toc} />
          <Mdx components={getMDXComponents()} />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          {/* <div>
            <p className="mb-1 text-fd-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div> */}
          <div>
            <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map(page => ({
    slug: page.slugs[0],
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page)
    notFound()

  return {
    title: page.data.title,
    description:
      page.data.description ?? 'The library for building documentation sites',
  }
}
