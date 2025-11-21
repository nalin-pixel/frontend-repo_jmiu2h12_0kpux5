import { motion, useScroll, useTransform } from "framer-motion"

export default function Dashboard() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.95, 1, 0.98])
  const y = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [20, 0, 10])

  return (
    <section className="relative bg-white" aria-labelledby="dash-title">
      <div className="absolute inset-0 bg-[radial-gradient(900px_200px_at_80%_-10%,rgba(13,110,253,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 id="dash-title" className="text-3xl font-bold text-[#000A5A]">Your command center</h2>
          <p className="mt-3 text-slate-600">Quotes, pipeline and revenue – in one place.</p>
        </div>

        <motion.div style={{ scale, y }} className="relative rounded-[24px] border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-6">
              <div className="h-64 rounded-xl bg-gradient-to-br from-[#55B4E6]/20 to-[#0D6EFD]/20 border border-slate-200 flex items-end gap-2 p-4">
                {[30, 50, 80, 40, 65, 90, 70].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: h + "%" }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="w-8 rounded-t bg-gradient-to-t from-[#0D6EFD] to-[#55B4E6] shadow-[0_8px_20px_rgba(13,110,253,0.3)]" />
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 p-6 grid gap-4">
              <Stat title="Pipeline value" value="$482,900" />
              <Stat title="Conversion rate" value="34%" />
              <Stat title="Booked surveys" value="27" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ title, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm"
    >
      <p className="text-sm text-slate-600">{title}</p>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-2 text-2xl font-bold text-[#000A5A]">
        {value}
      </motion.p>
    </motion.div>
  )
}
