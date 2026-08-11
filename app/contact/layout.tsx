import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact TechStore", description: "Contact the TechStore team with a product question or feedback." };

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
