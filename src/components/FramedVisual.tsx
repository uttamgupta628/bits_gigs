import { motion } from 'framer-motion'
import { CheckCircle2, type LucideIcon } from 'lucide-react'

interface FloatCard {
  icon: LucideIcon
  title: string
  subtitle: string
  position: 'top-right' | 'bottom-left'
}

interface FramedVisualProps {
  image: string
  alt: string
  eyebrow: string
  heading: string
  caption: string
  floatCards?: FloatCard[]
}

export default function FramedVisual({ image, alt, eyebrow, heading, caption, floatCards = [] }: FramedVisualProps) {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <div className="absolute -inset-10 rounded-[50px] bg-[#4F6BFF]/20 blur-[90px]" />
      <div className="absolute -inset-4 rounded-[42px] border border-[#4F6BFF]/20" />
      <div className="absolute -inset-8 rounded-[50px] border border-[#22D3EE]/10" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11162a] shadow-[0_35px_100px_-25px_rgba(0,0,0,0.8)]"
      >
        <img src={image} alt={alt} className="h-[300px] sm:h-[380px] w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b16]/95 via-[#080b16]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F6BFF]/20 via-transparent to-[#22D3EE]/10 mix-blend-screen" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span className="text-xs font-medium text-white/80">{eyebrow}</span>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/60">LIVE</span>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="max-w-[330px]">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{heading}</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/60">{caption}</p>
          </div>
        </div>
      </motion.div>

      {floatCards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, x: card.position === 'top-right' ? 30 : -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
          className={
            card.position === 'top-right'
              ? 'absolute -right-3 sm:-right-8 top-14 rounded-2xl border border-white/10 bg-[#10152a]/90 px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl'
              : 'absolute -left-3 sm:-left-8 bottom-10 rounded-2xl border border-white/10 bg-[#10152a]/90 px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl'
          }
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F6BFF]/15">
              <card.icon className="h-4.5 w-4.5 text-[#7C8CFF]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">{card.subtitle}</p>
              <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                {card.title}
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute -right-2 bottom-5 h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_25px_8px_rgba(34,211,238,0.25)]" />
    </div>
  )
}
