import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Send,
  Clock3,
  Navigation,
} from 'lucide-react'

const contactDetails = [
  { icon: MapPin, label: 'Ramnagar, Nainital, Uttarakhand, India', sublabel: 'Our location' },
  { icon: Mail, label: 'hello@bitsngigs.com', sublabel: 'Email us anytime' },
  { icon: Phone, label: '+91 98765 43210', sublabel: 'Mon – Fri, 9AM – 6PM' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f7f8fc] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
          }}
        />
      </div>

      <motion.div
        animate={{ x: [0, 70, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-[#4F6BFF]/10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-40 right-[-100px] h-[450px] w-[450px] rounded-full bg-[#22D3EE]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4F6BFF]/10 bg-white px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#4F6BFF]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4F6BFF]">
              Let's Work Together
            </span>
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[#4F6BFF] to-[#22D3EE] bg-clip-text text-transparent">
              Amazing
            </span>{' '}
            Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Have an idea, product, or business challenge? Tell us what you're building and let's turn it into something exceptional.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-3">
              {contactDetails.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_10px_35px_-25px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-[#4F6BFF]/20 hover:bg-white hover:shadow-[0_15px_40px_-25px_rgba(79,107,255,0.35)]"
                >
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4F6BFF]/10 text-[#4F6BFF] transition-all duration-300 group-hover:bg-[#4F6BFF] group-hover:text-white">
                    <contact.icon className="h-4.5 w-4.5" />
                    <div className="absolute inset-0 rounded-xl bg-[#4F6BFF]/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{contact.sublabel}</p>
                    <p className="mt-1 truncate text-sm font-medium text-slate-700">{contact.label}</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4F6BFF]" />
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-5 flex items-center justify-between overflow-hidden rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-[0_15px_35px_-15px_rgba(37,211,102,0.65)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Chat with us on WhatsApp</p>
                  <p className="mt-0.5 text-[11px] text-white/70">Usually replies within a few minutes</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative mt-5 h-[245px] overflow-hidden rounded-2xl border border-slate-200 bg-[#e9edf8] shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)]"
            >
              <div className="absolute inset-0 opacity-70">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(30deg, transparent 45%, rgba(255,255,255,0.8) 46%, rgba(255,255,255,0.8) 48%, transparent 49%),
                      linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.7) 46%, rgba(255,255,255,0.7) 48%, transparent 49%)
                    `,
                    backgroundSize: '85px 70px',
                  }}
                />
              </div>
              <div className="absolute left-[-20%] top-[45%] h-[18px] w-[140%] rotate-[-12deg] rounded-full bg-white/80 shadow-sm" />
              <div className="absolute left-[45%] top-[-30%] h-[150%] w-[15px] rotate-[22deg] rounded-full bg-white/80 shadow-sm" />
              <div className="absolute bottom-[18%] left-[-10%] h-[10px] w-[80%] rotate-[25deg] rounded-full bg-white/60" />
              <div className="absolute left-[-10%] top-[52%] h-[4px] w-[120%] rotate-[-12deg] bg-[#4F6BFF]/40" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.25, 0, 0.25] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute left-[52%] top-[48%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F6BFF]"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[52%] top-[48%] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F6BFF] shadow-[0_10px_30px_-5px_rgba(79,107,255,0.7)]">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </motion.div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/70 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-[#4F6BFF]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">Based in</p>
                    <p className="text-xs font-semibold text-slate-700">Nainital, Uttarakhand</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-semibold text-emerald-600">INDIA</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[#4F6BFF]/10 blur-[45px]" />
            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.3)] sm:p-8">
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#4F6BFF] via-[#7C8CFF] to-[#22D3EE]" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0f172a] sm:text-2xl">Send Us a Message</h3>
                  <p className="mt-1.5 text-sm text-slate-500">Tell us about your project and we'll get back to you.</p>
                </div>
                <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#4F6BFF]/10 sm:flex">
                  <Send className="h-4.5 w-4.5 text-[#4F6BFF]" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 flex min-h-[460px] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-[#f0fdf4] px-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 180 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
                    >
                      <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="mt-6 font-display text-2xl font-semibold text-[#0f172a]"
                    >
                      Message Sent!
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500"
                    >
                      Thanks for reaching out. Our team will review your project and get back to you shortly.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
                    >
                      <Clock3 className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-xs font-medium text-slate-600">Usually replies within 1 business day</span>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-7 space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">Your Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0f172a] outline-none transition-all placeholder:text-slate-400 focus:border-[#4F6BFF] focus:bg-white focus:ring-4 focus:ring-[#4F6BFF]/10" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">Email Address</label>
                        <input required type="email" placeholder="john@company.com" className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0f172a] outline-none transition-all placeholder:text-slate-400 focus:border-[#4F6BFF] focus:bg-white focus:ring-4 focus:ring-[#4F6BFF]/10" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">Project Type</label>
                        <select className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0f172a] outline-none transition-all focus:border-[#4F6BFF] focus:bg-white focus:ring-4 focus:ring-[#4F6BFF]/10">
                          <option>Web Application</option>
                          <option>Mobile App</option>
                          <option>E-Commerce</option>
                          <option>Streaming Platform</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-500">Budget Range</label>
                        <select className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0f172a] outline-none transition-all focus:border-[#4F6BFF] focus:bg-white focus:ring-4 focus:ring-[#4F6BFF]/10">
                          <option>$1k – $5k</option>
                          <option>$5k – $15k</option>
                          <option>$15k – $50k</option>
                          <option>$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-500">Timeline</label>
                      <select className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0f172a] outline-none transition-all focus:border-[#4F6BFF] focus:bg-white focus:ring-4 focus:ring-[#4F6BFF]/10">
                        <option>ASAP</option>
                        <option>Within 1 month</option>
                        <option>1–3 months</option>
                        <option>Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-500">Tell us about your project</label>
                      <textarea required rows={4} placeholder="Share a few details about what you're building..." className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-[#0f172a] outline-none transition-all placeholder:text-slate-400 focus:border-[#4F6BFF] focus:bg-white focus:ring-4 focus:ring-[#4F6BFF]/10" />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#4F6BFF] py-3.5 text-sm font-semibold text-white shadow-[0_15px_30px_-10px_rgba(79,107,255,0.65)] transition-all hover:bg-[#3d59f0] disabled:cursor-not-allowed disabled:opacity-80"
                    >
                      <motion.span
                        animate={{ x: ['-120%', '120%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-y-0 w-20 skew-x-[-20deg] bg-white/10 blur-sm"
                      />
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get a Free Quote
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-[10px] text-slate-400">
                      Your information is safe with us. We never share your details with third parties.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}