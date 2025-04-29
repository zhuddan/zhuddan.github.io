import ResumeNav from '@/components/resume-nav'
import { getHistoryResumes } from '@/lib/resume-history-server'
import { getMDXComponents } from '@/mdx-components'
import MDXContent from './content.mdx'

export default async function Page() {
  const x = await getHistoryResumes()
  return (
    <>
      {x.toString()}
      {/* <MDXContent
        components={getMDXComponents({ })}
      /> */}
    </>
  )
}

export async function generateMetadata() {
  return {
    title: '简历',
    description: '朱丹的个人简历',
  }
}
