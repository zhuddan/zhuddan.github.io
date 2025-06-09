import type { MDXComponents } from 'mdx/types'
import * as Twoslash from 'fumadocs-twoslash/ui'
import defaultComponents from 'fumadocs-ui/mdx'
import mdxComponents from './components/mdx/mdx-components'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...mdxComponents,
    ...Twoslash,
    ...components,
  }
}
