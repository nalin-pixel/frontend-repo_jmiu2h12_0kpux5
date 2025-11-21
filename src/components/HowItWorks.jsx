import { motion } from "framer-motion"
import { BarChart3, Calculator, CheckCircle2, MousePointerClick } from "lucide-react"

const steps = [
  {
    icon: MousePointerClick,
    title: "Capture the lead",
    desc: "The website widget lives on your site and captures homeowner details.",
  },
  {
    icon: Calculator,
    title: "Instant calculations",
    desc: "Room details convert to cooling requirements at 150 W/m² automatically.",
  },
  {
    icon: CheckCircle2,
    title: "Smart equipment selection",
    desc: "Split or multi-split chosen from your catalogs and margins.",
  },
  {
    icon: BarChart3,
    title: "Send and automate",
    desc: "Branded quote sent with built-in follow-ups and tracking.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-white" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 id="how-title" className="text-3xl font-bold text-[#000A5A]">How Quotestack works</h2>
          <p className="mt-3 text-slate-600">Four steps to go from enquiry to accepted quote.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(13,110,253,0.35)] mb-5">
                <step.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-[#000A5A]">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-slate-500">
                <div className="h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center">UI</div>
                <div className="h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center">Chart</div>
                <div className="h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center">Toggle</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
