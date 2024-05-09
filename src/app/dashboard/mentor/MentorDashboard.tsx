"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Empty from "../components/Empty";
import MentorBoxDashboard from "./MentorBoxDashboard";

export default function MentorDashboard() {
  const empty = false;
  const [completed, setCompleted] = useState(false);

  const data = [
    {
      project: {
        id: "1",
        title: "Project 1",
        description: "Description 1",
        users: ["User 1", "User 2"],
        skills: ["Skill 1", "Skill 2"],
        created_at: "2021-09-01",
        updated_at: "2021-09-01",
      },
      progress: 50,
    },
    {
      project: {
        id: "2",
        title: "Project 2",
        description: "Description 2",
        users: ["User 1", "User 2"],
        skills: ["Skill 1", "Skill 2"],
        created_at: "2021-09-01",
        updated_at: "2021-09-01",
      },
      progress: 100,
    },
  ];

  return (
    <div className="min-h-screen flex gap-2 md:gap-16 text-primary ">
      <Sidebar active="mentors" />

      <div className="flex flex-col px-[5%] w-full md:w-[70%] py-20">
        <h1 className="font-semibold text-4xl">MentorMiit</h1>
        <div
          className={`w-full pt-[5%] mb-4 font-bold md:mb-12 text-md md:text-2xl flex gap-4 md:gap-12`}
        >
          <p
            className={`${
              completed ? "text-[#8C8C8C]" : "text-primary underline"
            }  cursor-pointer `}
            onClick={() => setCompleted(false)}
          >
            Upcoming
          </p>

          <p
            className={`${
              !completed ? "text-[#8C8C8C]" : "text-primary underline"
            } cursor-pointer`}
            onClick={() => setCompleted(true)}
          >
            History
          </p>
        </div>

        {data.length == 0 ? (
          <Empty />
        ) : (
          <div className="flex flex-col gap-12">
            <MentorBoxDashboard
              imageUrl="/bewok.jpeg"
              date="Thu, 09 May"
              time="08.30 - 11.00"
              mentorName="Auvarifqi Putra"
            />
          </div>
        )}
      </div>
    </div>
  );
}
