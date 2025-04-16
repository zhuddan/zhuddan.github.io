import { getMDXComponents } from '@/mdx-components'
import MDXContent from './content.mdx'

export default function Page() {
  return (
    <MDXContent
      components={getMDXComponents({ })}
    />
  )
}

export async function generateMetadata() {
  return {
    title: '简历',
    description: '朱丹的个人简历',
  }
}
