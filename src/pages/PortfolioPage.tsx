import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Briefcase, Users2, Lightbulb, Wrench, TrendingUp } from 'lucide-react'
import PageHero from '../components/PageHero'
import FramedVisual from '../components/FramedVisual'
import CtaBanner from '../components/CtaBanner'
import { portfolioFilters, portfolioProjects } from '../data/content'

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All Projects')

  const filtered =
    filter === 'All Projects'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category.includes(filter))

  return (
    <>
      <PageHero
        eyebrow="OUR PORTFOLIO"
        pageLabel="Portfolio"
        title={
          <>
            Digital Products.{' '}
            <span className="bg-gradient-to-r from-[#7C8CFF] via-[#4F6BFF] to-[#22D3EE] bg-clip-text text-transparent">
              Real Impact.
            </span>
          </>
        }
        description="We build scalable, secure, and high-performance web and mobile solutions that help businesses grow and succeed."
        primaryCta={{ label: 'Start Your Project', to: '/#contact' }}
        secondaryCta={{ label: 'View Case Studies', to: '#case-studies' }}
        stats={[
          { value: 50, suffix: '+', label: 'Projects Delivered' },
          { value: 30, suffix: '+', label: 'Happy Clients' },
        ]}
        visual={
          <FramedVisual
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
            alt="Product analytics dashboard on a laptop"
            eyebrow="Case Study"
            heading="WealthTrack Dashboard"
            caption="Financial analytics platform with real-time insights and reporting."
            floatCards={[
              { icon: Briefcase, title: '50+ Projects', subtitle: 'Delivered', position: 'top-right' },
              { icon: Users2, title: '30+ Clients', subtitle: 'Worldwide', position: 'bottom-left' },
            ]}
          />
        }
      />

      {/* Case studies */}
      <section id="case-studies" className="relative bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#4F6BFF] uppercase">
              Selected work
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-navy">
              Our <span className="text-[#4F6BFF]">Case Studies</span>
            </h2>
            <p className="mt-4 text-slate-500">
              Explore how we solve challenges and deliver results for our clients.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  filter === f
                    ? 'bg-[#4F6BFF] text-white shadow-[0_10px_25px_-10px_rgba(79,107,255,0.7)]'
                    : 'border border-slate-200 bg-white text-slate-500 hover:border-[#4F6BFF]/40 hover:text-[#4F6BFF]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-12 space-y-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_15px_50px_-35px_rgba(15,23,42,0.3)] transition-all duration-300 hover:border-[#4F6BFF]/25 hover:shadow-[0_25px_60px_-30px_rgba(79,107,255,0.35)] sm:p-5 lg:grid-cols-[280px_1fr]"
                >
                  <div className="relative h-52 overflow-hidden rounded-2xl lg:h-full">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute left-3 top-3 rounded-full ${p.tagColor} px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg`}>
                      {p.tag}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between py-2 pr-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">{p.title}</h3>
                      <p className="mt-1 text-sm font-medium text-[#4F6BFF]">{p.subtitle}</p>

                      <div className="mt-4 grid gap-5 sm:grid-cols-3">
                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            <Lightbulb className="h-3.5 w-3.5" /> Client Challenge
                          </div>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{p.challenge}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            <Wrench className="h-3.5 w-3.5" /> Technology
                          </div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {p.tech.map((t) => (
                              <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            <TrendingUp className="h-3.5 w-3.5" /> Outcomes
                          </div>
                          <ul className="mt-1.5 space-y-1">
                            {p.outcomes.map((o) => (
                              <li key={o} className="text-[12px] leading-snug text-slate-500">• {o}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <Link
                        to="/#contact"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#4F6BFF] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_-10px_rgba(79,107,255,0.7)] transition-transform hover:-translate-y-0.5"
                      >
                        Live Demo <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to="/#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-[#4F6BFF]"
                      >
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center text-sm text-slate-400">
                  No projects in this category yet — check back soon.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CtaBanner
        title="Have a Project in Mind?"
        highlight="Amazing!"
        description="We help startups and enterprises turn ideas into scalable digital products that drive growth."
        ctaLabel="Start Your Project"
        ctaTo="/#contact"
      />
    </>
  )
}
