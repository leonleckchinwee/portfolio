import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/20 via-blue-100/10 to-transparent dark:from-teal-500/10 dark:via-blue-500/10 dark:to-transparent" />
      <Header />
      <main className="relative min-h-screen flex items-center justify-between px-4 sm:px-6 py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <Hero />
          <div className="lg:ml-auto">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}
