import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins'
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js'
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config'
import { transformerTwoslash } from 'fumadocs-twoslash'
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
    remarkPlugins: [remarkTypeScriptToJavaScript],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
  },
})
