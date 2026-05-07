import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-flow-border px-6 py-24">
      <div aria-hidden className="absolute inset-0 bg-flow-gradient opacity-90" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-4xl text-center text-white">
        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">Ready to run on accurate time?</h2>
        <p className="mb-12 text-lg leading-relaxed text-white/90 md:text-xl">
          Put <strong className="font-semibold">Timeflow</strong> in front of your operators and pair it with Timeflow
          Tracker where desktop capture and sync matter.
        </p>

        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="flex transform items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-medium text-final-cta-blue shadow-lg transition-all hover:scale-[1.02] hover:bg-slate-50"
          >
            <Calendar className="h-5 w-5" strokeWidth={2} />
            Book a demo
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-8 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            Talk to sales
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-white/20 pt-12 md:grid-cols-3">
          <div>
            <div className="mb-2 text-2xl font-bold md:text-3xl">Accurate</div>
            <div className="text-white/80">Hours tied to projects and real clock data</div>
          </div>
          <div>
            <div className="mb-2 text-2xl font-bold md:text-3xl">Configurable</div>
            <div className="text-white/80">Capture cadence, roles, and access rules you define</div>
          </div>
          <div>
            <div className="mb-2 text-2xl font-bold md:text-3xl">Transparent</div>
            <div className="text-white/80">Reports and exports stakeholders can trust</div>
          </div>
        </div>
      </div>
    </section>
  );
}
