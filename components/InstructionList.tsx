interface InstructionListProps {
  instructions: string[];
}

export default function InstructionList({ instructions }: InstructionListProps) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold text-zinc-900">Instructions</h2>
      <ol className="list-decimal space-y-2 pl-5 text-zinc-700">
        {instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
    </section>
  );
}
