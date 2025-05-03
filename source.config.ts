import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js'
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'
// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
})

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  async: true,
  schema: frontmatterSchema.extend({
    // author: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
})
export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [remarkTypeScriptToJavaScript],
  },
})
