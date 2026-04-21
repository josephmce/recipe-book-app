"use client";

import { FormEvent, useState } from "react";

import { Difficulty, NewRecipe } from "@/types/recipe";

import Button from "./Button";

const defaultRecipe: NewRecipe = {
  title: "",
  description: "",
  prepTimeMinutes: 10,
  cookTimeMinutes: 20,
  servings: 2,
  difficulty: "Easy",
  ingredients: [""],
  instructions: [""],
};

interface RecipeFormProps {
  onSubmit: (recipe: NewRecipe) => void;
}

export default function RecipeForm({ onSubmit }: RecipeFormProps) {
  const [recipe, setRecipe] = useState<NewRecipe>(defaultRecipe);

  const updateArrayField = (
    key: "ingredients" | "instructions",
    index: number,
    value: string,
  ) => {
    setRecipe((current) => {
      const next = [...current[key]];
      next[index] = value;
      return { ...current, [key]: next };
    });
  };

  const addArrayField = (key: "ingredients" | "instructions") => {
    setRecipe((current) => ({ ...current, [key]: [...current[key], ""] }));
  };

  const removeArrayField = (key: "ingredients" | "instructions", index: number) => {
    setRecipe((current) => ({
      ...current,
      [key]: current[key].filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanedRecipe: NewRecipe = {
      ...recipe,
      ingredients: recipe.ingredients.map((item) => item.trim()).filter(Boolean),
      instructions: recipe.instructions.map((item) => item.trim()).filter(Boolean),
    };

    onSubmit(cleanedRecipe);
    setRecipe(defaultRecipe);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-800">Recipe title</span>
          <input
            required
            value={recipe.title}
            onChange={(event) => setRecipe((current) => ({ ...current, title: event.target.value }))}
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>

        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-800">Difficulty</span>
          <select
            value={recipe.difficulty}
            onChange={(event) =>
              setRecipe((current) => ({ ...current, difficulty: event.target.value as Difficulty }))
            }
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-zinc-800">Description</span>
        <textarea
          required
          rows={3}
          value={recipe.description}
          onChange={(event) => setRecipe((current) => ({ ...current, description: event.target.value }))}
          className="w-full rounded-md border border-zinc-300 px-3 py-2"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-800">Prep time (min)</span>
          <input
            min={0}
            type="number"
            value={recipe.prepTimeMinutes}
            onChange={(event) =>
              setRecipe((current) => ({ ...current, prepTimeMinutes: Number(event.target.value) }))
            }
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>

        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-800">Cook time (min)</span>
          <input
            min={0}
            type="number"
            value={recipe.cookTimeMinutes}
            onChange={(event) =>
              setRecipe((current) => ({ ...current, cookTimeMinutes: Number(event.target.value) }))
            }
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>

        <label className="space-y-1">
          <span className="text-sm font-medium text-zinc-800">Servings</span>
          <input
            min={1}
            type="number"
            value={recipe.servings}
            onChange={(event) => setRecipe((current) => ({ ...current, servings: Number(event.target.value) }))}
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
      </div>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-zinc-900">Ingredients</h2>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={`ingredient-${index}`} className="flex gap-2">
            <input
              required
              value={ingredient}
              onChange={(event) => updateArrayField("ingredients", index, event.target.value)}
              className="w-full rounded-md border border-zinc-300 px-3 py-2"
              placeholder={`Ingredient ${index + 1}`}
            />
            {recipe.ingredients.length > 1 && (
              <Button type="button" variant="secondary" onClick={() => removeArrayField("ingredients", index)}>
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button type="button" variant="secondary" onClick={() => addArrayField("ingredients")}>
          Add ingredient
        </Button>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-zinc-900">Instructions</h2>
        {recipe.instructions.map((instruction, index) => (
          <div key={`instruction-${index}`} className="flex gap-2">
            <input
              required
              value={instruction}
              onChange={(event) => updateArrayField("instructions", index, event.target.value)}
              className="w-full rounded-md border border-zinc-300 px-3 py-2"
              placeholder={`Step ${index + 1}`}
            />
            {recipe.instructions.length > 1 && (
              <Button
                type="button"
                variant="secondary"
                onClick={() => removeArrayField("instructions", index)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button type="button" variant="secondary" onClick={() => addArrayField("instructions")}>
          Add step
        </Button>
      </section>

      <Button type="submit">Save recipe</Button>
    </form>
  );
}
