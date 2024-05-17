"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Empty from "../components/Empty";
import MentorBoxDashboard from "./MentorBoxDashboard";

interface Mentor {
  id: string;
  full_name: string;
  email: string;
  company: string;
  specialty: string;
  bio: string;
  photo: string;
  mentees: string[] | null;
  reviews: number;
  sessions: number;
  created_at: string;
  updated_at: string;
}

interface MentorApplied {
  id: string;
  mentor: Mentor;
  user_id: string;
}

export default function MentorDashboard({ data }: { data: MentorApplied[] }) {
  const empty = false;
  const [completed, setCompleted] = useState(false);

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
            {data.map((mentor) => (
              <MentorBoxDashboard
                imageUrl={mentor.mentor.photo}
                date="Thu, 09 May"
                time="08.30 - 11.00"
                mentorName={mentor.mentor.full_name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
