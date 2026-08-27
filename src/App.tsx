import { motion } from 'framer-motion'
import './App.css'

const navTabs = [
  { id: 'about', label: 'about.md' },
  { id: 'projects', label: 'projects/' },
  { id: 'timeline', label: 'timeline.log' },
  { id: 'skills', label: 'skills.json' },
  { id: 'languages', label: 'locale -a' },
  { id: 'contact', label: 'contact' },
]

const projects = [
  {
    path: 'asd-eye-tracking/',
    flag: '--research',
    description:
      'Machine-learning pipeline for ASD classification from eye-tracking data: careful feature handling, model comparison, reproducible analysis. Subject of my BSc thesis.',
    tags: ['python', 'scikit-learn', 'eye-tracking', 'research'],
    href: 'https://github.com/frigori/ASD-Classification-With-ET-Data',
  },
  {
    path: 'genai-procurement/',
    flag: '--prototype',
    description:
      'Using GenAI to explore, summarize and reason over public procurement documents and decision workflows.',
    tags: ['genai', 'rag', 'nlp', 'product'],
    href: 'https://github.com/ppguidotti/smart-tender-assistant',
  },
  {
    path: 'home-lab/',
    flag: '--infra',
    description:
      'Personal lab for Linux services, rootless containers, reverse proxies and local-first AI tooling.',
    tags: ['linux', 'podman', 'networking', 'automation'],
    href: null,
  },
  {
    path: 'portfolio-cv/',
    flag: '--web',
    description:
      'Public-safe portfolio and CV publishing workflow, reusable content blocks and variant-aware exports.',
    tags: ['react', 'tailwind', 'gh-pages', 'ci'],
    href: 'https://github.com/frigori/frigori.github.io',
  },
]

const timeline = [
  {
    tag: '[NOW]',
    title: 'MSc in Artificial Intelligence — Admitted',
    place: 'University of Bologna',
    detail: 'Admitted to the two-year Master’s programme, starting A.Y. 2026/2027.',
  },
  {
    tag: '[GRAD]',
    title: 'BSc in Computer Engineering',
    place: 'University of Bologna · Final grade 94/110',
    detail:
      'Thesis: Autism Spectrum Disorder Detection via Eye Tracking Data using Machine Learning.',
  },
  {
    tag: '[ERASMUS]',
    title: 'Research project in France',
    place: 'Université de Tours, France',
    detail: 'Worked across international study and research contexts, strengthening technical autonomy and communication.',
  },
  {
    tag: '[SPRINT]',
    title: 'BOOM GenAI Challenge',
    place: 'VEM Sistemi · GenAI Project Team',
    detail: 'Explored applied GenAI ideas for document-heavy industry workflows and public procurement analysis.',
  },
]

const skillGroups = [
  { key: 'AI_ML', label: 'AI / ML', skills: ['Python', 'scikit-learn', 'data analysis', 'model evaluation', 'NLP basics'] },
  { key: 'SOFTWARE', label: 'Software', skills: ['TypeScript', 'React', 'Git', 'Linux', 'automation'] },
  { key: 'SYSTEMS', label: 'Systems', skills: ['Docker', 'Podman', 'self-hosting', 'reverse proxy', 'networking'] },
  { key: 'WORKFLOW', label: 'Workflow', skills: ['Markdown', 'GitHub Actions', 'technical writing', 'reproducibility'] },
]

const languages = [
  { code: 'IT', name: 'Italian', level: 'native', detail: null },
  { code: 'EN', name: 'English', level: 'C1', detail: 'Duolingo 130/160 · CLA C1, UniBo · Cambridge FCE B2 (178/190)' },
  { code: 'FR', name: 'French', level: 'B1/B2', detail: 'CLA B1, UniBo · B2/C1 coursework at Université de Tours' },
]

const contactLinks = [
  { key: 'github', href: 'https://github.com/frigori', value: 'github.com/frigori' },
  { key: 'linkedin', href: 'https://www.linkedin.com/in/mattia-giovannini-07114a1a0/', value: 'linkedin.com/in/mattia-giovannini' },
  { key: 'email', href: 'mailto:mattia.giovannini.business@gmail.com', value: 'mattia.giovannini.business@gmail.com' },
]

