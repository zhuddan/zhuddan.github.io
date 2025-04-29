import type { Metadata } from 'next'
import ResumeNav from '@/components/resume-nav'
import { getMDXComponents } from '@/mdx-components'

export default async function Page(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const { default: MDXContent } = await import(`@/app/(home)/resume/[id]/${params.id}.mdx`)
  return (
    <>
      <ResumeNav />
      <MDXContent
        components={getMDXComponents({ })}
      />
    </>
  )
}

export function generateStaticParams(): { id: string }[] {
  return [{ id: 'v1' }]
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const params = await props.params
  return {
    title: `历史简历${params.id}`,
    description: '历史简历',
  }
}
