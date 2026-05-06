import { Sparkles } from 'lucide-react';

function GradientCheck({ className, idSuffix = '0' }: { className?: string; idSuffix?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={`checkGradient-${idSuffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A69FF" />
          <stop offset="100%" stopColor="#9D44FF" />
        </linearGradient>
      </defs>
      <path
        d="M20 6 9 17l-5-5"
        stroke={`url(#checkGradient-${idSuffix})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Comparison() {
  const comparisons = [
    {
      category: 'Spreadsheets & chat',
      benefits: [
        'Structured attendance with filters, edits, and exports instead of fragile rows',
        'Projects and tasks tied directly to tracked time',
        'Role-aware admin so HR and leads see the right scope',
        'Optional desktop verification when your policy requires it'
      ]
    },
    {
      category: 'Generic “start timer” apps',
      benefits: [
        'Org-wide settings: thresholds, working days, timezone, tracker reset hour',
        'Team directory, groups, and per-user capture toggles in one admin panel',
        'Reports with date range, user, team, role, and project filters',
        'Version enforcement and update URLs for Timeflow Tracker builds'
      ]
    },
    {
      category: 'Point tools',
      benefits: [
        'Dashboard + attendance + reports + screenshots in one product story',
        'CSV and PDF paths for payroll-friendly handoff',
        'IP-based access ideas for office-only tracking when you need them',
        'Native Windows and macOS clients built for continuous background sync'
      ]
    }
  ];

  return (
    <section className="border-t border-flow-border bg-flow-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Purpose-built for time tracking</h2>
          <p className="text-lg text-white">
            Timeflow is not a generic project suite—it is focused instrumentation for hours, attendance, oversight, and
            reporting across your organization.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-flow-border bg-flow-card/80 shadow-sm transition-all duration-300 hover:border-flow-blue/40 hover:shadow-xl hover:shadow-flow-blue/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-flow-gradient-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="px-6 pb-4 pt-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-flow-gradient px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-flow-purple/25">
                    <Sparkles className="h-4 w-4" strokeWidth={2} />
                    {comparison.category}
                  </div>
                </div>
                <ul className="relative space-y-3 px-6 pb-6">
                  {comparison.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white">
                      <GradientCheck className="mt-1.5 h-5 w-5 shrink-0" idSuffix={`${index}-${idx}`} />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-flow-border bg-flow-gradient p-10 text-center text-white md:p-12">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">One stack: web console + desktop tracker</h3>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
            Teams run Timeflow Tracker on Mac or Windows. Admins configure policies, review attendance, browse optional
            captures, and export reports—all under the Timeflow brand experience.
          </p>
        </div>
      </div>
    </section>
  );
}
