import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="relative bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#4F6BFF] uppercase">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-navy">
            Our Core <span className="text-[#4F6BFF]">Services</span>
          </h2>
          <p className="mt-4 text-slate-500">
            End-to-end engineering solutions tailored to your business goals.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4F6BFF]/30 hover:shadow-[0_20px_45px_-20px_rgba(79,107,255,0.35)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F6BFF] to-[#7C8CFF] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-[15px] font-semibold leading-snug text-navy">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[13px] leading-relaxed text-slate-500">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4F6BFF]" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#4F6BFF] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-[#4F6BFF]/40 hover:text-[#4F6BFF]"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
