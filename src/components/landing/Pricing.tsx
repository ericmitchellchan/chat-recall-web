import Link from "next/link";

const tiers = [
  {
    name: "Monthly",
    price: "$4.99",
    period: "/mo",
    description: "Pay as you go, cancel anytime.",
    features: [
      "Unlimited conversations",
      "Full-text search",
      "ChatGPT import (more coming soon)",
      "Thread organization",
      "MCP integration",
    ],
    cta: "Start 14-Day Free Trial",
    href: "/auth/signup",
    highlighted: false,
    badge: null,
  },
  {
    name: "Annual",
    price: "$49.99",
    period: "/yr",
    description: "Best value for committed users.",
    features: [
      "Unlimited conversations",
      "Full-text search",
      "ChatGPT import (more coming soon)",
      "Thread organization",
      "MCP integration",
    ],
    cta: "Start 14-Day Free Trial",
    href: "/auth/signup",
    highlighted: true,
    badge: "Save 17%",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Simple pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
          14-day free trial. Full access, no credit card required.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 ${
                tier.highlighted
                  ? "border-emerald-500/50 bg-emerald-500/5"
                  : "border-neutral-800 bg-neutral-900/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                {tier.badge && (
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    {tier.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-neutral-400">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-neutral-300"
                  >
                    <span className="mt-0.5 text-emerald-400">&#x2713;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-lg px-4 py-2.5 text-center font-semibold transition ${
                  tier.highlighted
                    ? "bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
                    : "border border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
