import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import { blog as blogPosts, docs } from '@/.source'

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
})

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
})
