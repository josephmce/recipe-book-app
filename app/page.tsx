import Link from "next/link";

import Button from "@/components/Button";

export default function HomePage() {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">Recipe Book App</p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900">Keep your favorite recipes in one place</h1>
      <p className="mb-8 max-w-2xl text-zinc-600">
        Browse sample recipes, open detailed instructions, and add your own ideas using a simple form.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/recipes">
          <Button>View recipes</Button>
        </Link>
        <Link href="/recipes/new">
          <Button variant="secondary">Add a recipe</Button>
        </Link>
      </div>
    </section>
  );
}
