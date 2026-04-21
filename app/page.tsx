import Link from "next/link";

export default function HomePage() {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">Recipe Book App</p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900">Keep your favorite recipes in one place</h1>
      <p className="mb-8 max-w-2xl text-zinc-600">
        Browse sample recipes, open detailed instructions, and add your own ideas using a simple form.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/recipes"
          className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
        >
          View recipes
        </Link>
        <Link
          href="/recipes/new"
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-zinc-300 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
        >
          Add a recipe
        </Link>
      </div>
    </section>
  );
}
