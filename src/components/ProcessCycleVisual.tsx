import { motion } from 'framer-motion'
import { Search, PenTool, Code2, ShieldCheck, Rocket, BarChart3 } from 'lucide-react'

const nodes = [
  { icon: Search, color: '#4F6BFF', angle: -90 },
  { icon: PenTool, color: '#22C55E', angle: -18 },
  { icon: Code2, color: '#A855F7', angle: 54 },
  { icon: ShieldCheck, color: '#F97316', angle: 126 },
  { icon: Rocket, color: '#4F6BFF', angle: 198 },
]

export default function ProcessCycleVisual() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <div className="absolute -inset-10 rounded-[50px] bg-[#4F6BFF]/20 blur-[90px]" />

      <div className="relative flex h-[340px] items-center justify-center sm:h-[420px]">
        {/* Orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute h-[280px] w-[280px] rounded-full border-2 border-dashed border-[#4F6BFF]/25 sm:h-[340px] sm:w-[340px]"
        />
        <div className="absolute h-[280px] w-[280px] rounded-full border border-white/5 sm:h-[340px] sm:w-[340px]" />

        {/* Center card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex h-[168px] w-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-[#11162a] p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:h-[188px] sm:w-[250px]"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">Project Dashboard</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-end gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 4 }}
                animate={{ height: h * 0.7 }}
                transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                className="w-full rounded-t-sm bg-gradient-to-t from-[#4F6BFF] to-[#7C8CFF]"
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
            <BarChart3 className="h-3.5 w-3.5" />
            +73% progress
          </div>
        </motion.div>

        {/* Orbiting icon nodes */}
        {nodes.map((n, i) => {
          const radius = 150
          const rad = (n.angle * Math.PI) / 180
          const x = Math.cos(rad) * radius
          const y = Math.sin(rad) * radius
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#10152a] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)]"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${n.color}22` }}
              >
                <n.icon className="h-4.5 w-4.5" style={{ color: n.color }} />
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <div className="absolute -right-2 bottom-5 h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_25px_8px_rgba(34,211,238,0.25)]" />
    </div>
  )
}
