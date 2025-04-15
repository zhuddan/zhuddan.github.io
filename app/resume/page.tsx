import { getMDXComponents } from '@/mdx-components'
import { DocsBody } from 'fumadocs-ui/page'
import MDXContent from './content.mdx'

export default function Page() {
  return (
    <DocsBody>
      <MDXContent
        components={getMDXComponents({ })}
      />
    </DocsBody>
  )
}

export async function generateMetadata() {
  return {
    title: '简历',
    description: '朱丹的个人简历',
  }
}
