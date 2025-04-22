import Footer from '@/components/Footer'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import Link from 'next/link'
import { baseOptions } from '../layout.config'

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions}>
      <div className="container mx-auto min-h-[200px] flex  justify-center flex-col">
        <h1 className="mdx-heading mt-0 text-primary dark:text-primary-dark -mx-.5 break-words text-5xl font-display font-bold leading-tight">Not Found</h1>
        <p className="whitespace-pre-wrap my-4">This page doesn't exist.</p>
        <Link className="whitespace-pre-wrap my-4" href="/">Return Home</Link>
      </div>
      <Footer />
    </HomeLayout>
  )
}
