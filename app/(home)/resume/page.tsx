import { getMDXComponents } from '@/mdx-components'
import { DocsBody } from 'fumadocs-ui/page'
import MDXContent from './content.mdx'

export default function Page() {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4">
      <DocsBody>
        <MDXContent
          components={getMDXComponents({ })}
        />
      </DocsBody>
    </main>
  )
}

export async function generateMetadata() {
  return {
    title: '简历',
    description: '朱丹的个人简历',
  }
}
