import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Book App",
  description: "A beginner-friendly recipe app built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        <header className="border-b border-zinc-200 bg-white">
          <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold text-emerald-700">
              Recipe Book
            </Link>
            <div className="flex items-center gap-5 text-sm font-medium text-zinc-700">
              <Link href="/recipes" className="hover:text-zinc-900">
                Recipes
              </Link>
              <Link href="/recipes/new" className="hover:text-zinc-900">
                Add New
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
