import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Process', to: '/process' },
  // { label: 'About Us', to: '/#about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/'
    if (to.startsWith('/#')) return false
    return location.pathname.startsWith(to)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/85 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(10,14,26,0.85)' : 'transparent' }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#4F6BFF] to-[#7C8CFF] shadow-[0_0_20px_rgba(79,107,255,0.5)] transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Bits<span className="text-[#7C8CFF]">&amp;</span>Gigs
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={`text-sm font-medium transition-colors relative group ${
                isActive(l.to) ? 'text-white' : 'text-slate-300/80 hover:text-white'
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-[#7C8CFF] transition-all duration-300 ${
                  isActive(l.to) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#4F6BFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(79,107,255,0.7)] transition-all hover:bg-[#3d59f0] hover:shadow-[0_10px_30px_-6px_rgba(79,107,255,0.85)] hover:-translate-y-0.5"
          >
            Book a Discovery Call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-navy/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive(l.to) ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#4F6BFF] px-5 py-3 text-sm font-semibold text-white"
              >
                Book a Discovery Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
