"use client";
import Sidebar from "./Sidebar";
import Empty from "./Empty";
import ProjectBoxDashboard from "./ProjectBoxDashboard";
import { useState } from "react";
import Link from "next/link";

interface ProjectProps {
  project: {
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
  };
  progress: number;
}

const Project = ({ data }: { data: ProjectProps[] }) => {
  const empty = false;

  const [completed, setCompleted] = useState(false);

  return (
    <div className="min-h-screen flex gap-2 md:gap-16 text-primary ">
      <Sidebar active="projects" />

      <div className="flex flex-col px-[5%] w-full md:w-[70%]">
        <div
          className={`w-full pt-[5%] mb-4 font-bold md:mb-12 text-md md:text-2xl flex gap-4 md:gap-12`}
        >
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
            Completed Projects
          </p>
        </div>

        {data.length == 0 ? (
          <Empty />
        ) : (
          <div className="flex flex-col gap-8">
            {data.map((el, index: number) => (
              <Link key={index} href={`/dashboard/projects/${el.project.id}`}>
                <ProjectBoxDashboard
                  project={el.project}
                  progress={el.progress}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
