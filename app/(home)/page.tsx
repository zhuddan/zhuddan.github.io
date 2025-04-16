import Hero from '@/components/Hero'
import HomeShow from '@/components/HomeShow'

export default function HomePage() {
  return (
    <main className="container relative max-w-[1100px] py-4 px-2">
      <Hero />
      <HomeShow />
    </main>
  )
}
