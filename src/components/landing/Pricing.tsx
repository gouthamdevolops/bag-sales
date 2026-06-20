import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: ["1 project", "Community support", "Basic components"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited projects", "Priority support", "All components", "Custom domains"],
  },
  {
    name: "Team",
    price: "$99",
    features: ["Everything in Pro", "Team collaboration", "Analytics", "SLA"],
  },
];

export default function Pricing() {
  return (
    <section className="bg-muted px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Simple pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Start free, scale as you grow. No hidden fees.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-lg border border-border bg-card p-8"
            >
              <h3 className="text-lg font-semibold text-card-foreground">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-foreground">
                {plan.price}
                {plan.price !== "Free" && (
                  <span className="text-base font-normal text-muted-foreground">/mo</span>
                )}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                className="mt-8 block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {plan.name === "Starter" ? "Get started" : "Subscribe"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
