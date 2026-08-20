import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { process } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="relative bg-mist py-24 sm:py-28">
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
            A clear, transparent, and agile approach to deliver exceptional products.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px">
            <div className="h-full w-full border-t-2 border-dashed border-slate-300" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
              className="absolute inset-0 h-full w-full border-t-2 border-[#4F6BFF]"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#4F6BFF]/20 text-[#4F6BFF] shadow-md transition-all duration-300 group-hover:border-[#4F6BFF] group-hover:scale-110 group-hover:shadow-[0_10px_30px_-8px_rgba(79,107,255,0.5)]">
                  <p.icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy font-mono text-[10px] font-semibold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[15px] font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500 max-w-[190px]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            to="/process"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-[#4F6BFF]/40 hover:text-[#4F6BFF]"
          >
            See Our Full Process <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
