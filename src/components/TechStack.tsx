import { motion } from 'framer-motion'
import { techStack } from '../data/content'

export default function TechStack() {
  const loop = [...techStack, ...techStack]

  return (
    <section className="bg-mist pb-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-navy">
            Technologies We <span className="text-[#4F6BFF]">Work With</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Modern frameworks and tools for building future-ready solutions.
          </p>
        </motion.div>
      </div>

      <div className="mt-11 marquee-pause relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-mist to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-mist to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-mono text-sm font-medium text-slate-600 shadow-sm transition-colors hover:border-[#4F6BFF]/40 hover:text-[#4F6BFF] whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}