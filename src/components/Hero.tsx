import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(74,105,255,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-28 h-72 w-72 rounded-full bg-flow-blue/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-flow-purple/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-flow-border bg-gradient-to-br from-[#242b55] via-[#212954] to-[#1b2247] shadow-[0_34px_90px_-28px_rgba(74,105,255,0.42)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_20%_0%,rgba(157,68,255,0.16),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_100%,rgba(74,105,255,0.18),transparent_60%)]" />

          <div className="relative grid items-stretch gap-8 bg-flow-card/30 p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-flow-blue">Time tracking & visibility</p>
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl md:leading-[1.06]">
                Know how your team works—with{' '}
                <span className="bg-flow-gradient bg-clip-text text-transparent">Timeflow</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white md:text-lg">
                Accurate hours, attendance, and projects in one admin hub. Pair the web console with{' '}
                <strong className="font-semibold text-white">Timeflow Tracker</strong> for automatic tracking and policy-ready
                visibility.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl bg-flow-gradient px-7 py-3.5 text-sm font-medium text-white shadow-xl shadow-flow-blue/20 transition-transform hover:scale-[1.02]"
                >
                  Book a demo
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </button>
                <Link
                  to="/features"
                  className="rounded-xl border border-flow-border bg-flow-card/80 px-7 py-3.5 text-center text-sm font-medium text-white backdrop-blur transition-colors hover:border-flow-blue/50 hover:bg-flow-card"
                >
                  View features
                </Link>
              </div>
            </div>

            <div className="relative h-full min-h-[360px] rounded-2xl border border-flow-border/80 bg-flow-bg/35 p-6">
              <div className="relative z-20 mb-4 flex items-center justify-between rounded-xl border border-flow-border/80 bg-flow-card/70 px-3 py-2">
                <div className="flex items-center gap-2">
                  <img src="/assets/icon.png" alt="Timeflow Tracker" className="h-6 w-6 rounded-md" width={24} height={24} />
                  <p className="text-xs font-semibold uppercase tracking-wide text-white">Timeflow Tracker</p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">Online</span>
              </div>

              <div className="relative z-20 mb-3 flex items-center justify-between gap-3">
                <div className="rounded-xl border border-flow-border bg-flow-card/85 px-3 py-2 text-xs font-medium text-white">
                  Live tracker sync
                </div>
                <div className="rounded-xl border border-flow-border bg-flow-card/85 px-3 py-2 text-xs font-medium text-white">
                  99.9% uptime
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-flow-blue/40" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-flow-purple/50" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flow-gradient opacity-25 blur-md" />

              <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-flow-border bg-flow-card/90 shadow-lg shadow-flow-purple/25">
                <img src="/assets/icon.png" alt="Timeflow Tracker" className="h-10 w-10 rounded-lg" width={40} height={40} />
              </div>

              <div className="absolute bottom-24 left-6 z-20 rounded-xl border border-flow-border bg-flow-card/85 px-3 py-2 text-xs font-medium text-white">
                Attendance verified
              </div>
              <div className="absolute bottom-24 right-4 z-20 rounded-xl border border-flow-border bg-flow-gradient-soft px-3 py-2 text-xs font-semibold text-white">
                CSV + PDF exports
              </div>

              <div className="absolute inset-x-5 bottom-4 z-20 rounded-xl border border-flow-border/80 bg-flow-card/70 p-3">
                <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white">
                  <span>Tracker activity</span>
                  <span>Live</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-flow-bg/60">
                  <div className="h-full w-4/5 rounded-full bg-flow-gradient" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
