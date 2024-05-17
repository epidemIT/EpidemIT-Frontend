"use client";
import MentorBoxDashboard from "../mentor/MentorBoxDashboard";
import LevelBox from "./LevelBox";
import ProjectBoxDashboard from "./ProjectBoxDashboard";
import Sidebar from "./Sidebar";

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

export default function Dashboard({
  dataproject,
  datamentor,
}: {
  dataproject: ProjectProps[];
  datamentor: MentorApplied[];
}) {
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

          {dataproject.length === 0 ? (
            <p className="text-lg md:text-xl text-[#8C8C8C]">
              Kamu belum terdaftar di proyek manapun. Cari proyek yang sesuai
              dengan minatmu!
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {dataproject.map((project) => (
                <ProjectBoxDashboard
                  key={project.project.id}
                  isEnrolled={true}
                  project={project.project}
                  progress={project.progress}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-[5%] py-[2.5%] w-full flex flex-col gap-2 md:gap-8">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Upcoming Mentorship
          </h1>

          {datamentor.length === 0 ? (
            <p className="text-lg md:text-xl text-[#8C8C8C]">
              Kamu belum terdaftar di mentoring manapun. Cari mentor yang sesuai
              dengan minatmu!
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {datamentor.map((mentor) => (
                <MentorBoxDashboard
                  key={mentor.id}
                  imageUrl={mentor.mentor.photo}
                  date="Thu, 09 May"
                  time="08.30 - 11.00"
                  mentorName={mentor.mentor.full_name}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-[5%] py-[2.5%] w-full flex flex-col gap-2 md:gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Explore Proyek Terkini
          </h1>

          <ProjectBoxDashboard
            project={{
              id: "978e6a2a-9715-4bd6-97d1-64c1c369eaf8",
              image_url:
                "https://i.pinimg.com/564x/c8/14/3d/c8143d4f565efb867f6565eb6c690fb6.jpg",
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
            isEnrolled={false}
            progress={71}
          />
        </div>
      </div>
    </div>
  );
}
