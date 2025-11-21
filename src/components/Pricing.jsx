import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "$79",
    features: [
      "Website widget",
      "Basic automations",
      "Analytics dashboard",
    ],
  },
  {
    name: "Pro",
    price: "$159",
    popular: true,
    features: [
      "Widget + advanced rules",
      "Email & SMS sequences",
      "Full analytics",
    ],
  },
  {
    name: "Business",
    price: "$299",
    features: [
      "Multi-location",
      "Custom catalogs",
      "Priority support",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 id="pricing-title" className="text-3xl font-bold text-[#000A5A]">Simple, scalable pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl border ${
                p.popular ? "border-[#0D6EFD] shadow-[0_20px_60px_rgba(13,110,253,0.25)]" : "border-slate-200 shadow-sm"
              } bg-white p-6`}
            >
              {p.popular && (
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#55B4E6]/20 to-[#0D6EFD]/20 blur-xl -z-10" />
              )}
              <h3 className="text-xl font-bold text-[#000A5A]">{p.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-[#0D6EFD]">{p.price}<span className="text-base text-slate-500 font-medium">/mo</span></p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block size-1.5 rounded-full bg-[#0D6EFD]" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition-colors ${
                  p.popular ? "bg-gradient-to-r from-[#55B4E6] to-[#0D6EFD] text-white" : "border border-slate-200 text-[#000A5A] hover:bg-slate-50"
                }`}
              >
                {p.popular ? "Start Free Demo" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
