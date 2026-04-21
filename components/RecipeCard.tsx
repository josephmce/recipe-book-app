import Link from "next/link";

import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-zinc-900">{recipe.title}</h2>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
          {recipe.difficulty}
        </span>
      </div>
      <p className="mb-4 text-sm text-zinc-600">{recipe.description}</p>
      <div className="mb-4 flex flex-wrap gap-3 text-xs text-zinc-500">
        <span>Prep: {recipe.prepTimeMinutes} min</span>
        <span>Cook: {recipe.cookTimeMinutes} min</span>
        <span>Serves: {recipe.servings}</span>
      </div>
      <Link
        href={`/recipes/${recipe.id}`}
        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
      >
        View recipe →
      </Link>
    </article>
  );
}
