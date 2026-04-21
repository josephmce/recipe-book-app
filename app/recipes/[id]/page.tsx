import { notFound } from "next/navigation";

import IngredientList from "@/components/IngredientList";
import InstructionList from "@/components/InstructionList";
import { getRecipeById } from "@/lib/recipes";

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return (
    <article className="space-y-6 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">{recipe.title}</h1>
        <p className="text-zinc-600">{recipe.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-zinc-500">
          <span>Difficulty: {recipe.difficulty}</span>
          <span>Prep: {recipe.prepTimeMinutes} min</span>
          <span>Cook: {recipe.cookTimeMinutes} min</span>
          <span>Servings: {recipe.servings}</span>
        </div>
      </header>

      <IngredientList ingredients={recipe.ingredients} />
      <InstructionList instructions={recipe.instructions} />
    </article>
  );
}
