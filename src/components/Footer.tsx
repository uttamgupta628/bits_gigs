import type { SVGProps } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.87V21H9z" />
    </svg>
  )
}
function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6z" />
    </svg>
  )
}
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.35 4.7-4.58 4.94.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  )
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

const socialLinks = [
  { label: 'LinkedIn', Icon: LinkedinIcon, href: '#' },
  { label: 'X (Twitter)', Icon: XIcon, href: '#' },
  { label: 'GitHub', Icon: GithubIcon, href: '#' },
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
]

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Process', to: '/process' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Contact', to: '/#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services' },
      { label: 'Mobile Apps', to: '/services' },
      { label: 'CMS & E-Commerce', to: '/services' },
      { label: 'Media Streaming', to: '/services' },
      { label: 'Cloud & DevOps', to: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', to: '/portfolio' },
      { label: 'Our Process', to: '/process' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms & Conditions', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink pt-16 pb-8" style={{ backgroundColor: '#060812' }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#4F6BFF] to-[#7C8CFF]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Bits<span className="text-[#7C8CFF]">&amp;</span>Gigs
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Building scalable digital products that drive business growth.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, Icon, href }) => (
                <a key={label} href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-[#4F6BFF] hover:text-white hover:-translate-y-0.5">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-slate-400 transition-colors hover:text-[#7C8CFF]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Stay Updated</h4>
            <p className="mt-4 text-sm text-slate-400">Get the latest updates and insights.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
              <input type="email" required placeholder="Enter your email" className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none" />
              <button type="submit" className="flex shrink-0 items-center justify-center bg-[#4F6BFF] px-4 text-white transition-colors hover:bg-[#3d59f0]">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-white/5 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-500">© 2024 Bits&amp;Gigs. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}