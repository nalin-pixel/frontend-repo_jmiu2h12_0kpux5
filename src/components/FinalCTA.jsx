import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden" aria-labelledby="cta-title">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD] via-[#55B4E6] to-[#000A5A]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_30%_40%,rgba(255,255,255,0.2),transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 id="cta-title" className="text-4xl font-extrabold tracking-tight text-white">Quote faster. Win more.</h2>
        <p className="mt-4 text-white/90">Start with a free interactive demo or book a call to see your numbers in Quotestack.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="relative inline-flex items-center rounded-2xl bg-white px-6 py-3 text-[#000A5A] font-semibold shadow-[0_15px_40px_rgba(255,255,255,0.25)]">
            <span className="relative z-10">Start Free Demo</span>
            <motion.span
              aria-hidden
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 rounded-full bg-white/30 blur-2xl"
            />
          </a>
          <a href="#" className="inline-flex items-center rounded-2xl border border-white/30 px-6 py-3 text-white hover:bg-white/10">Book a Call</a>
        </div>
      </div>
    </section>
  )
}