function App() {
  return (
    <main className="min-h-screen bg-[var(--bg)] font-mono text-[var(--ink)] selection:bg-[var(--amber)] selection:text-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-5 sm:px-6">
        <div className="flex items-center gap-3 border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--amber)]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--dim)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--dim)]" />
          <span className="ml-2 text-xs text-[var(--sub)]">mattia@bologna: ~/portfolio</span>
        </div>

        <nav className="flex overflow-x-auto border border-t-0 border-[var(--line)] bg-[var(--bg)] text-sm">
          {navTabs.map((tab, i) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`whitespace-nowrap border-r border-[var(--line)] px-4 py-2.5 text-[var(--sub)] transition hover:text-[var(--ink)] ${i === 0 ? 'bg-[var(--panel)] text-[var(--amber)]' : ''}`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <div className="border border-[var(--line)] px-4 py-10 sm:px-8 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 md:grid-cols-[1.3fr_1fr]"
          >
            <div>
              <p className="text-sm text-[var(--dim)]">
                <span className="text-[var(--amber)]">mattia@bologna</span>:~$ whoami
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Mattia Giovannini
                <span className="cursor-blink ml-1 inline-block h-[0.9em] w-[0.5em] translate-y-[0.12em] bg-[var(--amber)] align-middle" />
              </p>

              <div className="mt-8 font-sans">
                <h1 className="text-xl leading-snug text-[var(--ink)] sm:text-2xl">
                  <span className="text-[var(--amber)]">#</span> Building practical AI &amp; software systems, with research-grade care.
                </h1>
                <p className="mt-4 max-w-xl border-l-2 border-[var(--amber)] pl-4 text-base leading-7 text-[var(--sub)]">
                  Computer Engineering graduate from the University of Bologna, admitted to the MSc in Artificial Intelligence at the same university. I work on applied machine learning, GenAI prototypes and self-hosted systems that turn ideas into usable tools.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="#projects"
                  className="border border-[var(--amber)] bg-[var(--amber)] px-4 py-2.5 font-semibold text-[var(--bg)] transition hover:bg-transparent hover:text-[var(--amber)]"
                >
                  [view projects]
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--amber)] px-4 py-2.5 font-semibold text-[var(--amber)] transition hover:bg-[var(--amber)] hover:text-[var(--bg)]"
                >
                  [download cv]
                </a>
              </div>
            </div>

            <aside className="border border-[var(--line)] bg-[var(--panel)] p-5 text-sm">
              <p className="text-[var(--dim)]">--- neofetch: status ---</p>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2.5">
                <StatusRow label="university" value="Alma Mater Studiorum · UniBo" />
                <StatusRow label="degree" value="BSc Comp. Eng. (94/110)" />
                <StatusRow label="next" value="MSc AI, 2026–2028" />
                <StatusRow label="location" value="Bologna, Italy" />
                <StatusRow label="focus" value="AI/ML, web, infra" />
              </dl>
              <p className="mt-4 border-t border-dashed border-[var(--line)] pt-4 font-sans leading-6 text-[var(--sub)]">
                Looking for opportunities where rigorous engineering, practical AI and product sense meet.
              </p>
            </aside>
          </motion.div>

          <Section id="about" command="cat about.md">
            <div className="grid gap-6 font-sans md:grid-cols-[2fr_1fr]">
              <p className="leading-7 text-[var(--sub)]">
                I like projects where software, data and infrastructure touch the real world: models that can be evaluated, interfaces that can be used, and deployments that can be maintained. Recent work spans ASD detection from eye-tracking data, GenAI for document analysis and self-hosted services.
              </p>
              <p className="border-l-2 border-[var(--amber)] pl-4 leading-7 text-[var(--sub)]">
                Reproducible experiments, clear interfaces, small reliable systems, and documentation that survives after the demo.
              </p>
            </div>
          </Section>

          <Section id="projects" command="ls -la projects/">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.path}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.06 }}
                >
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block border border-[var(--line)] bg-[var(--panel)] p-5 transition hover:border-[var(--amber)]"
                    >
                      <ProjectCardBody project={project} />
                    </a>
                  ) : (
                    <div className="block border border-[var(--line)] bg-[var(--panel)] p-5">
                      <ProjectCardBody project={project} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="timeline" command="cat timeline.log">
            <div className="border border-[var(--line)]">
              {timeline.map((item, i) => (
                <div
                  key={item.title}
                  className={`grid gap-1 p-5 sm:grid-cols-[8rem_1fr] ${i > 0 ? 'border-t border-[var(--line)]' : ''}`}
                >
                  <p className="text-sm text-[var(--amber)]">{item.tag}</p>
                  <div className="font-sans">
                    <h3 className="text-base text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-0.5 text-xs text-[var(--dim)]">{item.place}</p>
                    <p className="mt-2 leading-6 text-[var(--sub)]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" command="which skills">
            <div className="border border-[var(--line)] p-5 sm:p-6">
              {skillGroups.map((group, i) => (
                <div key={group.key} className={i > 0 ? 'mt-5' : ''}>
                  <p className="text-sm">
                    <span className="text-[var(--amber)]">{group.key}</span>
                    <span className="text-[var(--dim)]">=({group.label.toLowerCase()})</span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="border border-[var(--line)] bg-[var(--panel)] px-2.5 py-1 text-xs text-[var(--sub)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="languages" command="locale -a">
            <div className="border border-[var(--line)]">
              {languages.map((lang, i) => (
                <div
                  key={lang.code}
                  className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 px-5 py-4 text-sm ${i > 0 ? 'border-t border-[var(--line)]' : ''}`}
                >
                  <span className="w-8 shrink-0 text-[var(--amber)]">{lang.code}</span>
                  <span className="text-[var(--ink)]">{lang.name}</span>
                  <span className="text-[var(--dim)]">·</span>
                  <span className="text-[var(--sub)]">{lang.level}</span>
                  {lang.detail && (
                    <span className="w-full font-sans text-xs text-[var(--dim)] sm:ml-8 sm:w-auto">{lang.detail}</span>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" command="mail -s contact">
            <div className="border border-[var(--line)]">
              {contactLinks.map((link, i) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={`flex flex-wrap items-center gap-2 px-5 py-4 text-sm transition hover:bg-[var(--panel)] ${i > 0 ? 'border-t border-[var(--line)]' : ''}`}
                >
                  <span className="w-24 shrink-0 text-[var(--amber)]">{link.key}</span>
                  <span className="text-[var(--dim)]">→</span>
                  <span className="text-[var(--ink)]">{link.value}</span>
                </a>
              ))}
            </div>
          </Section>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-2 border border-[var(--line)] border-t-2 border-t-[var(--amber)] bg-[var(--panel)] px-4 py-2 text-xs text-[var(--dim)]">
            <span>
              <span className="bg-[var(--amber)] px-2 py-0.5 font-bold text-[var(--bg)]">NORMAL</span>{' '}
              <span className="ml-2">mattia-portfolio</span>
            </span>
            <span className="hidden sm:inline">main*</span>
            <span className="hidden sm:inline">utf-8</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({ id, command, children }: { id: string; command: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-12">
      <p className="mb-5 text-sm text-[var(--dim)]">
        <span className="text-[var(--amber)]">$</span> {command}
      </p>
      {children}
    </section>
  )
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-[var(--dim)]">{label}</dt>
      <dd className="text-[var(--ink)]">{value}</dd>
    </>
  )
}

function ProjectCardBody({ project }: { project: (typeof projects)[number] }) {
  return (
    <>
      <p className="text-sm">
        <span className="text-[var(--amber)]">{project.path}</span>{' '}
        <span className="text-[var(--dim)]">{project.flag}</span>
        {project.href && <span className="ml-1 text-[var(--dim)]">↗</span>}
      </p>
      <p className="mt-3 font-sans text-[0.92rem] leading-6 text-[var(--sub)]">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[var(--sub)]">
            <span className="text-[var(--dim)]">#</span>{tag}
          </span>
        ))}
      </div>
    </>
  )
}

export default App
