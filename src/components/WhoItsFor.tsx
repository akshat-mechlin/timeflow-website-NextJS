import { useId } from 'react';

export default function WhoItsFor() {
  const id = useId();
  const audiences = [
    {
      label: '01',
      title: 'Remote and hybrid teams',
      description: 'Keep daily hours, attendance states, and project allocation visible without chasing status updates.'
    },
    {
      label: '02',
      title: 'Agencies & professional services',
      description: 'Billable and non-billable time, per-project rollups, and exports that finance can rely on.'
    },
    {
      label: '03',
      title: 'IT & operations providers',
      description: 'Enforce tracker versions, office IP access where required, and consistent capture policies across accounts.'
    },
    {
      label: '04',
      title: 'Growing companies with HR oversight',
      description: 'Role-based access for admins and HR, team groupings, and audit-friendly activity trails when you enable them.'
    },
    {
      label: '05',
      title: 'Leaders who need proof, not vibes',
      description: 'Optional screenshots and camera captures on a schedule you define—typically every few minutes—so reviews stay factual.'
    }
  ];

  return (
    <section className="border-t border-flow-border bg-flow-bg px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Built for teams that ship on deadlines</h2>
          <p className="text-lg text-white">
            Timeflow fits organizations that want accurate time data, clear admin control, and desktop tracking that matches
            their security posture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.slice(0, 3).map((audience, index) => (
            <article
              key={`${id}-${index}`}
              className="group relative overflow-hidden rounded-xl border border-flow-border bg-flow-card/80 p-8 transition-all duration-300 hover:border-flow-purple/40 hover:shadow-xl hover:shadow-flow-purple/10"
            >
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-flow-gradient opacity-90" />
              <span className="mb-4 inline-block bg-flow-gradient bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                {audience.label}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-white">{audience.title}</h3>
              <p className="text-[15px] leading-relaxed text-white">{audience.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {audiences.slice(3).map((audience, index) => (
            <article
              key={`${id}-${index + 3}`}
              className="group relative overflow-hidden rounded-xl border border-flow-border bg-flow-card/80 p-8 transition-all duration-300 hover:border-flow-blue/40 hover:shadow-xl hover:shadow-flow-blue/10"
            >
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-flow-gradient opacity-90" />
              <span className="mb-4 inline-block bg-flow-gradient bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                {audience.label}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-white">{audience.title}</h3>
              <p className="text-[15px] leading-relaxed text-white">{audience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
