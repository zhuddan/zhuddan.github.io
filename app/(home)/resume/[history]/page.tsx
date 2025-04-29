import type { Metadata } from 'next'

export default async function Page(props: {
  params: Promise<{ history: string }>
}) {
  const params = await props.params
  return (
    <>
      {params.history}
    </>
  )
}

export function generateStaticParams(): { history: string }[] {
  return [{ history: 'v1' }]
}

export async function generateMetadata(props: {
  params: Promise<{ history: string }>
}): Promise<Metadata> {
  const params = await props.params

  return {
    title: `历史简历${params.history}`,
    description: '历史简历',
  }
}
