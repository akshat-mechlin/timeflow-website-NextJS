import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'Team',
    description: 'For teams adopting structured time tracking and attendance.',
    price: 'Custom',
    period: 'Contact us',
    features: [
      'Web admin: dashboard, attendance, projects',
      'Timeflow Tracker for Windows & macOS',
      'Role-based access (admin, HR, member)',
      'CSV exports and core reports',
      'Email support'
    ],
    cta: 'Contact sales',
    href: '/',
    featured: false
  },
  {
    name: 'Business',
    description: 'For companies that need verification, policy control, and scale.',
    price: 'Custom',
    period: 'Tailored rollout',
    features: [
      'Everything in Team',
      'Configurable screenshot & camera intervals',
      'Per-user capture toggles and screenshot gallery',
      'Tracker version enforcement & update URLs',
      'Office IP restrictions where required',
      'PDF exports and scheduled report emails',
      'Priority support'
    ],
    cta: 'Get a demo',
    href: '/',
    featured: true
  },
  {
    name: 'Enterprise',
    description: 'For regulated environments and advanced governance.',
    price: 'Custom',
    period: 'Dedicated success',
    features: [
      'Everything in Business',
      'Advanced permissions and analytics views',
      'SSO and security reviews',
      'Custom policies and onboarding',
      'SLA options'
    ],
    cta: 'Contact sales',
    href: '/',
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="min-h-screen border-t border-flow-border bg-flow-bg px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Pricing that matches your rollout</h1>
          <p className="text-lg text-white">
            Every deployment includes the web console and desktop trackers; we size capture features, seats, and support
            with you.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`relative flex flex-col overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                plan.featured
                  ? 'border-flow-blue/40 bg-flow-card shadow-xl shadow-flow-blue/10'
                  : 'border-flow-border bg-flow-card/60 hover:border-flow-border hover:shadow-lg'
              }`}
            >
              {plan.featured && <div className="absolute left-0 right-0 top-0 h-1 bg-flow-gradient" />}
              <div className="flex flex-1 flex-col p-8">
                <h2 className="mb-2 text-xl font-semibold text-white">{plan.name}</h2>
                <p className="mb-6 text-sm text-white">{plan.description}</p>
                <div className="mb-6">
                  <span className="bg-flow-gradient bg-clip-text text-3xl font-bold text-transparent">{plan.price}</span>
                  <span className="ml-1 text-sm text-white">{plan.period}</span>
                </div>
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flow-gradient-soft ring-1 ring-flow-border">
                        <Check className="h-3 w-3 text-flow-blue" strokeWidth={2.5} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.href}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-medium transition-all ${
                    plan.featured
                      ? 'bg-flow-gradient text-white shadow-lg shadow-flow-purple/25 hover:opacity-95'
                      : 'border-2 border-flow-border bg-flow-surface text-white hover:border-flow-blue/40'
                  }`}
                >
                  {plan.cta}
                  {plan.featured && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="mb-4 text-sm text-white">Need a custom bundle for subsidiaries or regions? We will map it with you.</p>
          <div className="inline-flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm text-white">
              <span className="h-2 w-2 rounded-full bg-flow-gradient" />
              Volume-friendly licensing
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-white">
              <span className="h-2 w-2 rounded-full bg-flow-gradient" />
              Pilot-friendly onboarding
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
