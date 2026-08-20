import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import Counter from './Counter'

interface Stat {
  value: number
  suffix?: string
  label: string
}

interface PageHeroProps {
  eyebrow: string
  pageLabel: string
  title: ReactNode
  description: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  stats?: Stat[]
  visual: ReactNode
}

export default function PageHero({
  eyebrow,
  pageLabel,
  title,
  description,
  primaryCta = { label: 'Book a Discovery Call', to: '/#contact' },
  secondaryCta,
  stats,
  visual,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
          }}
        />
      </div>

      <div className="pointer-events-none absolute -top-40 left-1/3 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#4F6BFF]/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-200px] top-[35%] h-[380px] w-[380px] rounded-full bg-[#22D3EE]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-1.5 text-xs font-medium text-slate-500"
        >
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-300">{pageLabel}</span>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-[#9fb0ff]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C8CFF] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7C8CFF]" />
              </span>
              {eyebrow}
            </span>

            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/85 sm:text-lg">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              {primaryCta.to.startsWith('http') ? (
                <a
                  href={primaryCta.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#4F6BFF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_-8px_rgba(79,107,255,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d59f0]"
                >
                  {primaryCta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <Link
                  to={primaryCta.to}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#4F6BFF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_-8px_rgba(79,107,255,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d59f0]"
                >
                  {primaryCta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
              {secondaryCta && (
                secondaryCta.to.startsWith('http') ? (
                  <a
                    href={secondaryCta.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    to={secondaryCta.to}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
                  >
                    {secondaryCta.label}
                  </Link>
                )
              )}
            </div>

            {stats && (
              <div className="mt-11 flex flex-wrap gap-x-9 gap-y-5">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative flex min-h-[340px] items-center justify-center sm:min-h-[420px]"
          >
            {visual}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  )
}
