import { createMDX } from 'fumadocs-mdx/next'

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  serverExternalPackages: ['oxc-transform', 'typescript', 'twoslash'],
}

const withMDX = createMDX()

export default withMDX(config)
