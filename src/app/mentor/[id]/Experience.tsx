interface ExperienceProps {
  title: string;
  year: string;
  description: string;
}

export default function Experience({
  title,
  year,
  description,
}: ExperienceProps) {
  return (
    <div className="bg-slate-100 w-full rounded-lg p-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-gray-400">{year}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
