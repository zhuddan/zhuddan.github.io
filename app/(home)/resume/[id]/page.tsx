import type { Metadata } from 'next'
import { getHistoryResumes } from '@/lib/resume-history-server'
import { getMDXComponents } from '@/mdx-components'

export default async function Page(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  const { default: MDXContent } = await import(`@/content/resume/${params.id}.mdx`)
  return (
    <>
      <MDXContent
        components={getMDXComponents({ })}
      />
    </>
  )
}

export function generateStaticParams(): { id: string }[] {
  return getHistoryResumes().map((id) => {
    return { id }
  })
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
