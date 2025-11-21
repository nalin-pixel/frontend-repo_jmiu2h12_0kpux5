import { motion } from "framer-motion"
import { AlertTriangle, CalendarX2, FileSpreadsheet, MailWarning, Timer } from "lucide-react"

const items = [
  { icon: Timer, title: "Slow manual quoting" },
  { icon: FileSpreadsheet, title: "Spreadsheets everywhere" },
  { icon: MailWarning, title: "Missed or forgotten leads" },
  { icon: CalendarX2, title: "No consistent follow-up" },
  { icon: AlertTriangle, title: "Hard to track what’s working" },
]

export default function Problem() {
  return (
    <section className="relative bg-gray-50" aria-labelledby="problem-title">
      <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_-50%,rgba(13,110,253,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 id="problem-title" className="text-3xl font-bold text-[#000A5A]">The problems with manual quoting</h2>
          <p className="mt-3 text-slate-600">If you’re juggling spreadsheets and inboxes, you’re moving slower than your next win.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="size-10 rounded-xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(13,110,253,0.35)] mb-4">
                <item.icon size={20} />
              </div>
              <p className="font-semibold text-slate-800">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
