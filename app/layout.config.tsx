import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

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
        <img aria-label="Logo" className="size-8 rounded-full" src="/logo.jpg" alt="" />
        Zdecode
      </>
    ),
  },
  links: [
    {
      text: '归档',
      url: '/docs/css/color-opacity',
      active: 'nested-url',
    },
    {
      text: '博客',
      url: '/blog',
      active: 'nested-url',
    },
  ],
}
