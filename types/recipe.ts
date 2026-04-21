export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: Difficulty;
  ingredients: string[];
  instructions: string[];
}

export type NewRecipe = Omit<Recipe, "id">;
