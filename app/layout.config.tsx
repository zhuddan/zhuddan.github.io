import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { DEFAULT_DOCS_LINK } from '@/config'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img aria-label="Logo" className="size-8 rounded-full" src="/logo.svg" alt="" />
        ZDecode
      </>
    ),
  },
  githubUrl: 'https://github.com/zhuddan',
  links: [
    {
      text: '归档',
      url: DEFAULT_DOCS_LINK,
      active: 'nested-url',
    },
    {
      text: '博客',
      url: '/blog',
      active: 'nested-url',
    },
    // {
    //   text: 'resume',
    //   url: '/resume',
    //   active: 'nested-url',
    // },
  ],
}
