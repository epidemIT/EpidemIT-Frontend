"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import MentorBox from "./MentorBox";
import Link from "next/link";

export default function MentorPage() {
  const data = [
    {
      imageUrl: "/gibs.jpeg",
      name: "Gibran Fasha Ghazanfar",
      title: "Software Engineer at OCBC",
      reviews: 14,
      sessions: 15,
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/d0/05/db/d005dbd521d642d9dfba7bc63c734c19.jpg",
      name: "John Sinabutar",
      title: "Software Engineer at Gojek",
      reviews: 20,
      sessions: 10,
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/5e/96/4b/5e964b4d1a6a514bf141c694f5037537.jpg",
      name: "Nicholas Hutagalung",
      title: "UI/UX Designer at DANA",
      reviews: 10,
      sessions: 4,
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/d1/9a/89/d19a89e479823e4ec4938b82541c3e5e.jpg",
      name: "Syahrial Alzaidan",
      title: "Software Engineer at Meta",
      reviews: 10,
      sessions: 14,
    },
    {
      imageUrl: "/bewok.jpeg",
      name: "Auvarifqi Putra Diandra",
      title: "Data Scientist at Kalbe",
      reviews: 2,
      sessions: 10,
    },
    {
      imageUrl:
        "/niggs.svg",
      name: "Draymond Blue",
      title: "Data Engineer at Google",
      reviews: 20,
      sessions: 10,
    },
  ];

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
          <h1 className="text-4xl font-semibold">
            Find Mentors Just For You!
          </h1>

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

        <div className="flex flex-wrap gap-12 justify-around">
          {data.map((mentor, index) => (
            <MentorBox
              key={index}
              imageUrl={mentor.imageUrl}
              name={mentor.name}
              title={mentor.title}
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
