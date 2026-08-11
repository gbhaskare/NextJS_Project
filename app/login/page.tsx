"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { continueAsGuest, isGuest, login, name, logout } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); login(displayName); router.push("/products"); };

  if (name || isGuest) return <main className="mx-auto max-w-lg px-4 py-20 sm:px-6"><div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"><p className="section-kicker">Account</p><h1 className="mt-3 text-3xl font-black">{name ? `Welcome, ${name}` : "Browsing as guest"}</h1><p className="mt-4 text-slate-600">This demo keeps account state only in the current browser session.</p><button className="button-primary mt-7" onClick={() => { logout(); router.push("/"); }} type="button">Sign out</button></div></main>;

  return <main className="mx-auto max-w-lg px-4 py-20 sm:px-6"><div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"><p className="section-kicker">Account</p><h1 className="mt-3 text-3xl font-black tracking-tight">Welcome back.</h1><p className="mt-3 text-slate-600">This is a frontend-only sign-in demonstration.</p><form className="mt-8 grid gap-5" onSubmit={submit}><label className="grid gap-2 text-sm font-bold text-slate-700">Name<input autoComplete="name" className="field" onChange={(event) => setDisplayName(event.target.value)} placeholder="Your name" required value={displayName} /></label><label className="grid gap-2 text-sm font-bold text-slate-700">Email<input autoComplete="email" className="field" placeholder="you@example.com" required type="email" /></label><button className="button-primary" type="submit">Sign in (demo)</button></form><div className="my-6 flex items-center gap-3 text-sm text-slate-400"><span className="h-px flex-1 bg-slate-200" />or<span className="h-px flex-1 bg-slate-200" /></div><button className="button-secondary w-full" onClick={() => { continueAsGuest(); router.push("/products"); }} type="button">Continue as guest</button></div></main>;
}
