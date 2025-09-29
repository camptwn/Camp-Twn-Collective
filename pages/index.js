import Head from 'next/head'
import { UtensilsCrossed } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Head>
        <title>Camp Twn Collective</title>
      </Head>

      {/* HERO */}
      <section className="relative h-[90vh] w-full">
        {/* Background Image */}
        <img
          src="/hero-bleachers.jpg" // replace with the uploaded bleacher photo in /public folder
          alt="Families eating meals at little league game"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <UtensilsCrossed className="h-12 w-12 text-white mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Camp Twn Collective
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white max-w-2xl drop-shadow">
            Dinner is solved – Real meals, even on life’s busiest nights.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <a
              href="https://forms.gle/your-order-form" // replace with your real order form link
              target="_blank"
              rel="noreferrer"
              className="bg-white text-neutral-900 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-neutral-200"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="border border-white text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white hover:text-neutral-900 transition"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
