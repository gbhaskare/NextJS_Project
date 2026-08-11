import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-10 text-sm text-slate-600 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} TechStore. Everyday technology, thoughtfully selected.</p>
        <nav aria-label="Footer navigation" className="flex gap-5 font-semibold">
          <Link className="hover:text-slate-950" href="/about">About</Link>
          <Link className="hover:text-slate-950" href="/contact">Contact</Link>
          <Link className="hover:text-slate-950" href="/products">Shop</Link>
        </nav>
      </div>
    </footer>
  );
}
