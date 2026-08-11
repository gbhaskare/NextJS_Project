import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TechStore",
  description: "Learn more about TechStore, our mission, and how we work.",
};

const storyHighlights = [
  {
    title: "Our mission",
    copy: "We help people choose technology that fits their routines, without the overwhelm of too many options or confusing specs.",
  },
  {
    title: "How we work",
    copy: "We balance practical needs, product quality, and simple presentation so every recommendation feels useful and easy to understand.",
  },
  {
    title: "What we value",
    copy: "Clear communication, honest product information, and a calm shopping experience are at the heart of TechStore.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-slate-950 px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">About TechStore</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">A more thoughtful way to shop tech.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              TechStore was created to make everyday electronics feel less complicated. We focus on clarity, helpful product discovery, and a better shopping experience from first click to final purchase.
            </p>
          </div>

          <div className="flex items-center justify-center bg-slate-50 px-6 py-10 sm:px-8 lg:px-10">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">At a glance</p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-3xl font-black text-slate-950">9</p>
                  <p className="mt-1 text-sm text-slate-600">curated products in the catalog</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-950">5</p>
                  <p className="mt-1 text-sm text-slate-600">core categories across daily tech</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-950">1</p>
                  <p className="mt-1 text-sm text-slate-600">simple mission: help people buy better</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="highlights-heading" className="mt-16">
        <div className="mb-8 text-center lg:text-left">
          <p className="section-kicker">Our approach</p>
          <h2 id="highlights-heading" className="section-title mt-3">What makes TechStore different</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {storyHighlights.map((item) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" key={item.title}>
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
