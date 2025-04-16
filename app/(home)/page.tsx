import Hero from '@/components/Hero'
import HomeShow from '@/components/HomeShow'

export default function HomePage() {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4 ">
      <Hero />
      <HomeShow />
    </main>
  )
}
