import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import ProcessCycleVisual from '../components/ProcessCycleVisual'
import CtaBanner from '../components/CtaBanner'
import { processDetailed, processHighlights, toolsMethodologies } from '../data/content'

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK PROCESS"
        pageLabel="Process"
        title={
          <>
            Our Proven Process.{' '}
            <span className="bg-gradient-to-r from-[#7C8CFF] via-[#4F6BFF] to-[#22D3EE] bg-clip-text text-transparent">
              Your Project, Done Right.
            </span>
          </>
        }
        description="We follow a clear, transparent, and agile methodology to deliver high-quality digital products that drive real results."
        primaryCta={{ label: 'Book a Discovery Call', to: '/#contact' }}
        secondaryCta={{ label: 'View Our Work', to: '/portfolio' }}
        visual={<ProcessCycleVisual />}
      />

      {/* Steps */}
      <section className="relative bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#4F6BFF] uppercase">
              How we work
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-navy">
              Our Work <span className="text-[#4F6BFF]">Process</span>
            </h2>
            <p className="mt-4 text-slate-500">
              A clear, step-by-step workflow to turn your ideas into successful digital products.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processDetailed.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4F6BFF]/30 hover:shadow-[0_20px_45px_-20px_rgba(79,107,255,0.35)]"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F6BFF] to-[#7C8CFF] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy font-mono text-[10px] font-semibold text-white ring-4 ring-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[15px] font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{p.desc}</p>
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {p.checklist.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[12px] leading-relaxed text-slate-500">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4F6BFF]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes process effective */}
      <section className="relative bg-mist pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)] sm:p-10"
          >
            <div className="text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-navy">
                What Makes Our <span className="text-[#4F6BFF]">Process Effective?</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {processHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4F6BFF]/10 text-[#4F6BFF]">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-[14px] font-semibold text-navy">{h.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-slate-500">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative bg-mist pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-navy">
              Tools &amp; <span className="text-[#4F6BFF]">Methodologies</span> We Use
            </h2>
            <p className="mt-3 text-slate-500">
              Modern tools and proven methodologies to ensure efficient delivery.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {toolsMethodologies.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm transition-all hover:border-[#4F6BFF]/30 hover:shadow-md"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${t.color}18` }}
                >
                  <t.icon className="h-5 w-5" style={{ color: t.color }} />
                </div>
                <span className="text-xs font-semibold text-slate-600">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Project in Mind?"
        highlight="Amazing!"
        description="Tell us what you're trying to build, and we'll help you turn the idea into a scalable digital product."
        ctaLabel="Start Your Project"
        ctaTo="/#contact"
      />
    </>
  )
}
