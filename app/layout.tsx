import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rajat Singh — PM & builder",
  description:
    "Product Manager. 5 years shipping at Microsoft (Viva Goals → Copilot) and an AI healthcare startup. CS undergrad, MBA at Foster.",
  openGraph: {
    title: "Rajat Singh — PM & builder",
    description:
      "Product Manager. 5 years shipping at Microsoft. Building side projects while recruiting for PM and forward-deployed roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 border-b border-[color:var(--subtle)] bg-[color:var(--background)]/85 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between gap-4 text-sm">
            <Link
              href="/"
              className="font-serif text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Rajat Singh
            </Link>
            <div className="flex items-center gap-4 sm:gap-6 text-[color:var(--muted)]">
              <Link
                href="/projects"
                className="link-animated hover:text-[color:var(--foreground)] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="link-animated hover:text-[color:var(--foreground)] transition-colors"
              >
                About
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-animated hover:text-[color:var(--foreground)] transition-colors"
              >
                Resume
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-1 w-full">{children}</main>
        <footer className="mt-24 border-t border-[color:var(--subtle)]">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[color:var(--muted)]">
            <span>© Rajat Singh</span>
            <div className="flex items-center gap-5">
              <a
                href="mailto:rajatsingh2208@gmail.com"
                className="link-animated hover:text-[color:var(--foreground)] transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/rajatsingh22"
                target="_blank"
                rel="noopener noreferrer"
                className="link-animated hover:text-[color:var(--foreground)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rajat2208/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-animated hover:text-[color:var(--foreground)] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
