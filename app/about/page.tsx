import type { Metadata } from "next";

export const metadata: Metadata = { title: "About TechStore", description: "Learn about TechStore's thoughtful approach to everyday technology." };

const principles = [["Useful by design", "We choose products that solve everyday problems clearly and reliably."], ["Easy to compare", "Straightforward information helps you make a confident choice without the noise."], ["Made for real life", "Our selection balances capable features, long-term value, and approachable design."]];

export default function AboutPage() {
  return <main><section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6"><p className="section-kicker">About TechStore</p><h1 className="section-title mt-3">Better technology begins with better choices.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">TechStore is a fictional retail concept created for this technical assignment. We make product discovery feel clear, calm, and useful.</p></section><section aria-labelledby="principles-heading" className="bg-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 id="principles-heading" className="section-title text-3xl">What guides us</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{principles.map(([title, copy], index) => <article className="rounded-2xl border border-slate-200 p-6" key={title}><p className="font-black text-blue-700">0{index + 1}</p><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}</div></div></section></main>;
}
