import { motion, useScroll, useTransform } from "framer-motion"
import Spline from "@splinetool/react-spline"

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0.8])
  const y = useTransform(scrollY, [0, 400], [0, 50])

  return (
    <section className="relative overflow-hidden pt-28" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD] via-[#55B4E6] to-[#000A5A]" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#55B4E6]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_20%_10%,rgba(255,255,255,0.15),transparent),radial-gradient(800px_300px_at_90%_60%,rgba(13,110,253,0.25),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity, y }} className="grid lg:grid-cols-2 gap-10 items-center py-24">
          <div>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Quote smarter. Sell faster.
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              The all-in-one AC quoting and automation platform built for HVAC contractors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-[#000A5A] font-semibold shadow-[0_15px_40px_rgba(255,255,255,0.25)] hover:translate-y-[-1px] transition-transform">
                Start Free Demo
              </a>
              <a href="#video" className="inline-flex items-center rounded-2xl border border-white/30 px-6 py-3 text-white hover:bg-white/10 transition-colors">
                Watch Product Video
              </a>
            </div>
          </div>

          <div className="relative h-[480px]">
            <div className="absolute inset-0 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_30px_80px_rgba(0,10,90,0.4)] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <Spline scene="https://prod.spline.design/A4z2j5K2Cj8r3b8V/scene.splinecode" />
              </div>

              <div className="relative z-10 grid gap-4 p-6">
                <FloatingCard title="Quotestack Dashboard" description="Quotes • Pipeline • Surveys • Revenue" />
                <FloatingCard title="Website Quote Widget" description="Enter room • Instant price • Book survey" />
                <FloatingCard title="Quote Summary" description="Equipment • Labour • Materials • Margin" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FloatingCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
      className="group rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#000A5A]">{title}</p>
          <p className="text-xs text-slate-600">{description}</p>
        </div>
        <div className="size-8 rounded-xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] shadow-[0_10px_25px_rgba(13,110,253,0.4)]" />
      </div>
    </motion.div>
  )
}
