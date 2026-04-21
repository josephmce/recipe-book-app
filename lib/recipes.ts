import { Recipe } from "@/types/recipe";

const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Pancakes",
    description: "Fluffy pancakes for an easy breakfast.",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 1/2 cups flour",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1 1/4 cups milk",
      "1 egg",
      "2 tbsp melted butter",
    ],
    instructions: [
      "Whisk dry ingredients in a bowl.",
      "Mix milk, egg, and melted butter in a second bowl.",
      "Combine wet and dry ingredients until just mixed.",
      "Cook 1/4 cup batter per pancake on a hot skillet until golden.",
    ],
  },
  {
    id: "2",
    title: "Simple Tomato Pasta",
    description: "A quick weeknight pasta with tomato and garlic.",
    prepTimeMinutes: 8,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "8 oz spaghetti",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 can crushed tomatoes",
      "Salt and pepper to taste",
      "Fresh basil (optional)",
    ],
    instructions: [
      "Cook spaghetti according to package directions.",
      "Warm olive oil in a pan and cook garlic for 30 seconds.",
      "Add tomatoes, simmer for 10 minutes, and season.",
      "Toss pasta with sauce and garnish with basil.",
    ],
  },
  {
    id: "3",
    title: "Roasted Veggie Bowl",
    description: "Colorful vegetables over grains with a lemon drizzle.",
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    servings: 3,
    difficulty: "Medium",
    ingredients: [
      "1 cup cooked quinoa",
      "1 zucchini, chopped",
      "1 bell pepper, chopped",
      "1 cup broccoli florets",
      "2 tbsp olive oil",
      "Juice of 1 lemon",
    ],
    instructions: [
      "Heat oven to 425°F (220°C).",
      "Toss vegetables with olive oil, salt, and pepper.",
      "Roast for 20 to 25 minutes until tender.",
      "Serve over quinoa and finish with lemon juice.",
    ],
  },
];

export function getRecipes(): Recipe[] {
  return recipes;
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
