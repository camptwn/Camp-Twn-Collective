import Head from 'next/head'
import { UtensilsCrossed } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Head>
        <title>Camp Twn Collective</title>
      </Head>

      <header className="bg-white border-b border-neutral-200 p-4 flex justify-between">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-5 w-5" />
          <span className="font-semibold">Camp Twn Collective</span>
        </div>
      </header>

      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Camp Twn Collective</h1>
        <p className="text-lg text-neutral-700 mb-6">Dinner is solved — wholesome meals for life’s busiest nights.</p>
        <img src="/hero-meal.jpg" alt="Family meal" className="mx-auto rounded-lg shadow-lg max-w-md" />
      </main>

      <footer className="bg-neutral-900 text-neutral-200 p-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Camp Twn Collective</p>
      </footer>
    </div>
  )
}