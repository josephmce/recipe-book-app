"use client";

import { useState } from "react";

import RecipeForm from "@/components/RecipeForm";
import { NewRecipe } from "@/types/recipe";

export default function NewRecipePage() {
  const [saved, setSaved] = useState<NewRecipe | null>(null);

  const handleSubmit = (recipe: NewRecipe) => {
    setSaved(recipe);
  };

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Add a new recipe</h1>
        <p className="text-zinc-600">
          Fill out this form to draft a recipe. For now, this beginner project previews data without a backend.
        </p>
      </div>

      <RecipeForm onSubmit={handleSubmit} />

      {saved && (
        <aside className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
          <p className="font-semibold text-emerald-800">Recipe saved in memory for this session:</p>
          <p className="mt-1 text-sm text-emerald-700">{saved.title}</p>
        </aside>
      )}
    </section>
  );
}
