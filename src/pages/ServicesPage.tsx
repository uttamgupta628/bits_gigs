import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock3, Users, ShieldCheck, Globe, Code2, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import FramedVisual from '../components/FramedVisual'
import CtaBanner from '../components/CtaBanner'
import TechStack from '../components/TechStack'
import { services, whyChooseUs } from '../data/content'

const badges = [
  { icon: Clock3, label: 'On-Time Delivery' },
  { icon: Users, label: 'Agile & Transparent' },
  { icon: ShieldCheck, label: 'Secure & Scalable' },
  { icon: Globe, label: 'Global Clients' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="FULL-CYCLE DIGITAL ENGINEERING"
        pageLabel="Services"
        title={
          <>
            End-to-End Solutions That{' '}
            <span className="bg-gradient-to-r from-[#7C8CFF] via-[#4F6BFF] to-[#22D3EE] bg-clip-text text-transparent">
              Drive Real Growth
            </span>
          </>
        }
        description="From strategy and design to development and support, we build web, mobile, CMS, and streaming solutions that help businesses scale, engage, and succeed."
        primaryCta={{ label: 'Book a Discovery Call', to: '/#contact' }}
        secondaryCta={{ label: 'Discuss Your Project', to: '/#contact' }}
        visual={
          <FramedVisual
            image="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=85"
            alt="Engineering team building digital products"
            eyebrow="Product Engineering"
            heading="One team, every discipline"
            caption="Design, development, APIs and scalable infrastructure — all under one roof."
            floatCards={[
              { icon: Code2, title: 'React / Node.js', subtitle: 'Tech Stack', position: 'top-right' },
              { icon: Smartphone, title: 'Web & Mobile', subtitle: 'Delivery', position: 'bottom-left' },
            ]}
          />
        }
      />

      {/* Trust badges strip */}
      <section className="border-b border-slate-200 bg-white/70 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-4 px-5 sm:px-8">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <b.icon className="h-4 w-4 text-[#4F6BFF]" />
              {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* Core services */}
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
              What we do
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-navy">
              Our Core <span className="text-[#4F6BFF]">Services</span>
            </h2>
            <p className="mt-4 text-slate-500">
              End-to-end engineering solutions tailored to your business goals.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4F6BFF]/30 hover:shadow-[0_20px_45px_-20px_rgba(79,107,255,0.35)]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
                  style={{ backgroundColor: s.color }}
                />
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: s.color }}
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-[17px] font-semibold leading-snug text-navy">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[13px] leading-relaxed text-slate-500">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: s.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/#contact"
                  className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#4F6BFF] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      {/* Why choose us */}
      <section className="relative bg-mist pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)] sm:p-12"
          >
            <div className="text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-navy">
                Why Businesses Choose <span className="text-[#4F6BFF]">Bits&amp;Gigs</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md sm:mx-0"
                    style={{ backgroundColor: w.color }}
                  >
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-[15px] font-semibold text-navy">{w.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
