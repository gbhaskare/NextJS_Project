import type { Metadata } from "next";

export const metadata: Metadata = { title: "Log in", description: "Sign in to TechStore or continue as a guest." };

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
