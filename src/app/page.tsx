const EMAIL = "cgustavoestay@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/gustavo-estay-267a7371";
const GITHUB = "https://github.com/GustavoEstay";

const focus = [
  {
    title: "AI-native engineering",
    body: "For the last 2 years AI has been part of how I build: designing, coding, testing and reviewing with AI tools, so I can move faster and take on more of the stack.",
  },
  {
    title: "AI features in products",
    body: "LLM features that do real work: tool calling, streamed UI, typed contracts, guardrails and a human in the loop before anything irreversible happens.",
  },
  {
    title: "Frontend at scale",
    body: "5 years of React and TypeScript in production at Mercado Libre: platform-level architecture, shared components and data contracts across teams.",
  },
  {
    title: "Beyond the frontend",
    body: "APIs and route handlers in Node.js, validation, rate limiting, tests, CI pipelines and deploys. I own features end to end, not just screens.",
  },
];

const stats = [
  { value: "246", label: "merged PRs" },
  { value: "612", label: "code reviews" },
  { value: "1,800+", label: "contributions since 2023" },
];

const experience = [
  {
    when: "2024 to now",
    what: "AI-driven engineering",
    detail:
      "Building with LLMs and AI tooling day to day, and designing AI features into products.",
  },
  {
    when: "2021 to now",
    what: "Software Engineer · Mercado Libre",
    detail:
      "Frontend platform work on one of Latin America's largest commerce products, in React and TypeScript.",
  },
  {
    when: "Before",
    what: "Environmental consultant & scientist",
    detail:
      "About six years working with messy data and explaining it to people outside the field.",
  },
];

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "LLMs & tool calling",
  "Prompt engineering",
  "AI coding tools",
  "Tailwind CSS",
  "Zustand",
  "TanStack Query",
  "Vercel AI SDK",
  "Gemini",
  "Zod",
  "Vitest",
  "Playwright",
  "Storybook",
  "GitHub Actions",
];

const paypilot = {
  name: "PayPilot",
  tagline: "A payments dashboard with an AI copilot that can analyze, filter and act.",
  points: [
    "Streaming copilot that calls typed tools and renders charts, filters and confirmation cards inside the chat.",
    "Explains sales drops, filters rejected payments and proposes refunds that only run after an explicit human click.",
    "Provider abstraction: deterministic mock model by default, Gemini with one env var.",
    "Rate limiting, token caps and input validation on the chat route. 34 unit tests and Playwright E2E in CI.",
  ],
  tags: ["Next.js 15", "React 19", "AI SDK", "Gemini", "Zustand", "TanStack Query", "Playwright"],
  live: "https://paypilot-olive.vercel.app",
  repo: "https://github.com/GustavoEstay/PayPilot",
};

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{children}</h2>;
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-mono text-sm text-zinc-400">gustavo.estay</span>
        <nav aria-label="Main" className="flex gap-5 text-sm text-zinc-400">
          <a className="hover:text-white" href="#work">
            Work
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-6">
        <section className="pt-16 pb-24 sm:pt-28">
          <p className="font-mono text-sm text-accent">Software Engineer · AI-native</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl">
            Gustavo Estay is a software engineer who builds with AI, from the interface to the API.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Software Engineer at Mercado Libre. 5 years shipping production frontends in React and
            TypeScript, and the last 2 years using AI to design, build and ship across the whole
            stack.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See PayPilot
            </a>
            <a
              href={LINKEDIN}
              className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section aria-label="Work in numbers" className="border-t border-zinc-800 py-14">
          <dl className="grid grid-cols-3 gap-6">
            {stats.map((st) => (
              <div key={st.label}>
                <dt className="sr-only">{st.label}</dt>
                <dd className="text-3xl font-semibold text-white sm:text-5xl">{st.value}</dd>
                <dd className="mt-2 text-sm text-zinc-400">{st.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-zinc-500">
            In private company repositories at Mercado Libre, so they don&apos;t show on my public
            GitHub.
          </p>
        </section>

        <section aria-labelledby="focus" className="border-t border-zinc-800 py-20">
          <div id="focus">
            <SectionLabel>What I do</SectionLabel>
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {focus.map((f) => (
              <div key={f.title}>
                <h3 className="text-lg font-medium text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-8 border-t border-zinc-800 py-20">
          <SectionLabel>Selected work</SectionLabel>
          <article className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-3xl font-semibold text-white">{paypilot.name}</h3>
              <div className="flex gap-4 text-sm">
                <a
                  href={paypilot.live}
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  Live demo <Arrow />
                </a>
                <a
                  href={paypilot.repo}
                  className="inline-flex items-center gap-1 text-zinc-300 hover:underline"
                >
                  Code <Arrow />
                </a>
              </div>
            </div>
            <p className="mt-3 text-lg text-zinc-300">{paypilot.tagline}</p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-400">
              {paypilot.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {p}
                </li>
              ))}
            </ul>
            <ul aria-label="Built with" className="mt-7 flex flex-wrap gap-2">
              {paypilot.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-zinc-700 px-3 py-1 font-mono text-xs text-zinc-300"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-zinc-500">All data in the demo is simulated.</p>
          </article>
        </section>

        <section id="about" className="scroll-mt-8 border-t border-zinc-800 py-20">
          <SectionLabel>About</SectionLabel>
          <div className="mt-10 grid gap-12 sm:grid-cols-[3fr_2fr]">
            <div className="space-y-5 text-zinc-300">
              <p>
                I&apos;m a Software Engineer at Mercado Libre, where I&apos;ve spent 5 years
                building frontend at scale. My core is React and TypeScript, and I care about
                architecture that lets many teams ship into one product without breaking it.
              </p>
              <p>
                Over the last 2 years AI changed how I work. I use it to explore, build, test and
                review, which lets me go well beyond the frontend: APIs, data, pipelines and AI
                features themselves. I treat it as an engineering tool, with the same standards for
                types, tests and review.
              </p>
              <p>
                Before software I was an environmental consultant and scientist. Outside code
                I&apos;m a musical theatre performer, which is probably why I care so much about how
                an interface feels.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">Stack</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-zinc-800/70 px-2.5 py-1 text-sm text-zinc-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-zinc-500">
                Based in Córdoba, Argentina · English & Spanish
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="exp" className="border-t border-zinc-800 py-20">
          <div id="exp">
            <SectionLabel>Experience</SectionLabel>
          </div>
          <ol className="mt-10 space-y-8">
            {experience.map((e) => (
              <li key={e.what} className="grid gap-2 sm:grid-cols-[10rem_1fr]">
                <span className="font-mono text-sm text-zinc-500">{e.when}</span>
                <div>
                  <h3 className="text-lg font-medium text-white">{e.what}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{e.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="scroll-mt-8 border-t border-zinc-800 py-20">
          <SectionLabel>Contact</SectionLabel>
          <p className="mt-8 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s talk.</p>
          <ul className="mt-8 flex flex-col gap-3 text-lg sm:flex-row sm:gap-8">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                {EMAIL} <Arrow />
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN}
                className="inline-flex items-center gap-1.5 text-zinc-200 hover:underline"
              >
                LinkedIn <Arrow />
              </a>
            </li>
            <li>
              <a
                href={GITHUB}
                className="inline-flex items-center gap-1.5 text-zinc-200 hover:underline"
              >
                GitHub <Arrow />
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="relative mx-auto max-w-5xl border-t border-zinc-800 px-6 py-8 text-xs text-zinc-500">
        © {new Date().getFullYear()} Gustavo Estay · Built with Next.js and Tailwind CSS
      </footer>
    </div>
  );
}
