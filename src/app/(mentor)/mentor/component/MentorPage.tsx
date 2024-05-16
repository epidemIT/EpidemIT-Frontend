"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import MentorBox from "./MentorBox";
import Link from "next/link";

interface Mentor {
  id: string;
  full_name: string;
  email: string;
  company: string;
  specialty: string;
  bio: string;
  photo: string;
  reviews: number;
  sessions: number;
  mentees: string[] | null;
  created_at: string;
  updated_at: string;
}

interface MentorPageProps {
  data: Mentor[];
}

export default function MentorPage({ data }: MentorPageProps) {


  return (
    <>
      <div className="flex flex-col gap-12 mt-44 justify-start w-full">
        {/* box for promo */}
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:items-center justify-between rounded-lg text-white py-6 lg:py-16 px-7 lg:px-14 h-fit lg:h-96 bg-no-repeat bg-cover bg-[url('/proj-bg.svg')]">
          <div className="flex flex-col gap-8 lg:w-2/5">
            <h1 className="text-4xl lg:text-6xl font-medium">MentorMiit</h1>
            <p className="text-secondary text-xl lg:text-2xl font-semibold">
              Guiding Your Growth; Elevate Your Skills with Expert Mentors!
            </p>
          </div>

          <Link
            href={"/dashboard/mentor"}
            className="px-4 py-2 bg-secondary-dark rounded-full text-xl font-semibold"
          >
            My Schedule
          </Link>
        </div>

        {/* search & filter area */}

        <div className="flex lg:items-center gap-10 lg:flex-row flex-col justify-between">
          <h1 className="text-4xl font-semibold">Find Mentors Just For You!</h1>

          <div className="flex md:flex-row  lg:items-center gap-6">
            <div className="shadow-md flex items-center gap-2 rounded-full px-4 py-2 bg-white">
              <AiOutlineSearch className="text-4xl" />
              <input
                type="text"
                placeholder="Search Mentors"
                className="w-full bg-transparent outline-none"
              />
              <button className="px-4 py-2 bg-secondary-dark rounded-full text-white font-semibold">
                Search
              </button>
            </div>

            <div className="flex gap-4 justify-end">
              <div className="bg-[#119ABE] flex items-center rounded-lg p-1">
                <CgSortAz className="text-4xl text-white" />
              </div>

              <div className="bg-[#119ABE] flex items-center rounded-lg p-1">
                <CiFilter className="text-4xl text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* project box section */}

        <div className="flex flex-wrap gap-16 justify-around">
          {data.map((mentor, index) => (
            <MentorBox
              key={index}
              id={mentor.id}
              imageUrl={mentor.photo}
              name={mentor.full_name}
              title={mentor.specialty}
              company={mentor.company}
              reviews={mentor.reviews}
              sessions={mentor.sessions}
            />
          ))}
        </div>

        {/* Footer */}
      </div>
    </>
  );
}
