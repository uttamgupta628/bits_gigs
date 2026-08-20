import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Quote, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import GlobeVisual from '../components/GlobeVisual'
import Counter from '../components/Counter'
import { testimonials, trustStats, commitments, trustedClients, reviewPlatforms } from '../data/content'

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="TRUSTED BY GLOBAL CLIENTS"
        pageLabel="Testimonials"
        title={
          <>
            Building Trust.{' '}
            <span className="bg-gradient-to-r from-[#7C8CFF] via-[#4F6BFF] to-[#22D3EE] bg-clip-text text-transparent">
              Delivering Impact.
            </span>
          </>
        }
        description="We partner with startups and enterprises worldwide to build high-performance digital products that drive real growth."
        primaryCta={{ label: 'Start a Project', to: '/#contact' }}
        secondaryCta={{ label: 'Chat on WhatsApp', to: 'https://wa.me/919876543210' }}
        stats={trustStats}
        visual={<GlobeVisual />}
      />

      {/* Testimonials grid */}
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
              Client testimonials
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-navy">
              What Our <span className="text-[#4F6BFF]">Clients Say</span>
            </h2>
            <p className="mt-4 text-slate-500">
              Real feedback from real clients who have experienced our commitment to quality and results.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.25)] transition-all duration-300 hover:border-[#4F6BFF]/25 hover:shadow-[0_20px_50px_-25px_rgba(79,107,255,0.3)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-[#FFB648] text-[#FFB648]" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-[#4F6BFF]/25" />
                </div>

                <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-slate-600">
                  "{t.quote}"
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4F6BFF] to-[#22D3EE] font-display text-xs font-bold text-white">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-navy">{t.name}</p>
                    <p className="truncate text-[11px] text-slate-500">{t.role}</p>
                  </div>
                  <span className="text-lg" title={t.country}>{t.flag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment band */}
      <section className="relative overflow-hidden bg-[#0a0e1a] py-16">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="grid-field absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Our Commitment. <span className="text-gradient">Your Trust.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4F6BFF]/15 text-[#7C8CFF]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-400">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
              >
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-[10px] leading-tight text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted clients + review platforms */}
      <section className="relative bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-navy">
              Trusted By <span className="text-[#4F6BFF]">Global Clients</span>
            </h2>
            <p className="mt-3 text-slate-500">
              Startups and enterprises from around the world trust Bits&amp;Gigs to build their digital future.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustedClients.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-center text-sm font-semibold text-slate-500 shadow-sm transition-colors hover:border-[#4F6BFF]/30 hover:text-[#4F6BFF]"
              >
                {c}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {reviewPlatforms.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm"
              >
                <span className="font-display text-base font-bold text-navy">{r.name}</span>
                {r.rating && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#FFB648]">
                    {r.rating} <Star className="h-3 w-3 fill-[#FFB648] text-[#FFB648]" />
                  </span>
                )}
                <span className="text-[11px] text-slate-500">{r.meta}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm"
            >
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <span className="text-xs font-semibold text-navy">Verified &amp; Trusted</span>
              <span className="text-[11px] text-slate-500">NDA &amp; IP Protection Guaranteed</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-mist px-5 pb-24 sm:px-8 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0e1a] px-6 py-10 sm:flex-row sm:px-12 sm:py-12"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4F6BFF]/15 text-[#7C8CFF]">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                Ready to Join Our Happy Clients?
              </h3>
              <p className="mt-1 text-sm text-slate-400">Let's build something amazing together.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#4F6BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_-8px_rgba(79,107,255,0.85)] transition-all hover:-translate-y-0.5 hover:bg-[#3d59f0]"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.06]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
