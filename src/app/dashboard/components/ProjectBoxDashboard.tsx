import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

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
}: {
  project: ProjectProps;
  progress: number;
}) {
  return (
    <div className="rounded-lg shadow-lg flex gap-8 p-5 w-full items-center">
      <Image
        src={project?.image_url}
        width={170}
        height={140}
        alt="Logo"
        className="rounded-lg"
      />

      <div className="flex justify-between w-4/5 items-center">
        <div>
          <p className="text-xl font-semibold">{project?.name}</p>
          <p className="text-lg text-[#8C8C8C]">{project?.partner_name}</p>
          <p className="text-[#8C8C8C]">
            {project?.partner_description?.length > 100
              ? `${project?.partner_description?.substring(0, 100)}...`
              : project?.partner_description}
          </p>

          {progress ? (
            <>
              <p className="font-semibold mt-4">Progress</p>
              <ProgressBar
                completed={progress * 100}
                bgColor="#119ABE"
                height="10px"
                isLabelVisible={false}
              />
              <p>{progress * 100}%</p>
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
