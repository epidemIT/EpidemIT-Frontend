import ProgressBar from "@ramonak/react-progress-bar";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

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
    <div className="rounded-lg shadow-lg flex gap-8 p-5 w-full items-center">
      <Image
        src={imageUrl}
        width={140}
        height={140}
        alt="Logo"
        className="rounded-lg"
      />

      <div className="flex justify-between w-4/5 items-center">
        <div>
          <p className="text-xl font-semibold">{projectName}</p>
          <p className="text-lg text-[#8C8C8C]">{company}</p>
          <p className="text-[#8C8C8C]">
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
        <BsArrowRight className="text-4xl cursor-pointer" />
      </div>
    </div>
  );
}
