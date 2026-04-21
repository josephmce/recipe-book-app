interface IngredientListProps {
  ingredients: string[];
}

export default function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold text-zinc-900">Ingredients</h2>
      <ul className="list-disc space-y-1 pl-5 text-zinc-700">
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
}
