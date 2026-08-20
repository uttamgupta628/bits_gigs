import {
  Globe2, ShoppingCart, Smartphone, Radio, Cloud,
  Compass, PenTool, Code2, ShieldCheck, Rocket,
  Target, Layers, MessageSquare, Heart, Users2,
  RefreshCw, Award, Clock3, HeartHandshake,
  Kanban, Palette, MessagesSquare, GitBranch, Package, FileStack,
} from 'lucide-react'

export const services = [
  {
    icon: Globe2,
    color: '#4F6BFF',
    title: 'Custom Web Application Development',
    short: 'Custom Web Development',
    points: ['React.js & Next.js frontends', 'Node.js, Express.js & Python (FastAPI) backends', 'RESTful API & GraphQL', 'Third-party integrations'],
  },
  {
    icon: ShoppingCart,
    color: '#22C55E',
    title: 'CMS & E-Commerce Solutions',
    short: 'CMS & E-Commerce',
    points: ['Shopify & WooCommerce', 'WordPress, Webflow, Wix', 'Payment gateway integration', 'Inventory & custom checkout'],
  },
  {
    icon: Smartphone,
    color: '#A855F7',
    title: 'Cross-Platform Mobile App Development',
    short: 'Mobile App Development',
    points: ['React Native & Flutter', 'Real-time & push notifications', 'Offline caching & sync', 'App Store & Play Store deployment'],
  },
  {
    icon: Radio,
    color: '#F97316',
    title: 'Media Streaming & Broadcast Platforms',
    short: 'Media & Streaming',
    points: ['Live streaming (HLS, low-latency)', 'Video-on-demand (VOD)', 'Cloud transcoding & CDN', 'Smart TV apps (Android TV, Apple TV, Fire TV)'],
  },
  {
    icon: Cloud,
    color: '#06B6D4',
    title: 'Cloud Infrastructure & DevOps',
    short: 'Cloud & DevOps',
    points: ['AWS (EC2, S3, CloudFront)', 'Supabase & MongoDB Atlas', 'Database clustering & tuning', 'SSL/TLS security hardening'],
  },
]

export const whyChooseUs = [
  {
    icon: Target,
    color: '#4F6BFF',
    title: 'Business First',
    desc: 'We focus on solving real business problems, not just writing code.',
  },
  {
    icon: Layers,
    color: '#22C55E',
    title: 'Scalable Solutions',
    desc: 'Our architecture is built to grow with your users and operations.',
  },
  {
    icon: MessageSquare,
    color: '#A855F7',
    title: 'Transparent Process',
    desc: 'Clear communication, predictable milestones and complete visibility.',
  },
  {
    icon: Heart,
    color: '#F97316',
    title: 'Long-Term Partnership',
    desc: 'We stay involved beyond launch with optimization and support.',
  },
]

export const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'React Native',
  'Flutter', 'WordPress', 'Shopify', 'AWS', 'MongoDB',
  'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'Stripe',
]

export const recentWork = [
  {
    tag: 'FinTech',
    tagColor: 'bg-indigo-500/90',
    title: 'WealthTrack Dashboard',
    description: 'A real-time analytics platform for financial insights and reporting.',
    tech: 'Next.js, Node.js, MongoDB, AWS',
    accent: '#4F6BFF',
    kind: 'fintech' as const,
  },
  {
    tag: 'E-Commerce',
    tagColor: 'bg-emerald-500/90',
    title: 'Trendify Store',
    description: 'Custom Shopify store with advanced filters, custom checkout & analytics.',
    tech: 'Shopify, Liquid, AWS',
    accent: '#22C55E',
    kind: 'ecommerce' as const,
  },
  {
    tag: 'Streaming',
    tagColor: 'bg-rose-500/90',
    title: 'StreamFlix TV App',
    description: 'Cross-platform streaming app with live TV, VOD & smart TV support.',
    tech: 'React Native, AWS, HLS, Fire TV SDK',
    accent: '#FF6B6B',
    kind: 'streaming' as const,
  },
]

/* =========================================================
   PORTFOLIO (Case studies page)
========================================================= */

export const portfolioFilters = ['All Projects', 'Web Development', 'Mobile Apps', 'E-Commerce', 'Streaming', 'SaaS', 'Dashboard']

