import { Clock, MapPin, PieChart, ShieldAlert, Split, Users } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: Clock,
      title: 'Guesswork on hours',
      description: 'Teams report time late or inconsistently, so payroll and billing lack a trustworthy source of truth.'
    },
    {
      icon: Split,
      title: 'Tools that do not connect',
      description: 'Spreadsheets, chat check-ins, and ad-hoc timers never line up with projects, roles, or attendance rules.'
    },
    {
      icon: Users,
      title: 'Limited visibility for managers',
      description: 'Leaders cannot see who is active, on which work, or whether policies are being followed day to day.'
    },
    {
      icon: PieChart,
      title: 'Weak reporting for decisions',
      description: 'Exports are painful to assemble, and trends across people, teams, and projects stay buried.'
    },
    {
      icon: MapPin,
      title: 'Access from anywhere',
      description: 'Without network rules you trust, tracking apps may run off-site when your policy expects office-only use.'
    },
    {
      icon: ShieldAlert,
      title: 'Version and compliance drift',
      description: 'Old desktop builds and inconsistent capture settings make audits harder and increase operational risk.'
    }
  ];

  return (
    <section className="bg-flow-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Why time data breaks down</h2>
          <p className="text-lg text-white">
            Distributed teams need one system for hours, attendance, and accountability—not a patchwork of reminders and
            files.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-xl border border-flow-border bg-flow-card/60 p-6 transition-all duration-300 hover:border-flow-blue/40 hover:shadow-lg hover:shadow-flow-blue/5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-flow-gradient p-3 text-white shadow-lg shadow-flow-purple/20">
                <problem.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{problem.title}</h3>
              <p className="leading-relaxed text-white">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-flow-border bg-flow-gradient-soft p-10 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">Timeflow brings it together</h3>
            <p className="text-lg leading-relaxed text-white">
              A web admin hub for people, projects, attendance, and reports—plus optional verification from the{' '}
              <strong className="font-semibold text-white">Timeflow Tracker</strong> desktop apps on macOS and Windows.
              Configure capture intervals, roles, IP rules, and tracker versions so operations stay aligned with how you
              actually work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
