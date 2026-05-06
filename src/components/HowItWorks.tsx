import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  LayoutDashboard,
  Shield,
  Users
} from 'lucide-react';

type Step = {
  icon: LucideIcon;
  number: string;
  kicker: string;
  title: string;
  description: string;
  accent: 'blue' | 'purple' | 'slate';
};

const steps: Step[] = [
  {
    icon: LayoutDashboard,
    number: '01',
    kicker: 'Console',
    title: 'Set up your workspace',
    description:
      'Configure timezone, working days, thresholds, and roles so attendance and hours follow one rulebook across the org.',
    accent: 'blue'
  },
  {
    icon: Users,
    number: '02',
    kicker: 'People',
    title: 'Invite teams & assign access',
    description:
      'Onboard admins, HR, and your team; organize groups and managers so reporting stays scoped and auditable.',
    accent: 'purple'
  },
  {
    icon: Download,
    number: '03',
    kicker: 'Desktop',
    title: 'Deploy Timeflow Tracker',
    description:
      'Install the Windows or macOS client, enforce minimum versions when needed, and point users to your approved download URL.',
    accent: 'slate'
  },
  {
    icon: Camera,
    number: '04',
    kicker: 'Policy',
    title: 'Tune capture & network rules',
    description:
      'Set screenshot and camera intervals (for example every few minutes), toggle per user, and align office IP expectations with your security model.',
    accent: 'blue'
  },
  {
    icon: CalendarCheck,
    number: '05',
    kicker: 'Attendance',
    title: 'Track clock data & edits',
    description:
      'People clock in and out; admins add or adjust entries when reality differs from the log—exports stay tied to the same records.',
    accent: 'purple'
  },
  {
    icon: BarChart3,
    number: '06',
    kicker: 'Insight',
    title: 'Report & close the loop',
    description:
      'Slice hours by user, team, role, and project; export CSV or PDF and email summaries to HR or payroll distribution lists.',
    accent: 'slate'
  },
  {
    icon: Shield,
    number: '07',
    kicker: 'Governance',
    title: 'Enforce versions & access',
    description:
      'Block outdated tracker builds, require updates from a URL you control, and keep optional verification aligned with internal policy.',
    accent: 'blue'
  },
  {
    icon: Users,
    number: '08',
    kicker: 'Scale',
    title: 'Grow with confidence',
    description:
      'Add projects, expand teams, and keep a single Timeflow hub for operators while the desktop tracker keeps day-to-day capture simple.',
    accent: 'purple'
  }
];

const accentGlow: Record<Step['accent'], string> = {
  blue: 'from-flow-blue/25 via-transparent to-transparent',
  purple: 'from-flow-purple/25 via-transparent to-transparent',
  slate: 'from-slate-500/15 via-transparent to-transparent'
};

