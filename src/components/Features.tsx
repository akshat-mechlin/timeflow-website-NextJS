import type { LucideIcon } from 'lucide-react';
import {
  Apple,
  BarChart3,
  Building2,
  Camera,
  Clock,
  Download,
  GlobeLock,
  LayoutDashboard,
  Monitor,
  Package,
  PieChart,
  Users
} from 'lucide-react';

function FloatingProductFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[min(120%,28rem)] w-[min(140%,36rem)] -translate-y-1/2 rounded-full bg-flow-gradient opacity-25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-flow-purple/20 blur-2xl"
      />
      <div className="animate-features-float relative">
        <div className="rounded-2xl border border-flow-border bg-flow-card/65 p-1 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.08] backdrop-blur-md md:rounded-3xl md:p-1.5">
          <div className="flex min-h-[280px] overflow-hidden rounded-[14px] border border-flow-border bg-gradient-to-b from-flow-card/95 to-flow-bg/95 shadow-inner md:min-h-[320px] md:rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarNav({ active }: { active: string }) {
  const items = ['Dashboard', 'Attendance', 'Reports', 'Projects', 'Team', 'Screenshots', 'Admin'];
  return (
    <aside className="hidden w-[5.5rem] shrink-0 border-r border-flow-border bg-flow-surface/92 py-3 pl-2 pr-1 sm:block sm:w-28 sm:py-4 sm:pl-2.5">
      <div className="mb-4 flex items-center gap-1.5 px-0.5 sm:gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-flow-gradient sm:h-8 sm:w-8">
          <Clock className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={2} />
        </div>
        <span className="truncate text-[11px] font-semibold text-white sm:text-xs">Timeflow</span>
      </div>
      <nav className="space-y-0.5">
        {items.map((label) => (
          <div
            key={label}
            className={`truncate rounded-md px-1.5 py-1.5 text-[10px] font-medium sm:px-2 sm:text-[11px] ${
              label === active ? 'bg-flow-gradient text-white shadow-md' : 'text-white'
            }`}
          >
            {label}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function AttendanceMockup() {
  return (
    <FloatingProductFrame>
      <SidebarNav active="Attendance" />
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-white">Attendance</p>
            <p className="text-sm font-semibold text-white sm:text-base">Logs & exports</p>
          </div>
          <span className="rounded-full bg-flow-gradient-soft px-2 py-0.5 text-[11px] font-semibold text-white ring-1 ring-flow-blue/35">
            CSV · PDF
          </span>
        </div>
        <div className="overflow-hidden rounded-lg border border-flow-border bg-flow-surface/72">
          <div className="grid grid-cols-[1fr_0.65fr_0.5fr] gap-1 border-b border-flow-border bg-flow-card/82 px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white sm:px-3 sm:text-[11px]">
            <span>User</span>
            <span>Status</span>
            <span className="text-right">Dur.</span>
          </div>
          {[
            { name: 'A. Sharma', status: 'Present', tone: 'text-emerald-400', dur: '8.1h' },
            { name: 'R. Patel', status: 'Half day', tone: 'text-amber-400', dur: '4.2h' },
            { name: 'S. Lee', status: 'Absent', tone: 'text-rose-400', dur: '—' }
          ].map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-[1fr_0.65fr_0.5fr] items-center gap-1 border-b border-flow-border px-2 py-1.5 text-[11px] sm:px-3 sm:text-xs"
            >
              <span className="flex items-center gap-1.5 truncate font-medium text-white">
                <span className="h-4 w-4 shrink-0 rounded-full bg-flow-gradient opacity-90" />
                {row.name}
              </span>
              <span className={`truncate font-semibold ${row.tone}`}>{row.status}</span>
              <span className="text-right tabular-nums text-white">{row.dur}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-white">Date range, quick filters, and manual edits—payroll ready.</p>
      </div>
    </FloatingProductFrame>
  );
}

function DesktopAppMockup() {
  return (
    <FloatingProductFrame>
      <div className="flex w-full flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-white">Timeflow Tracker</p>
            <p className="text-sm font-semibold text-white">Download for your fleet</p>
          </div>
          <span className="rounded-full border border-flow-border bg-flow-card/80 px-2 py-0.5 font-mono text-[9px] text-white">
            v1.6.x
          </span>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-flow-border bg-flow-surface/60 p-3">
            <div className="mb-2 flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-flow-blue/20 text-flow-blue">
                <Monitor className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-xs font-semibold">Windows</span>
            </div>
            <p className="text-[10px] text-white">10 / 11 · 64-bit · .exe</p>
            <div className="mt-2 h-7 rounded-lg bg-flow-gradient text-center text-[10px] font-semibold leading-7 text-white">
              Download
            </div>
          </div>
          <div className="rounded-xl border border-flow-border bg-flow-surface/60 p-3">
            <div className="mb-2 flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-flow-purple/20 text-flow-purple">
                <Apple className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-xs font-semibold">macOS</span>
            </div>
            <p className="text-[10px] text-white">10.15+ · Intel / Apple silicon · .dmg</p>
            <div className="mt-2 h-7 rounded-lg border border-flow-border bg-flow-card/70 text-center text-[10px] font-semibold leading-7 text-white">
              Download
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-dashed border-flow-blue/40 bg-flow-gradient-soft px-3 py-2 text-[9px] leading-relaxed text-white">
          Background sync · project picker · respects admin capture policy.
        </div>
      </div>
    </FloatingProductFrame>
  );
}

/** Stylized “capture tiles” — solid UI blocks, not real screenshots. */
function ActivityTilesMockup() {
  const tiles = [
    { label: 'Desktop', sub: '5 min', active: true },
    { label: 'Desktop', sub: '5 min', active: true },
    { label: 'Camera', sub: '7 min', active: true },
    { label: 'Desktop', sub: '5 min', active: false }
  ];
  return (
    <FloatingProductFrame>
      <SidebarNav active="Screenshots" />
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-white">Activity verification</p>
            <p className="text-xs font-semibold text-white sm:text-sm">Optional captures</p>
          </div>
          <span className="text-[9px] text-white">Interval: 5–7 min</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`flex aspect-[4/3] flex-col justify-between rounded-lg border p-2 ${
                t.active
                  ? 'border-flow-blue/50 bg-gradient-to-br from-flow-blue/22 to-flow-purple/14'
                  : 'border-flow-border/90 bg-flow-surface/45 opacity-[0.88]'
              }`}
            >
              <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-wide text-white">
                <span>{t.label}</span>
                <Camera className="h-3 w-3 text-flow-purple" strokeWidth={2} />
              </div>
              <div className="rounded-md bg-flow-surface/80 p-1.5">
                <div className="h-8 rounded bg-gradient-to-br from-slate-600/50 to-slate-800/80" />
              </div>
              <span className="text-[8px] text-white">{t.sub}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[9px] leading-relaxed text-white">Admins tune cadence and enable screen or camera per user—not one blunt default.</p>
      </div>
    </FloatingProductFrame>
  );
}

function ProjectsTeamsMockup() {
  return (
    <FloatingProductFrame>
      <SidebarNav active="Projects" />
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-white">Projects</p>
            <p className="text-xs font-semibold text-white sm:text-sm">Where hours belong</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { name: 'Product · v2', hours: '128h', badge: 'Active' },
            { name: 'Client rollout', hours: '42h', badge: 'Active' }
          ].map((p) => (
            <div key={p.name} className="rounded-lg border border-flow-border bg-flow-surface/55 p-2.5">
              <div className="mb-1 flex items-center justify-between gap-1">
                <span className="truncate text-[10px] font-semibold text-white">{p.name}</span>
                <span className="shrink-0 rounded-full bg-emerald-500/25 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-400">
                  {p.badge}
                </span>
              </div>
              <p className="text-[9px] text-white">Tasks + team assignments</p>
              <p className="mt-1.5 bg-flow-gradient bg-clip-text text-lg font-bold tabular-nums text-transparent">{p.hours}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-flow-border bg-flow-card/55 px-2 py-1.5 text-[9px] text-white">
          <Users className="h-3.5 w-3.5 shrink-0 text-flow-blue" strokeWidth={2} />
          Team groups mirror how you already talk about work.
        </div>
      </div>
    </FloatingProductFrame>
  );
}

function ReportsMockup() {
  const bars = [35, 52, 44, 61, 48, 70, 55, 66, 58, 72, 64, 78];
  return (
    <FloatingProductFrame>
      <SidebarNav active="Reports" />
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-white">Reports</p>
            <p className="text-xs font-semibold text-white sm:text-sm">Filters → export</p>
          </div>
          <span className="rounded-md border border-flow-border bg-flow-card/75 px-2 py-0.5 text-[8px] text-white">
            Apr 2026
          </span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-1.5">
          {[
            { k: 'Total', v: '58h' },
            { k: 'Billable', v: '12h' },
            { k: 'Teams', v: '4' }
          ].map((c) => (
            <div key={c.k} className="rounded-lg border border-flow-border bg-flow-surface/55 p-2">
              <p className="text-[8px] uppercase tracking-wide text-white">{c.k}</p>
              <p className="bg-flow-gradient bg-clip-text text-base font-bold tabular-nums text-transparent">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="flex h-20 items-end justify-between gap-1 rounded-lg border border-flow-border bg-flow-surface/45 px-1.5 py-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-flow-gradient opacity-90"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="mt-2 text-[9px] leading-relaxed text-white">Users · teams · roles · projects—then CSV or PDF handoff.</p>
      </div>
    </FloatingProductFrame>
  );
}

function AdminSecurityMockup() {
  return (
    <FloatingProductFrame>
      <SidebarNav active="Admin" />
      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="mb-3">
          <p className="text-[9px] font-medium uppercase tracking-wide text-white">Admin panel</p>
          <p className="text-xs font-semibold text-white sm:text-sm">Policy & enforcement</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-flow-border bg-flow-surface/55 px-2.5 py-2">
            <div className="flex items-center gap-2 text-[10px] text-white">
              <GlobeLock className="h-3.5 w-3.5 text-flow-blue" strokeWidth={2} />
              Office IP allowlist
            </div>
            <span className="h-4 w-8 rounded-full bg-flow-gradient p-0.5">
              <span className="block h-3 w-3 translate-x-4 rounded-full bg-white shadow" />
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-flow-border bg-flow-surface/55 px-2.5 py-2">
            <div className="flex items-center gap-2 text-[10px] text-white">
              <Package className="h-3.5 w-3.5 text-flow-purple" strokeWidth={2} />
              Min tracker version
            </div>
            <span className="font-mono text-[9px] text-white">1.6.2</span>
          </div>
          <div className="rounded-lg border border-flow-border bg-flow-card/55 p-2">
            <p className="mb-1.5 text-[9px] font-medium text-white">Per-user capture</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-1.5 text-[9px] text-white">
                <Monitor className="h-3 w-3 text-flow-blue" />
                Screen
                <span className="h-3.5 w-7 rounded-full bg-flow-gradient" />
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-white">
                <Camera className="h-3 w-3 text-flow-purple" />
                Camera
                <span className="h-3.5 w-7 rounded-full bg-slate-500/70" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 text-[9px] leading-relaxed text-white">Force update links, permissions tabs, and analytics when you need the full picture.</p>
      </div>
    </FloatingProductFrame>
  );
}

type PremiumKeyPoint = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

type PremiumFeatureConfig = {
  id: string;
  label: string;
  titleBefore: string;
  titleGradient: string;
  description: string;
  keyPoints: readonly [PremiumKeyPoint, PremiumKeyPoint, PremiumKeyPoint];
  Mockup: React.ComponentType;
  reverseLayout: boolean;
};

function PremiumFeatureSection({
  label,
  titleBefore,
  titleGradient,
  description,
  keyPoints,
  mockup,
  reverseLayout,
  sectionId
}: {
  label: string;
  titleBefore: string;
  titleGradient: string;
  description: string;
  keyPoints: readonly [PremiumKeyPoint, PremiumKeyPoint, PremiumKeyPoint];
  mockup: React.ReactNode;
  reverseLayout: boolean;
  sectionId: string;
}) {
  const mockCol = reverseLayout ? 'order-2 lg:order-2' : 'order-2 lg:order-1';
  const textCol = reverseLayout ? 'order-1 lg:order-1' : 'order-1 lg:order-2';

  return (
    <div
      id={sectionId}
      className="relative overflow-hidden rounded-3xl border border-flow-border bg-flow-card/50 p-8 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] md:p-10 lg:p-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(74,105,255,0.12),transparent)]"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className={mockCol}>{mockup}</div>

        <div className={`${textCol} flex flex-col justify-center`}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-flow-blue">{label}</p>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            {titleBefore}
            <span className="bg-flow-gradient bg-clip-text text-transparent">{titleGradient}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white sm:text-[17px]">{description}</p>
        </div>
      </div>

      <div className="relative mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {keyPoints.map(({ title, description: desc, Icon }) => (
          <div
            key={title}
            className="group rounded-2xl border border-flow-border bg-flow-surface/50 p-6 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-flow-blue/35 hover:bg-flow-card/55 hover:shadow-[0_24px_48px_-12px_rgba(74,105,255,0.18)]"
          >
            <div className="mb-4 inline-flex rounded-xl bg-flow-gradient-soft p-3 text-flow-blue ring-1 ring-flow-border transition-transform duration-300 ease-out group-hover:scale-110">
              <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-white">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const premiumFeatures: PremiumFeatureConfig[] = [
  {
    id: 'hours-attendance',
    label: '01 — Time & attendance',
    titleBefore: 'Accurate ',
    titleGradient: 'hours & attendance',
    description:
      'See who worked, for how long, and against which projects. Admins filter by user and date, refresh live data, and keep manual edits on the same ledger your exports use.',
    Mockup: AttendanceMockup,
    reverseLayout: false,
    keyPoints: [
      {
        title: 'Clock in / out',
        description: 'Clear daily records with duration, status, and context your HR team can stand behind.',
        Icon: Clock
      },
      {
        title: 'Thresholds & rules',
        description: 'Present, half-day, and absent logic follows the working-day settings you configure for the org.',
        Icon: LayoutDashboard
      },
      {
        title: 'Payroll-friendly exports',
        description: 'CSV and PDF paths so finance gets structured files—not screenshots of spreadsheets.',
        Icon: Download
      }
    ]
  },
  {
    id: 'desktop-tracker',
    label: '02 — Timeflow Tracker',
    titleBefore: 'Native apps for ',
    titleGradient: 'Windows & macOS',
    description:
      'Teams run Timeflow Tracker on the desktop OS you standardize on. Installers, version badges, and download flows match how IT already ships software.',
    Mockup: DesktopAppMockup,
    reverseLayout: true,
    keyPoints: [
      {
        title: 'Background-friendly',
        description: 'Designed to stay out of the way while it records time and syncs with the web console.',
        Icon: Monitor
      },
      {
        title: 'Fleet rollout',
        description: 'Same story for Windows 10/11 and modern macOS—so mixed environments do not mean mixed tooling.',
        Icon: Apple
      },
      {
        title: 'Version visibility',
        description: 'Tracker builds surface next to attendance so support can spot drift before it spreads.',
        Icon: Package
      }
    ]
  },
  {
    id: 'activity-verification',
    label: '03 — Activity verification',
    titleBefore: 'Optional ',
    titleGradient: 'screens & camera',
    description:
      'When your policy calls for it, capture desktop stills and camera checks on an interval you define—often every five to seven minutes—and review them in a dedicated gallery with filters.',
    Mockup: ActivityTilesMockup,
    reverseLayout: false,
    keyPoints: [
      {
        title: 'Configurable cadence',
        description: 'Tune how often captures run instead of relying on a single rigid timer for every team.',
        Icon: Clock
      },
      {
        title: 'Per-user toggles',
        description: 'Admins enable screen capture, camera shots, or neither—based on role and jurisdiction.',
        Icon: Camera
      },
      {
        title: 'Audit mindset',
        description: 'Structured review surfaces so checks feel operational, not like ad-hoc surveillance.',
        Icon: Building2
      }
    ]
  },
  {
    id: 'projects-teams',
    label: '04 — Projects & people',
    titleBefore: 'Organize ',
    titleGradient: 'projects & teams',
    description:
      'Create projects, assign members, and track totals in one place. Team groups mirror how you already segment QA, dev, or client pods—so reporting stays intuitive.',
    Mockup: ProjectsTeamsMockup,
    reverseLayout: true,
    keyPoints: [
      {
        title: 'Project truth',
        description: 'Hours roll up to the initiatives you care about—not a single undifferentiated bucket.',
        Icon: LayoutDashboard
      },
      {
        title: 'Role-aware directory',
        description: 'Admins, HR, and members each see the slices of data appropriate to their role.',
        Icon: Users
      },
      {
        title: 'Operational cards',
        description: 'Status, tasks, and totals stay visible the way operators already think about delivery.',
        Icon: Building2
      }
    ]
  },
  {
    id: 'reports-analytics',
    label: '05 — Reports & analytics',
    titleBefore: 'From filters to ',
    titleGradient: 'exports & email',
    description:
      'Build the slice you need: date range, users, teams, roles, and projects—then export CSV, generate PDFs, or trigger report emails to HR and payroll lists.',
    Mockup: ReportsMockup,
    reverseLayout: false,
    keyPoints: [
      {
        title: 'Flexible filters',
        description: 'Combine dimensions the way leadership actually asks questions—not as frozen canned views.',
        Icon: BarChart3
      },
      {
        title: 'Trend visibility',
        description: 'Spot movement in total hours, billable vs non-billable, and team concentration over time.',
        Icon: PieChart
      },
      {
        title: 'Distribution lists',
        description: 'Keep recurring sends pointed at the right HR and payroll inboxes from system settings.',
        Icon: Download
      }
    ]
  },
  {
    id: 'admin-security',
    label: '06 — Admin & security',
    titleBefore: 'Enterprise-grade ',
    titleGradient: 'controls',
    description:
      'Enforce minimum tracker versions with optional force-update links, restrict access to approved office networks when required, and centralize permissions next to analytics.',
    Mockup: AdminSecurityMockup,
    reverseLayout: true,
    keyPoints: [
      {
        title: 'IP expectations',
        description: 'Align tracker usage with “on-prem or VPN” realities your security team already publishes.',
        Icon: GlobeLock
      },
      {
        title: 'Version enforcement',
        description: 'Block outdated builds and route users to the download URL you control.',
        Icon: Package
      },
      {
        title: 'Unified admin hub',
        description: 'User management, system settings, permissions, and analytics stay beside each other.',
        Icon: Building2
      }
    ]
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="min-h-screen border-t border-flow-border bg-flow-bg px-6 py-24 font-sans antialiased md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flow-purple">Timeflow</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Everything you need to market time tracking</h1>
          <p className="text-lg leading-relaxed text-white">
            High-fidelity UI illustrations below mirror the product structure—attendance, desktop clients, optional captures,
            projects, reporting, and admin policy—without dropping raw screenshots into the page.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-flow-gradient" />
        </header>

        <div className="flex flex-col gap-10 md:gap-12">
          {premiumFeatures.map(({ id, Mockup, ...rest }) => (
            <PremiumFeatureSection
              key={id}
              sectionId={id}
              mockup={<Mockup />}
              reverseLayout={rest.reverseLayout}
              label={rest.label}
              titleBefore={rest.titleBefore}
              titleGradient={rest.titleGradient}
              description={rest.description}
              keyPoints={rest.keyPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