export const portfolioProjects = [
  {
    category: ['Web Development', 'Dashboard'],
    tag: 'Dashboard',
    tagColor: 'bg-[#4F6BFF]',
    title: 'WealthTrack Dashboard',
    subtitle: 'Financial Analytics Platform',
    challenge: 'The client needed a centralized platform to track financial performance and generate real-time insights.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS', 'Chart.js', 'Tailwind CSS'],
    outcomes: ['60% faster report generation', 'Real-time data synchronization', 'Improved decision-making accuracy'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  },
  {
    category: ['E-Commerce', 'Web Development'],
    tag: 'E-Commerce',
    tagColor: 'bg-emerald-500',
    title: 'Trendify Store',
    subtitle: 'E-Commerce Platform',
    challenge: 'They needed a modern, fast, and conversion-focused store to boost online sales.',
    tech: ['Shopify', 'Liquid', 'AWS', 'Payment Gateway', 'Custom Theme'],
    outcomes: ['45% increase in conversion rate', '35% boost in average order value', 'Seamless shopping experience'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
  },
  {
    category: ['Streaming', 'Mobile Apps'],
    tag: 'Streaming',
    tagColor: 'bg-rose-500',
    title: 'StreamFlix TV App',
    subtitle: 'OTT Streaming Platform',
    challenge: 'The client wanted to launch an OTT platform with multi-device support and smooth streaming.',
    tech: ['React Native', 'Node.js', 'AWS S3', 'HLS', 'FFmpeg', 'Roku SDK'],
    outcomes: ['99.9% uptime achieved', 'Smooth streaming on all devices', 'High user engagement'],
    image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=1200&q=85',
  },
  {
    category: ['SaaS', 'Dashboard', 'Web Development'],
    tag: 'SaaS',
    tagColor: 'bg-amber-500',
    title: 'TaskFlow Management',
    subtitle: 'Project Management SaaS',
    challenge: 'They needed a powerful yet simple tool to manage projects, tasks, and team collaboration.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'AWS', 'Socket.io'],
    outcomes: ['50% improvement in team productivity', 'Real-time task updates', 'Centralized project visibility'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  },
  {
    category: ['Mobile Apps'],
    tag: 'Mobile App',
    tagColor: 'bg-purple-500',
    title: 'BinIQ Store Finder',
    subtitle: 'Bin Store Discovery Platform',
    challenge: 'Shoppers needed a fast way to discover and claim nearby bin stores with live inventory drops.',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Google Maps API'],
    outcomes: ['GPS-accurate store discovery', 'Streamlined store claim workflow', 'Bulk upload for 5,000+ stores'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    category: ['Web Development'],
    tag: 'Travel',
    tagColor: 'bg-sky-500',
    title: 'Traveleo',
    subtitle: 'Travel Booking Platform',
    challenge: 'The client wanted an immersive booking experience inspired by leading travel marketplaces.',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    outcomes: ['Multi-tab search widget', 'Cinematic hero storytelling', 'Higher on-site engagement'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85',
  },
]

export const portfolioHighlights = [
  { icon: Layers, value: 50, suffix: '+', label: 'Projects Delivered' },
  { icon: Users2, value: 30, suffix: '+', label: 'Happy Clients' },
]

/* =========================================================
   PROCESS PAGE
========================================================= */

export const processDetailed = [
  {
    icon: Compass,
    title: 'Discovery & Planning',
    desc: 'We understand your goals, business needs, and target audience to define the right strategy.',
    checklist: ['Requirement Analysis', 'Market & Competitor Research', 'Project Roadmap', 'Timeline & Estimation'],
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'We design intuitive, engaging, and user-centered experiences that align with your brand.',
    checklist: ['User Research', 'Wireframes & Prototypes', 'UI Design', 'Design System'],
  },
  {
    icon: Code2,
    title: 'Agile Development',
    desc: 'We build scalable, secure, and high-performance solutions using agile methodology.',
    checklist: ['Sprint Planning', 'Clean & Modular Code', 'Regular Updates', 'Continuous Integration'],
  },
  {
    icon: ShieldCheck,
    title: 'QA & Testing',
    desc: 'We ensure your product is bug-free, secure, and performs flawlessly across devices.',
    checklist: ['Functional Testing', 'Performance Testing', 'Security Testing', 'Cross-Browser Testing'],
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    desc: 'We launch your product seamlessly and ensure a smooth go-live experience.',
    checklist: ['Server & Environment Setup', 'Product Deployment', 'Monitoring & Support', 'Post-Launch Support'],
  },
]

export const processHighlights = [
  { icon: Users2, title: 'Client Collaboration', desc: "You're involved at every step with complete transparency." },
  { icon: RefreshCw, title: 'Agile & Flexible', desc: 'We adapt quickly to changes and deliver iteratively.' },
  { icon: Award, title: 'Quality Focused', desc: 'We follow best practices to ensure top-quality output.' },
  { icon: Clock3, title: 'Timely Delivery', desc: 'We value your time and always meet our commitments.' },
  { icon: HeartHandshake, title: 'Long-Term Support', desc: "Our relationship doesn't end at deployment." },
]

export const toolsMethodologies = [
  { icon: Kanban, label: 'Jira', color: '#2684FF' },
  { icon: FileStack, label: 'Confluence', color: '#2684FF' },
  { icon: Palette, label: 'Figma', color: '#A855F7' },
  { icon: MessagesSquare, label: 'Slack', color: '#22C55E' },
  { icon: GitBranch, label: 'GitHub', color: '#0f172a' },
  { icon: Package, label: 'Docker', color: '#06B6D4' },
  { icon: Cloud, label: 'AWS', color: '#F97316' },
]

export const process = [
  { icon: Compass, title: 'Discovery & Planning', desc: 'Understanding your business goals, audience & requirements.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Creating intuitive, engaging & pixel-perfect designs.' },
  { icon: Code2, title: 'Agile Development', desc: 'Building scalable & secure solutions in iterative sprints.' },
  { icon: ShieldCheck, title: 'QA & Testing', desc: 'Rigorous testing for performance, security & cross-platform.' },
  { icon: Rocket, title: 'Deployment & Support', desc: 'Smooth deployment and ongoing maintenance & support.' },
]

export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Countries Served' },
]

export const testimonials = [
  {
    quote: "Bits&Gigs delivered our platform on time with excellent quality. Their technical expertise and communication are outstanding.",
    name: 'James Carter',
    role: 'CEO, Fintech USA',
    country: 'United States',
    flag: '🇺🇸',
  },
  {
    quote: "A highly professional team that understood our vision and turned it into a scalable solution. Highly recommended!",
    name: 'Priya Sharma',
    role: 'Founder, Trendify Store',
    country: 'India',
    flag: '🇮🇳',
  },
  {
    quote: "Their agile process and transparent updates made the entire project smooth and successful. Great experience!",
    name: 'Lukas Meyer',
    role: 'CTO, StreamFlix',
    country: 'Germany',
    flag: '🇩🇪',
  },
  {
    quote: "Clear timelines, clean code, zero surprises. Our platform finally scales the way it should during peak traffic.",
    name: 'Daniel Osei',
    role: 'CTO, MediaStream',
    country: 'United Kingdom',
    flag: '🇬🇧',
  },
]

export const trustedLogos = ['Clutch', 'GoodFirms', 'Upwork', 'Google']

/* =========================================================
   TESTIMONIALS / TRUST PAGE
========================================================= */

export const trustStats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Countries Served' },
]

export const commitments = [
  { icon: Clock3, title: 'On-Time Delivery', desc: 'We value your time and deliver on our promises.' },
  { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Industry best practices for security & quality.' },
  { icon: RefreshCw, title: 'Agile & Transparent', desc: "You're always in the loop with full transparency." },
  { icon: HeartHandshake, title: 'Long-Term Partnership', desc: 'We build lasting relationships, not just projects.' },
]

export const trustedClients = ['Fintech USA', 'Trendify Store', 'StreamFlix', 'TechNova', 'InnoSoft', 'NextGen']

export const reviewPlatforms = [
  { name: 'Clutch', rating: '5.0', meta: '10+ Reviews' },
  { name: 'GoodFirms', rating: '', meta: 'Top Web Developers India' },
  { name: 'Upwork', rating: '', meta: 'Top Rated Plus · 100% Job Success' },
  { name: 'Google', rating: '5.0', meta: '20+ Reviews' },
]
