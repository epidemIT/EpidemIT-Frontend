"use client";
import Navbar from "@/components/Navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";

export default function ProjectContent() {
  const progress = 52;
  return (
    <div className="py-8 px-[11%]">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="w-full flex gap-16">
        <div className="w-2/5 flex flex-col gap-12 mt-12">
          <div>
            <h1 className="text-2xl font-bold">Project Name</h1>
            <p className="text-gray-500 text-lg">Project Company</p>
          </div>

          <div className="bg-[#FBFBFB] rounded-lg">
            <div className="p-6 cursor-pointer text-lg border-b-2">
              <p>Minggu 1</p>
            </div>
            <div className="p-6 cursor-pointer text-lg border-b-2">
              <p>Minggu 2</p>
            </div>
            <div className="p-6 cursor-pointer text-lg border-b-2">
              <p>Minggu 3</p>
            </div>
            <div className="p-6 cursor-pointer text-lg">
              <p>Minggu 4</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl flex justify-between">
              <p className="font-semibold">Progress</p>

              <p className="text-gray-500">58%</p>
            </div>

            <ProgressBar
              completed={progress}
              bgColor={progress < 50 ? "#FF0000" : "#00FF00"}
              height="16px"
              isLabelVisible={false}
            />
          </div>
        </div>

        <div className="w-3/5 flex flex-col justify-between">
          <div>
            {/* cms shit */}
            <div className="flex justify-between mt-12 items-center">
              <h1 className="text-2xl font-bold">Project Description</h1>
              <Image src="/tts.svg" width={30} height={50} alt="Logo" />
            </div>
            <p className="text-gray-500 text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt, nunc nec aliquet ultricies, nunc eros ultrices nisi,
              vel tincidunt risus justo sit amet nunc. Nulla facilisi. Sed ac
              odio placerat, aliquam nunc nec, ultrices nunc. Nullam ut nisl ac
              lacus ultricies tincidunt. Donec auctor, purus vel ultricies
              consectetur, tortor libero aliquam justo, ac ultricies urna lacus
              in nulla.
            </p>
          </div>

          <button className="bg-primary py-2 px-4 w-32 text-white rounded-lg">
            Summarize !
          </button>
        </div>
      </div>
    </div>
  );
}
