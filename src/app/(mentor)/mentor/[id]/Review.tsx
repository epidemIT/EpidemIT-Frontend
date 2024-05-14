interface ExperienceProps {
  name: string;
  review: string;
}

export default function Review({ name, review }: ExperienceProps) {
  return (
    <div className="bg-slate-100 w-full rounded-lg p-4">
      <div className="flex flex-col gap-2 justify-between">
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="text-gray-400">{review}</p>
      </div>
    </div>
  );
}
