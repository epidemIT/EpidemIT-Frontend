interface SkillsProps {
  skills: string;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="py-2 px-4 text-sm rounded-full w-fit bg-secondary-dark text-white">
      <p>{skills}</p>
    </div>
  );
}
