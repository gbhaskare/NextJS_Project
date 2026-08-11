import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why TechStore",
  description: "See why TechStore helps people choose better everyday technology.",
};

const reasons = [
  {
    title: "Thoughtful curation",
    copy: "We focus on products that solve real needs, not just chase hype. Every recommendation is selected for clarity, practicality, and daily usefulness.",
  },
  {
    title: "Easy comparisons",
    copy: "From battery life to sound quality and setup simplicity, we make it easier to spot what matters and choose with confidence.",
  },
  {
    title: "Supportive buying experience",
    copy: "We combine clear product information with helpful guidance, so shoppers can move from browsing to buying without confusion.",
  },
];

export default function WhyTechStorePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Why TechStore</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Better tech decisions, made simple.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              TechStore brings together everyday essentials, refined buying guidance, and clear product information so people can shop with confidence.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Our difference</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
              <li>• Curated selection across audio, computing, mobile, photography, and smart home.</li>
              <li>• Honest, accessible specs designed for real-world comparison.</li>
              <li>• Calm shopping experience without noisy marketing language.</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="reasons-heading" className="mt-16">
        <div className="mb-8">
          <p className="section-kicker">What we stand for</p>
          <h2 id="reasons-heading" className="section-title mt-3">The reasons people keep coming back</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" key={reason.title}>
              <h3 className="text-xl font-bold text-slate-950">{reason.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{reason.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker">Ready to explore?</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Browse products built for real life.</h2>
          </div>
          <Link className="button-primary" href="/products">
            Shop the collection
          </Link>
        </div>
      </section>
    </main>
  );
}
