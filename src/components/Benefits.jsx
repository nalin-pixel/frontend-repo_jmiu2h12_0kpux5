import { motion } from "framer-motion"
import { ArrowUpCircle, BadgeDollarSign, Clock, MailCheck, ShieldCheck, TrendingUp } from "lucide-react"

const benefits = [
  { icon: Clock, text: "Respond faster to every enquiry" },
  { icon: TrendingUp, text: "Win more jobs with instant quotes" },
  { icon: ArrowUpCircle, text: "Save hours on admin every week" },
  { icon: ShieldCheck, text: "Protect your profit on every job" },
  { icon: MailCheck, text: "Never lose a lead again" },
  { icon: BadgeDollarSign, text: "Scale without extra office staff" },
]

export default function Benefits() {
  return (
    <section className="relative bg-white" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <h2 id="benefits-title" className="text-3xl font-bold text-[#000A5A]">Built for HVAC businesses</h2>
          <p className="mt-3 text-slate-600">Be the first to respond, the fastest to quote, and the easiest to say yes to.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="size-10 rounded-xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] text-white flex items-center justify-center">
                <b.icon size={20} />
              </div>
              <p className="font-medium text-slate-800">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
