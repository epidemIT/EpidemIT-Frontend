"use client";
import Sidebar from "./Sidebar";
import Empty from "./Empty";
import ProjectBoxDashboard, {
  ProjectBoxDashboardProps,
} from "./ProjectBoxDashboard";
import { useState } from "react";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  const empty = false;

  const data: ProjectBoxDashboardProps[] = [
    {
      imageUrl: "/home-credit.png",
      projectName: "Project Name",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      progress: 30,
    },

    {
      imageUrl: "/home-credit.png",
      projectName: "Project Name",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      progress: 50,
    },

    {
      imageUrl: "/home-credit.png",
      projectName: "Project Name",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      progress: 70,
    },
  ];

  const [completed, setCompleted] = useState(false);

  return (
    <div className="min-h-screen flex gap-16 text-primary ">
      <Sidebar active="projects" />

      <div className="flex flex-col px-[5%] w-full md:w-3/5">
        <div className={`w-full pt-[5%] mb-12 text-xl md:text-2xl flex gap-12`}>
          <p
            className={`${
              completed ? "text-[#8C8C8C]" : "text-primary underline"
            }  cursor-pointer `}
            onClick={() => setCompleted(false)}
          >
            Enrolled Projects
          </p>

          <p
            className={`${
              !completed ? "text-[#8C8C8C]" : "text-primary underline"
            } cursor-pointer`}
            onClick={() => setCompleted(true)}
          >
            Completed Project
          </p>
        </div>

        {data.length == 0 ? (
          <Empty />
        ) : (
          <div className="flex flex-col gap-8">
            {data.map((project: ProjectBoxDashboardProps, index: number) => (
              <ProjectBoxDashboard key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
