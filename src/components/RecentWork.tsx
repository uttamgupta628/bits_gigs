import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react'

const recentWork = [
  {
    title: 'Fintech Analytics',
    tag: 'Fintech',
    tagColor: 'bg-[#4F6BFF]',
    description:
      'A modern financial analytics platform built for real-time insights, portfolio tracking, and smarter decision making.',
    tech: 'React • Node.js • PostgreSQL',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
  },

  {
    title: 'E-commerce Platform',
    tag: 'E-commerce',
    tagColor: 'bg-emerald-500',
    description:
      'A clean and conversion-focused shopping experience with product discovery, responsive layouts, and seamless checkout.',
    tech: 'React • Node.js • MongoDB',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
  },

  {
    title: 'Streaming Platform',
    tag: 'Streaming',
    tagColor: 'bg-rose-500',
    description:
      'A cinematic entertainment platform focused on content discovery, personalized experiences, and responsive design.',
    tech: 'React • Express • MongoDB',
    image:
      'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=1400&q=85',
  },
]

const MotionLink = motion(Link)

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

/* =========================================================
   RECENT WORK
========================================================= */

export default function RecentWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#080b14] py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-field absolute inset-0 opacity-40" />
      </div>

      {/* Left ambient glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-[#4F6BFF]/10
          blur-[120px]
        "
      />

      {/* Right ambient glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-cyan-400/5
          blur-[120px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-100px',
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          {/* Heading */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3">
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#7C8CFF]
                  shadow-[0_0_15px_#7C8CFF]
                "
              />

              <span
                className="
                  font-mono
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#7C8CFF]
                "
              >
                Case Studies
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-4
                font-display
                text-4xl
                font-semibold
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              Our Recent{' '}

              <span className="text-gradient">
                Work
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
              "
            >
              Digital products designed to look exceptional,
              perform flawlessly, and create measurable impact.
            </p>
          </div>

          {/* View all button */}
          <MotionLink
            to="/portfolio"
            whileHover={{
              scale: 1.04,
              x: 3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              inline-flex
              items-center
              gap-2
              self-start
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              hover:border-[#4F6BFF]/40
              hover:bg-[#4F6BFF]/10
              sm:self-auto
            "
          >
            View All Projects

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </MotionLink>
        </motion.div>

        {/* ===================================================
            PROJECT CARDS
        ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
          }}
          className="
            mt-14
            grid
            gap-7
            md:grid-cols-3
          "
        >
          {recentWork.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative"
            >
              {/* =================================================
                  OUTER GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-[1px]
                  rounded-[22px]
                  bg-gradient-to-r
                  from-[#4F6BFF]/0
                  via-[#4F6BFF]/40
                  to-cyan-400/0
                  opacity-0
                  blur-sm
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  CARD
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/10
                  bg-[#0d1220]
                  shadow-[0_15px_50px_rgba(0,0,0,.25)]
                  transition-all
                  duration-500
                  group-hover:border-white/20
                  group-hover:shadow-[0_30px_80px_rgba(0,0,0,.45)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-60
                    overflow-hidden
                    bg-[#080b14]
                  "
                >
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                    whileHover={{
                      scale: 1.07,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                  />

                  {/* Dark overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#080b14]
                      via-[#080b14]/20
                      to-transparent
                    "
                  />

                  {/* Glass reflection */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-white/[0.12]
                      via-transparent
                      to-transparent
                      opacity-60
                    "
                  />

                  {/* Project number */}
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      px-3
                      py-1.5
                      font-mono
                      text-[10px]
                      font-medium
                      tracking-widest
                      text-white/70
                      backdrop-blur-xl
                    "
                  >
                    0{index + 1}
                  </div>

                  {/* Tag */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    className={`
                      absolute
                      left-4
                      top-4
                      rounded-full
                      border
                      border-white/20
                      ${project.tagColor}
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                      shadow-xl
                      backdrop-blur-md
                    `}
                  >
                    {project.tag}
                  </motion.div>

                  {/* =================================================
                      HOVER VIEW PROJECT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/25
                      opacity-0
                      backdrop-blur-[2px]
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <motion.div
                      initial={{
                        y: 15,
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-black/50
                        px-5
                        py-2.5
                        text-xs
                        font-semibold
                        text-white
                        shadow-2xl
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                      "
                    >
                      <Sparkles
                        className="
                          h-3.5
                          w-3.5
                          text-[#7C8CFF]
                        "
                      />

                      View Project

                      <ExternalLink
                        className="
                          h-3.5
                          w-3.5
                        "
                      />
                    </motion.div>
                  </div>

                  {/* Bottom gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-20
                      bg-gradient-to-t
                      from-[#0d1220]
                      to-transparent
                    "
                  />
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div className="p-6">
                  {/* Title + arrow */}
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <h3
                      className="
                        font-display
                        text-xl
                        font-semibold
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#aeb8ff]
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Arrow circle */}
                    <motion.div
                      whileHover={{
                        rotate: -45,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-white
                        transition-all
                        duration-300
                        group-hover:border-[#4F6BFF]
                        group-hover:bg-[#4F6BFF]
                        group-hover:shadow-[0_0_25px_rgba(79,107,255,.35)]
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-400
                    "
                  >
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="
                      mt-6
                      h-px
                      w-full
                      bg-white/[0.07]
                    "
                  />

                  {/* Tech */}
                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-slate-500
                      "
                    >
                      {project.tech}
                    </span>

                    {/* Animated line */}
                    <div
                      className="
                        h-px
                        w-3
                        shrink-0
                        bg-gradient-to-r
                        from-[#4F6BFF]
                        to-cyan-400
                        transition-all
                        duration-300
                        group-hover:w-8
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ===================================================
            BOTTOM DIVIDER
        ==================================================== */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: '100%',
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
          }}
          className="
            mt-16
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* Bottom metadata */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-slate-600
            "
          >
            Selected work
          </span>

          <span
            className="
              font-mono
              text-[10px]
              text-slate-600
            "
          >
            2025 — 2026
          </span>
        </motion.div>
      </div>
    </section>
  )
}