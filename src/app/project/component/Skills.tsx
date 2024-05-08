interface SkillsProps {
  skills: string;
  color?: string;
}

export default function Skills({ skills, color }: SkillsProps) {
  return (
    <div
      className={`py-2 px-4 text-sm rounded-full w-fit ${
        color ? `bg-[#${color}]` : "bg-secondary-dark"
      } text-white`}
    >
      <p>{skills}</p>
    </div>
  );
}
