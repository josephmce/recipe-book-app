import Link from "next/link";

import Button from "@/components/Button";
import RecipeList from "@/components/RecipeList";
import { getRecipes } from "@/lib/recipes";

export default function RecipesPage() {
  const recipes = getRecipes();

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">All Recipes</h1>
          <p className="text-zinc-600">Explore beginner-friendly recipes.</p>
        </div>
        <Link href="/recipes/new">
          <Button>Add recipe</Button>
        </Link>
      </div>

      <RecipeList recipes={recipes} />
    </section>
  );
}
