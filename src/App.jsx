import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] h-80 w-80 rounded-full bg-[#55B4E6]/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-[#0D6EFD]/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Dashboard />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FinalCTA />

      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Quotestack. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="/test" className="hover:text-slate-700">System Check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
