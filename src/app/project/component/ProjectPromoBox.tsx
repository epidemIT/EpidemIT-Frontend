import Image from "next/image";
import Skills from "./Skills";

interface ProjectPromoBoxProps {
  imageUrl: string;
  projectName: string;
  projectCompany: string;
  deadline: string;
  skills: string[];
}

export default function ProjectPromoBox({
  imageUrl,
  projectName,
  projectCompany,
  deadline,
  skills,
}: ProjectPromoBoxProps) {
  return (
    <div className="flex gap-8 w-fit h-fit py-6 px-[2%] shadow-lg rounded-lg">
      <div className="flex flex-col justify-center">
        <Image src={imageUrl} width={100} height={48} alt="Logo" />
      </div>

      <div className="flex w-full flex-col gap-4 justify-center">
        <h1 className="font-semibold text-xl">{projectName}</h1>

        <h3 className="text-gray-500">{projectCompany}</h3>

        <p>
          Deadline : <span className="font-semibold">{deadline}</span>
        </p>

        <div className="flex w-full flex-wrap gap-2">
          {skills.map((skill) => (
            <Skills key={skill} skills={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
