import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (
    label,
    href = "#"
  ) => (
    <a
      href={href}
      className="text-sm md:text-[15px] text-white/80 hover:text-white transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="size-9 rounded-xl bg-gradient-to-br from-[#0D6EFD] to-[#000A5A] shadow-[0_10px_30px_rgba(13,110,253,0.6)]" />
              <span className="font-semibold tracking-tight text-white">Quotestack</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLink("Product", "#how")}
              {navLink("Features", "#features")}
              {navLink("Pricing", "#pricing")}
              {navLink("Testimonials", "#testimonials")}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
              <a
                href="#cta"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#55B4E6] to-[#0D6EFD] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(13,110,253,0.5)] hover:shadow-[0_14px_40px_rgba(13,110,253,0.6)] transition-shadow"
              >
                Start Free Demo
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
              <a href="#how" className="text-white/80">Product</a>
              <a href="#features" className="text-white/80">Features</a>
              <a href="#pricing" className="text-white/80">Pricing</a>
              <a href="#testimonials" className="text-white/80">Testimonials</a>
              <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#55B4E6] to-[#0D6EFD] px-4 py-2 text-sm font-semibold text-white">Start Free Demo</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
