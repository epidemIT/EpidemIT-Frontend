"use client";
import Sidebar from "./Sidebar";
import Empty from "./Empty";
import ProjectBoxDashboard from "./ProjectBoxDashboard";
import { useState } from "react";

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
    <div className="min-h-screen flex gap-16 text-primary">
      <Sidebar active="projects" />

      <div className="flex flex-col px-[5%] w-3/5">
        <div className={`w-3/4 pt-[5%] mb-12 text-2xl flex gap-12`}>
          <p
            className={`${
              completed ? "text-[#8C8C8C]" : "text-primary underline"
            }  cursor-pointer`}
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
            {data.map((el, index: number) => (
              <ProjectBoxDashboard
                key={index}
                project={el.project}
                progress={el.progress}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
