import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  PlayCircle,
  Clock3,
  Users,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Code2,
  Smartphone,
  Database,
} from 'lucide-react'

const badges = [
  { icon: Clock3, label: 'On-Time Delivery' },
  { icon: Users, label: 'Agile & Transparent' },
  { icon: ShieldCheck, label: 'Secure & Scalable' },
  { icon: Globe, label: 'Global Clients' },
]

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      <div className="absolute -inset-10 rounded-[50px] bg-[#4F6BFF]/20 blur-[90px]" />
      <div className="absolute -inset-4 rounded-[42px] border border-[#4F6BFF]/20" />
      <div className="absolute -inset-8 rounded-[50px] border border-[#22D3EE]/10" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11162a] shadow-[0_35px_100px_-25px_rgba(0,0,0,0.8)]"
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
          alt="Software development team working together"
          className="h-[330px] sm:h-[410px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b16]/95 via-[#080b16]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F6BFF]/20 via-transparent to-[#22D3EE]/10 mix-blend-screen" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span className="text-xs font-medium text-white/80">Development Team</span>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/60">LIVE</span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="max-w-[330px]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8fa0ff]">Digital Product Engineering</p>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">From idea to production</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/60">
              Design, development, APIs and scalable infrastructure — all under one roof.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute -right-3 sm:-right-8 top-16 w-[175px] sm:w-[205px] rounded-2xl border border-white/10 bg-[#10152a]/90 p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-white/40">Tech Stack</span>
          <Code2 className="h-4 w-4 text-[#7C8CFF]" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#4F6BFF]/15">
              <Code2 className="h-3.5 w-3.5 text-[#7C8CFF]" />
            </div>
            <span className="text-xs text-white/70">React / Node.js</span>
            <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-emerald-400" />
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#22D3EE]/15">
              <Database className="h-3.5 w-3.5 text-[#22D3EE]" />
            </div>
            <span className="text-xs text-white/70">Cloud & APIs</span>
            <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-emerald-400" />
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#FFB648]/15">
              <Smartphone className="h-3.5 w-3.5 text-[#FFB648]" />
            </div>
            <span className="text-xs text-white/70">Web & Mobile</span>
            <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-emerald-400" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute -left-3 sm:-left-8 bottom-12 rounded-2xl border border-white/10 bg-[#10152a]/90 px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">Delivery</p>
            <p className="text-sm font-semibold text-white">Production Ready</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute -right-2 bottom-5 h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_25px_8px_rgba(34,211,238,0.25)]" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0a0e1a] pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none opacity-40">
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

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#4F6BFF]/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-200px] top-[30%] h-[400px] w-[400px] rounded-full bg-[#22D3EE]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
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
            FULL-CYCLE PRODUCT ENGINEERING
          </span>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.8rem]">
            We Build Digital Products That{' '}
            <span className="bg-gradient-to-r from-[#7C8CFF] via-[#4F6BFF] to-[#22D3EE] bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/85 sm:text-lg">
            Bits&amp;Gigs is a full-cycle web &amp; mobile engineering agency delivering scalable, secure, and high-performance solutions for startups and enterprises worldwide.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#4F6BFF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_-8px_rgba(79,107,255,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d59f0] hover:shadow-[0_15px_40px_-8px_rgba(79,107,255,0.9)]"
            >
              Book a Discovery Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
            >
              <PlayCircle className="h-4 w-4" />
              View Our Work
            </a>
          </div>

          <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="flex items-center gap-2 text-xs font-medium text-slate-400"
              >
                <badge.icon className="h-4 w-4 text-[#7C8CFF]" />
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative flex min-h-[380px] items-center justify-center sm:min-h-[480px]"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  )
}