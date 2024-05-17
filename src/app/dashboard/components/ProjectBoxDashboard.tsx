"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ProjectProps {
  id: string;
  name: string;
  project_description: string;
  deadline: string;
  image_url: string;
  partner_name: string;
  partner_description: string;
  users: string[];
  skills: string[];
  created_at: string;
  updated_at: string;
}

export default function ProjectBoxDashboard({
  project,
  progress,
  isEnrolled,
}: {
  project: ProjectProps;
  progress: number;
  isEnrolled: boolean;
}) {
  const router = useRouter();

  return (
    <div 
    onClick={() => router.push(`/dashboard/project/${project?.id}`)}
    className="rounded-lg cursor-pointer shadow-lg md:flex gap-8 p-5 w-full items-center">
      <Image
        src={project?.image_url}
        width={170}
        height={140}
        alt="Logo"
        className="rounded-lg mb-2 w-20 h-20 md:w-40 md:h-40"
      />

      <div className="flex justify-between w-full md:w-4/5 items-center">
        <div>
          <p className="text-lg md:text-xl font-semibold">{project?.name}</p>
          <p className="text-md md:text-lg text-[#8C8C8C] mb-2">
            {project?.partner_name}
          </p>
          <p className="text-sm md:text-md text-[#8C8C8C] w-[90%] md:w-full">
            {project?.partner_description?.length > 100
              ? `${project?.partner_description?.substring(0, 100)}...`
              : project?.partner_description}
          </p>
          {isEnrolled  ? (
            <>
              <p className="font-semibold mt-4">Progress</p>
              <ProgressBar
                completed={progress}
                bgColor="#119ABE"
                height="18px"
                isLabelVisible={true}
              />
            </>
          ) : (
            <button className="bg-[#FF6B2D] px-4 py-2 rounded-full mt-2 text-white">
              <span>Daftar Sekarang {">"}</span>
            </button>
          )}
        </div>
        <FaChevronRight className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
}
