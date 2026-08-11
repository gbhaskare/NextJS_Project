import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "TechStore | Everyday technology, thoughtfully selected",
    template: "%s | TechStore",
  },
  description:
    "Discover reliable, modern electronics curated for work, play, and everyday life.",
  openGraph: {
    title: "TechStore | Everyday technology, thoughtfully selected",
    description: "Discover reliable, modern electronics curated for work, play, and everyday life.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TechStore electronics collection" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
