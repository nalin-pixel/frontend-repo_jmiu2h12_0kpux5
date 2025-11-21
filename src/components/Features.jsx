import { motion } from "framer-motion"
import { BarChart3, Bot, Calculator, CheckCircle2, Database, Inbox, Layers3, Send } from "lucide-react"

const features = [
  { icon: Calculator, title: "Instant AC quotes" },
  { icon: CheckCircle2, title: "Smart equipment selection" },
  { icon: Send, title: "Branded website widget" },
  { icon: Inbox, title: "Automated email & SMS follow-ups" },
  { icon: BarChart3, title: "Real-time analytics" },
  { icon: Layers3, title: "Customer & quote history" },
  { icon: Database, title: "Labour, material & margin control" },
  { icon: Bot, title: "Equipment catalog uploads" },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-gray-50" aria-labelledby="features-title">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_10%_10%,rgba(85,180,230,0.2),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 id="features-title" className="text-3xl font-bold text-[#000A5A]">Everything you need to win more AC jobs</h2>
          <p className="mt-3 text-slate-600">Designed for HVAC teams that move fast.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <TiltCard key={f.title} delay={i * 0.03}>
              <div className="size-10 rounded-xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(13,110,253,0.35)]">
                <f.icon size={20} />
              </div>
              <p className="mt-4 font-semibold text-[#000A5A]">{f.title}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      whileHover={{ rotateX: 3, rotateY: -3, y: -4 }}
      className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-xl transition-all"
    >
      {children}
    </motion.div>
  )
}
