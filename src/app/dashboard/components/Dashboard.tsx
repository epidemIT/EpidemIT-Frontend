"use client";
import LevelBox from "./LevelBox";
import ProjectBoxDashboard from "./ProjectBoxDashboard";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex gap-4 lg:gap-12 text-primary">
      <Sidebar active="dashboard" />

      <div className="flex flex-col w-4/5">
        <div className="px-[5%] py-[10%] lg:py-[8%] w-full flex flex-col gap-2 md:gap-4">
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
            project={{
              id: "978e6a2a-9715-4bd6-97d1-64c1c369eaf8",
              image_url: "https://i.pinimg.com/564x/62/38/dc/6238dc40add8eae74709ca45e94e4cee.jpg",
              name: "Data Scientist - Beginner",
              partner_name: "Tokopedia",
              deadline: "Deadline",
              users: ["Users"],
              skills: ["Skills"],
              created_at: "Date",
              updated_at: "Date",
              project_description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              partner_description:
                "This project involves beginner-level data science training for Tokopedia. Participants will learn beginner techniques and tools for data science and analytics.",
            }}
            progress={71}
          />
        </div>

        <div className="px-[5%] py-[2.5%] w-full flex flex-col gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Explore Proyek Terkini
          </h1>

          <ProjectBoxDashboard
            project={{
              id: "978e6a2a-9715-4bd6-97d1-64c1c369eaf8",
              image_url: "https://i.pinimg.com/564x/c8/14/3d/c8143d4f565efb867f6565eb6c690fb6.jpg",
              name: "Data Analysis Dashboard - Beginner",
              partner_name: "Data Insights",
              deadline: "Deadline",
              users: ["Users"],
              skills: ["Skills"],
              created_at: "Date",
              updated_at: "Date",
              project_description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              partner_description:
                "This project involves beginner-level data analysis training for Data Insights. Participants will learn beginner techniques and tools for data science and analytics.",
            }}
            progress={71}
          />
        </div>
      </div>
    </div>
  );
}
