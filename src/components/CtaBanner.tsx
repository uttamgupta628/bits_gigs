import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Send, ArrowRight, CheckCircle2 } from 'lucide-react'

interface CtaBannerProps {
  title?: string
  highlight?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
  features?: string[]
}

export default function CtaBanner({
  title = 'Have a Project in Mind?',
  highlight = 'Amazing!',
  description = "Tell us what you're trying to build, and we'll help you turn the idea into a scalable digital product.",
  ctaLabel = 'Start Your Project',
  ctaTo = '/#contact',
  features = ['Free discovery call', 'No commitment', 'Expert consultation'],
}: CtaBannerProps) {
  return (
    <section className="relative bg-mist px-5 pb-24 sm:px-8 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0e1a] px-6 py-10 sm:px-12 sm:py-12"
      >
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse 90% 100% at 30% 50%, black 20%, transparent 85%)',
            }}
          />
        </div>

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#4F6BFF]/25 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-20 -bottom-10 h-72 w-72 rounded-full bg-[#22D3EE]/15 blur-[100px]"
        />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4F6BFF]/15 text-[#7C8CFF]">
              <Send className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {title} <span className="text-gradient">{highlight}</span>
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
                {description}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
            <Link
              to={ctaTo}
              className="group inline-flex items-center gap-2 rounded-full bg-[#4F6BFF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_-8px_rgba(79,107,255,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d59f0]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {features.map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
