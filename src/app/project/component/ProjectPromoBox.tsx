"use client";
import Image from "next/image";
import Skills from "./Skills";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/project/1");
      }}
      className="flex gap-8 w-[450px] h-[250px] cursor-pointer py-6 px-[2%] shadow-lg rounded-lg"
    >
      <div className="flex flex-col justify-center">
        <Image src={imageUrl} width={100} height={48} alt="Logo" />
      </div>

      <div className="flex w-full flex-col gap-4 justify-center">
        <h1 className="font-semibold text-xl">{projectName}</h1>

        <h3 className="text-gray-500">{projectCompany}</h3>

        <p>
          Total Jam Belajar : <span className="font-semibold">{deadline}</span>
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
