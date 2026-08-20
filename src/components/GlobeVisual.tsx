import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const nodes = [
  { top: '18%', left: '22%', delay: 0 },
  { top: '30%', left: '68%', delay: 0.4 },
  { top: '55%', left: '15%', delay: 0.8 },
  { top: '65%', left: '78%', delay: 1.2 },
  { top: '80%', left: '42%', delay: 1.6 },
  { top: '40%', left: '46%', delay: 2.0 },
]

export default function GlobeVisual() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <div className="absolute -inset-10 rounded-[50px] bg-[#4F6BFF]/20 blur-[90px]" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0d1330] to-[#0a0e1a] shadow-[0_35px_100px_-25px_rgba(0,0,0,0.8)]">
        <div className="relative h-[340px] sm:h-[420px] w-full">
          {/* Grid dots background */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(rgba(124,140,255,0.35) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 90%)',
            }}
          />

          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#4F6BFF]/30 sm:h-[340px] sm:w-[340px]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#22D3EE]/25 sm:h-[240px] sm:w-[240px]"
          />

          {/* Core globe */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#4F6BFF] to-[#22D3EE] shadow-[0_0_60px_rgba(79,107,255,0.55)] sm:h-28 sm:w-28"
          >
            <Globe className="h-11 w-11 text-white sm:h-12 sm:w-12" strokeWidth={1.5} />
          </motion.div>

          {/* Connection lines */}
          <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.5 }}>
            {nodes.map((n, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={n.left}
                y2={n.top}
                stroke="url(#lineGrad)"
                strokeWidth="1"
              />
            ))}
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Pulsing nodes */}
          {nodes.map((n, i) => (
            <div key={i} className="absolute" style={{ top: n.top, left: n.left }}>
              <motion.div
                animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: n.delay }}
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C8CFF]"
              />
              <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
          ))}

          {/* Bottom label */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
            <div>
              <p className="text-xs font-medium text-white/80">Trusted by Global Clients</p>
              <p className="mt-0.5 text-[10px] text-white/40">Startups & enterprises worldwide</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold text-emerald-300">5+ Countries</span>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 bottom-5 h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_25px_8px_rgba(34,211,238,0.25)]" />
    </div>
  )
}
