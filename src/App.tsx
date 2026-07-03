import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Network,
  Sparkles,
  Terminal,
} from 'lucide-react'
import './App.css'

const navItems = ['about', 'projects', 'timeline', 'skills', 'contact']

const projects = [
  {
    title: 'ASD Eye-Tracking Classification',
    eyebrow: 'Applied ML · Research',
    description:
      'Machine-learning pipeline for ASD classification from eye-tracking data, focused on careful feature handling, model comparison and reproducible analysis.',
    tags: ['Python', 'scikit-learn', 'Eye tracking', 'Research'],
    icon: BrainCircuit,
  },
  {
    title: 'GenAI Procurement Analyzer',
    eyebrow: 'Industry innovation sprint',
    description:
      'Prototype direction for using GenAI to explore, summarize and reason over public procurement documents and decision workflows.',
    tags: ['GenAI', 'RAG', 'NLP', 'Product thinking'],
    icon: Sparkles,
  },
  {
    title: 'Self-hosted AI / Home Server Lab',
    eyebrow: 'Systems · Infrastructure',
    description:
      'Personal lab for Linux services, rootless containers, reverse proxies and local-first AI tooling, designed around practical reliability.',
    tags: ['Linux', 'Podman', 'Networking', 'Automation'],
    icon: Network,
  },
  {
    title: 'Portfolio & CV Automation',
    eyebrow: 'Web · Documentation',
    description:
      'Public-safe portfolio and CV publishing workflow with GitHub Pages, reusable content blocks and variant-aware exports.',
    tags: ['React', 'Tailwind', 'GitHub Pages', 'CI'],
    icon: Code2,
  },
]

const timeline = [
  {
    period: 'Now',
    title: 'BSc Computer Engineering',
    place: 'University of Bologna',
    detail:
      'Completing the degree while focusing on AI/ML, software systems and practical engineering workflows.',
  },
  {
    period: 'Erasmus',
    title: 'Research project in France',
    place: 'Tours, France',
    detail:
      'Worked across international study and research contexts, strengthening technical autonomy and communication.',
  },
  {
    period: 'Innovation sprint',
    title: 'GenAI challenge',
    place: 'BOOM / CRIF / VEM context',
    detail:
      'Explored applied GenAI ideas for document-heavy industry workflows and public procurement analysis.',
  },
]

const skillGroups = [
  ['AI / ML', ['Python', 'scikit-learn', 'data analysis', 'model evaluation', 'NLP basics']],
  ['Software', ['TypeScript', 'React', 'Git', 'Linux', 'automation']],
  ['Systems', ['Docker', 'Podman', 'self-hosting', 'reverse proxy', 'networking']],
  ['Workflow', ['Markdown', 'GitHub Actions', 'technical writing', 'reproducibility']],
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-mono text-sm font-semibold tracking-[0.3em] text-cyan-200">
            MG<span className="text-violet-300">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="capitalize transition hover:text-cyan-200">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-100"
          >
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-20 md:grid-cols-[1.25fr_.75fr] md:pb-28 md:pt-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Terminal className="h-4 w-4" /> Computer Engineering · AI/ML · Software systems
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Building practical AI and software systems with research-grade care.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I’m Mattia Giovannini, a Computer Engineering student at the University of Bologna. I work on applied machine learning, GenAI prototypes and self-hosted systems that turn ideas into usable tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200" href="#projects">
              View projects <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:border-violet-300/80" href="#contact">
              CV coming soon
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Currently</p>
                <h2 className="text-2xl font-bold text-white">Finishing BSc</h2>
              </div>
              <Moon className="h-6 w-6 text-violet-300" />
            </div>
            <div className="space-y-4">
              <InfoLine icon={GraduationCap} label="University" value="Alma Mater Studiorum · UniBo" />
              <InfoLine icon={MapPin} label="Base" value="Bologna, Italy" />
              <InfoLine icon={Cpu} label="Focus" value="AI/ML, web tools, local infrastructure" />
            </div>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-cyan-300/15 to-violet-300/15 p-4 text-sm leading-6 text-slate-200">
              Looking for opportunities where rigorous engineering, practical AI and product sense meet.
            </div>
          </div>
        </motion.aside>
      </section>

      <Section id="about" eyebrow="About" title="A technical profile with a practical bias.">
        <div className="grid gap-5 text-slate-300 md:grid-cols-3">
          <p className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 leading-8 md:col-span-2">
            I like projects where software, data and infrastructure touch the real world: models that can be evaluated, interfaces that can be used, and deployments that can be maintained. Recent work spans ASD detection from eye-tracking data, GenAI for document analysis and self-hosted services.
          </p>
          <div className="rounded-3xl border border-white/10 bg-cyan-300/10 p-6">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-cyan-200">Principles</p>
            <p className="mt-4 leading-8">Reproducible experiments, clear interfaces, small reliable systems, and documentation that survives after the demo.</p>
          </div>
        </div>
      </Section>

      <Section id="projects" eyebrow="Featured projects" title="Four projects that tell the story.">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <project.icon className="mb-6 h-8 w-8 text-cyan-200" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-200">{project.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="timeline" eyebrow="Path" title="Study, research and applied experiments.">
        <div className="space-y-4">
          {timeline.map((item) => (
            <div key={item.title} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[10rem_1fr]">
              <p className="font-mono text-sm text-cyan-200">{item.period}</p>
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-violet-200">{item.place}</p>
                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Toolkit" title="A compact stack for AI, software and systems.">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map(([group, skills]) => (
            <div key={group as string} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold text-white">{group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {(skills as string[]).map((skill) => (
                  <span key={skill} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s build something useful.">
        <div className="flex flex-wrap gap-3">
          <ContactLink icon={Code2} label="GitHub" href="https://github.com/frigori" />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-slate-300">
            <Network className="h-4 w-4" /> LinkedIn soon
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-slate-300">
            <Mail className="h-4 w-4" /> Email on request
          </span>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Mattia Giovannini · Built with React, Vite, Tailwind CSS and Framer Motion.
      </footer>
    </main>
  )
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}

function InfoLine({ icon: Icon, label, value }: { icon: typeof GraduationCap; label: string; value: string }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
        <p className="mt-1 text-sm text-slate-200">{value}</p>
      </div>
    </div>
  )
}

function ContactLink({ icon: Icon, label, href }: { icon: typeof Code2; label: string; href: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-100">
      <Icon className="h-4 w-4" /> {label}
    </a>
  )
}

export default App
