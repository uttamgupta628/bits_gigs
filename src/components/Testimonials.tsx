import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { testimonials, trustedLogos, stats } from '../data/content'
import Counter from './Counter'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(id)
  }, [isPaused])

  const t = testimonials[active]

  return (
    <section id="about" className="relative overflow-hidden bg-[#0a0e1a] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
          }}
        />
      </div>

      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#4F6BFF]/10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#22D3EE]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#7C8CFF]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9fb0ff]">Client Experiences</span>
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by People Who{' '}
            <span className="bg-gradient-to-r from-[#7C8CFF] via-[#4F6BFF] to-[#22D3EE] bg-clip-text text-transparent">
              Build Big Things
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            We partner with ambitious startups and enterprises to turn ideas into reliable, scalable digital products.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-5 rounded-[32px] bg-[#4F6BFF]/10 blur-[45px]" />
            <div className="relative overflow-hidden rounded-[28px] p-[1px]">
              <motion.div
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-[28px] bg-[linear-gradient(90deg,#4F6BFF,#22D3EE,#7C8CFF,#4F6BFF)] bg-[length:300%_100%]"
              />
              <div className="relative min-h-[390px] rounded-[27px] bg-[#0d1222]/95 p-7 sm:p-9">
                <motion.div
                  animate={{ rotate: [0, 4, -4, 0], y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-8 top-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_35px_rgba(79,107,255,0.15)]">
                    <Quote className="h-6 w-6 text-[#7C8CFF]" />
                  </div>
                </motion.div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Client Feedback</span>
                </div>

                <div className="relative mt-10 min-h-[205px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, x: 35, rotateY: 8 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      exit={{ opacity: 0, x: -35, rotateY: -8 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      <p className="max-w-2xl text-lg font-medium leading-[1.65] text-white sm:text-xl">"{t.quote}"</p>
                      <div className="mt-8 flex items-center gap-4">
                        <motion.div
                          animate={{ boxShadow: ['0 0 0px rgba(79,107,255,0)', '0 0 25px rgba(79,107,255,0.35)', '0 0 0px rgba(79,107,255,0)'] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4F6BFF] to-[#22D3EE] p-[2px]"
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#10152a] font-display text-sm font-bold text-white">
                            {t.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0d1222]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                          </div>
                        </motion.div>
                        <div>
                          <div className="text-sm font-semibold text-white">{t.name}</div>
                          <div className="mt-0.5 text-xs text-slate-500">{t.role}</div>
                        </div>
                        <div className="ml-auto hidden items-center gap-0.5 sm:flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06, duration: 0.25 }}>
                              <Star className="h-3.5 w-3.5 fill-[#FFB648] text-[#FFB648]" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button key={i} onClick={() => setActive(i)} aria-label={`Show testimonial ${i + 1}`} className="group relative h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.span
                          animate={{ width: i === active ? '28px' : '6px' }}
                          transition={{ duration: 0.3 }}
                          className={`block h-full rounded-full ${i === active ? 'bg-gradient-to-r from-[#4F6BFF] to-[#22D3EE]' : 'bg-white/20 group-hover:bg-white/40'}`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-600">
                    {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C8CFF]">Trusted By</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">Global clients</h3>
              </div>
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }} className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 sm:block">
                <span className="text-[10px] text-slate-500">100% Client Focus</span>
              </motion.div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {trustedLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.07 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-[1px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F6BFF]/0 via-[#4F6BFF]/0 to-[#22D3EE]/0 transition-all duration-500 group-hover:from-[#4F6BFF]/15 group-hover:to-[#22D3EE]/10" />
                  <div className="relative flex min-h-[72px] items-center justify-between rounded-[15px] bg-[#0d1222]/90 px-4">
                    <span className="font-display text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-white">{logo}</span>
                    <div className="flex gap-0.5 opacity-70 transition-opacity group-hover:opacity-100">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-[#FFB648] text-[#FFB648]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center transition-colors duration-300 hover:border-[#4F6BFF]/30"
                >
                  <div className="pointer-events-none absolute -right-5 -top-5 h-16 w-16 rounded-full bg-[#4F6BFF]/10 blur-2xl transition-all duration-500 group-hover:bg-[#4F6BFF]/25" />
                  <div className="relative font-display text-2xl font-bold text-white sm:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="relative mt-1.5 text-[10px] leading-tight text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4"
            >
              <div>
                <p className="text-xs font-semibold text-white">Ready to build something great?</p>
                <p className="mt-1 text-[10px] text-slate-500">Let's turn your idea into a product.</p>
              </div>
              <a href="#contact" className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#4F6BFF] text-white shadow-[0_8px_25px_-8px_rgba(79,107,255,0.9)] transition-all hover:scale-105 hover:bg-[#5d75ff]">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}