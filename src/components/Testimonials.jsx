import { motion } from "framer-motion"

const items = [
  {
    name: "Polar Air Ltd",
    quote:
      "We moved from spreadsheets to Quotestack in a week and started sending quotes same-day. Pipeline almost doubled.",
    person: "Samir, Director",
  },
  {
    name: "BlueBreeze HVAC",
    quote: "Homeowners love the instant widget. Our team spends less time on the phone and more time installing.",
    person: "Laura, Ops Manager",
  },
  {
    name: "EcoChill Services",
    quote: "Follow-ups are automatic now. Our conversion rate jumped by 12% in the first month.",
    person: "Mike, Sales",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gray-50" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <h2 id="testimonials-title" className="text-3xl font-bold text-[#000A5A]">What HVAC contractors say</h2>
          <p className="mt-3 text-slate-600">Real stories from teams who switched to instant quoting.</p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -600, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...items, ...items].map((t, i) => (
              <div key={i} className="min-w-[320px] max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-slate-700">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-500">
                  <p className="font-semibold text-[#000A5A]">{t.name}</p>
                  <p>{t.person}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
