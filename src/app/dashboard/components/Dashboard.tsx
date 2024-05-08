"use client";
import LevelBox from "./LevelBox";
import ProjectBoxDashboard from "./ProjectBoxDashboard";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex gap-4 lg:gap-12 text-primary">
      <Sidebar active="dashboard" />

      <div className="flex flex-col w-4/5">
        <div className="px-[5%] py-[2.5%] w-full flex flex-col gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Progress Belajar
          </h1>

          <LevelBox level={1} remaining={3000} />
        </div>

        <div className="px-[5%] py-[2.5%] w-full flex flex-col gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Lanjutkan Belajar
          </h1>

          <ProjectBoxDashboard
            imageUrl="/home-credit.png"
            projectName="Project Name"
            company="Company Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            progress={30}
          />
        </div>

        <div className="px-[5%] py-[2.5%] w-full flex flex-col gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Explore Proyek Terkini
          </h1>

          <ProjectBoxDashboard
            imageUrl="/home-credit.png"
            projectName="Project Name"
            company="Company Name"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
}