function DottedLineH() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none block h-3 min-w-[8px] w-full flex-1 text-flow-blue/35"
      preserveAspectRatio="none"
      viewBox="0 0 200 12"
    >
      <line
        x1="0"
        y1="6"
        x2="200"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="2 11"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function DottedLineV({ heightClass }: { heightClass: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none w-3 shrink-0 text-flow-blue/35 ${heightClass}`}
      preserveAspectRatio="none"
      viewBox="0 0 12 100"
    >
      <line
        x1="6"
        y1="0"
        x2="6"
        y2="100"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="2 11"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function PathNode({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-[1] -mx-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-flow-border bg-flow-card shadow-[0_2px_12px_-2px_rgba(74,105,255,0.35)] md:h-10 md:w-10">
      {children}
    </div>
  );
}

function ConnectorRight() {
  return (
    <div aria-hidden className="flex w-full items-center pb-[2.6rem] pt-1 md:pb-[2.8rem]">
      <DottedLineH />
      <PathNode>
        <ChevronRight className="h-[1.15rem] w-[1.15rem] text-flow-blue md:h-5 md:w-5" strokeWidth={3} />
      </PathNode>
      <DottedLineH />
    </div>
  );
}

function ConnectorLeft() {
  return (
    <div aria-hidden className="flex w-full items-center pb-[2.6rem] pt-1 md:pb-[2.8rem]">
      <DottedLineH />
      <PathNode>
        <ChevronLeft className="h-[1.15rem] w-[1.15rem] text-flow-blue md:h-5 md:w-5" strokeWidth={3} />
      </PathNode>
      <DottedLineH />
    </div>
  );
}

function ConnectorDown() {
  return (
    <div aria-hidden className="flex flex-col items-center py-0.5">
      <DottedLineV heightClass="h-9 md:h-11" />
      <PathNode>
        <ChevronDown className="h-[1.15rem] w-[1.15rem] text-flow-blue md:h-5 md:w-5" strokeWidth={3} />
      </PathNode>
      <DottedLineV heightClass="h-9 md:h-11" />
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <article className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-flow-border bg-flow-card/90 p-6 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-flow-blue/40 hover:shadow-[0_20px_44px_-16px_rgba(74,105,255,0.2)] md:min-h-[220px] md:rounded-3xl md:p-7">
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${accentGlow[step.accent]} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative inline-flex w-full items-center gap-3 rounded-2xl bg-flow-gradient-soft px-4 py-3.5 text-flow-blue ring-1 ring-flow-border transition-transform duration-300 ease-out group-hover:scale-[1.02] md:gap-3.5 md:px-5 md:py-4">
        <step.icon className="h-7 w-7 shrink-0 text-white md:h-8 md:w-8" strokeWidth={1.5} aria-hidden />
        <span className="min-w-0 text-sm font-semibold uppercase tracking-wide text-white md:text-[0.95rem]">{step.kicker}</span>
      </div>

      <h3 className="relative mt-5 text-lg font-semibold leading-snug tracking-tight text-white">{step.title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white">{step.description}</p>
    </article>
  );
}

const pathwayGridClass =
  'grid items-stretch gap-x-3 md:gap-x-4 [grid-template-columns:minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)]';

function PathwayLayout() {
  const [a, b, c, d] = steps.slice(0, 4);
  const [e, f, g, h] = steps.slice(4, 8);
  const gutterCell = 'flex min-h-0 min-w-0 flex-col justify-end';

  return (
    <div>
      <div className={`relative ${pathwayGridClass}`}>
        <div className="min-w-0">
          <StepCard step={a} />
        </div>
        <div className={gutterCell}>
          <ConnectorRight />
        </div>
        <div className="min-w-0">
          <StepCard step={b} />
        </div>
        <div className={gutterCell}>
          <ConnectorRight />
        </div>
        <div className="min-w-0">
          <StepCard step={c} />
        </div>
        <div className={gutterCell}>
          <ConnectorRight />
        </div>
        <div className="min-w-0">
          <StepCard step={d} />
        </div>
      </div>

      <div className={`${pathwayGridClass}`}>
        <div className="col-span-6" />
        <div className="flex justify-center">
          <ConnectorDown />
        </div>
      </div>

      <div className={`relative ${pathwayGridClass}`}>
        <div className="min-w-0">
          <StepCard step={h} />
        </div>
        <div className={gutterCell}>
          <ConnectorLeft />
        </div>
        <div className="min-w-0">
          <StepCard step={g} />
        </div>
        <div className={gutterCell}>
          <ConnectorLeft />
        </div>
        <div className="min-w-0">
          <StepCard step={f} />
        </div>
        <div className={gutterCell}>
          <ConnectorLeft />
        </div>
        <div className="min-w-0">
          <StepCard step={e} />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-flow-border bg-flow-surface px-6 py-24 font-sans antialiased md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(157,68,255,0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div className="mb-6 flex justify-center px-1 md:mb-8">
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-flow-border bg-flow-card/80 px-5 py-3.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md ring-1 ring-white/[0.04] md:gap-4 md:px-8 md:py-4">
              <img src="/assets/icon.png" alt="" className="h-9 w-9 shrink-0 rounded-lg object-contain md:h-11 md:w-11" width={44} height={44} />
              <p className="text-left text-sm font-semibold uppercase leading-snug tracking-[0.16em] text-white md:text-base md:tracking-[0.18em]">
                From rollout to trusted reports
              </p>
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            How <span className="bg-flow-gradient bg-clip-text text-transparent">Timeflow</span> works
          </h2>
          <p className="text-lg leading-relaxed text-white">
            A guided path from workspace setup to governed desktop tracking—so operators and teams share the same story about
            time.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-flow-gradient" />
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:hidden">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        <div className="hidden lg:block">
          <PathwayLayout />
        </div>

        <div className="relative mt-14 flex flex-col items-center justify-center gap-4 sm:mt-16 md:flex-row md:gap-6">
          <Link
            to="/features"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-flow-gradient px-8 py-4 text-sm font-medium text-white shadow-lg shadow-flow-purple/25 transition-all duration-300 ease-out hover:opacity-95"
          >
            Explore the feature tour
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              strokeWidth={2}
              aria-hidden
            />
          </Link>
          <p className="max-w-xs text-center text-xs text-white md:text-left">
            The features page walks each capability with the same visual language—no raw product screenshots required.
          </p>
        </div>
      </div>
    </section>
  );
}
