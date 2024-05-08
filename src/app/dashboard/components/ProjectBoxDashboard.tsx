import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export interface ProjectBoxDashboardProps {
  imageUrl: string;
  projectName: string;
  company: string;
  description: string;
  progress?: number;
}

export default function ProjectBoxDashboard({
  imageUrl,
  projectName,
  company,
  description,
  progress,
}: ProjectBoxDashboardProps) {
  return (
    <div className="rounded-lg shadow-lg md:flex gap-8 p-5 w-full items-center">
      <Image
        src={imageUrl}
        width={170}
        height={140}
        alt="Logo"
        className="rounded-lg mb-2 w-20 h-20 md:w-40 md:h-40"
      />

      <div className="flex justify-between w-full md:w-4/5 items-center">
        <div>
          <p className="text-lg md:text-xl font-semibold">{projectName}</p>
          <p className="text-md md:text-lg text-[#8C8C8C] mb-2">{company}</p>
          <p className="text-sm md:text-md text-[#8C8C8C] w-[90%] md:w-full">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>

          {progress ? (
            <>
              <p className="font-semibold mt-4">Progress</p>
              <ProgressBar
                completed={progress}
                bgColor="#119ABE"
                height="10px"
                isLabelVisible={false}
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
