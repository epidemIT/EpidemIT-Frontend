"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import ProjectPromoBox from "../../project/component/ProjectPromoBox";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  let cb;
  cb = window.localStorage.getItem("cBlindKey") === "true";
  const [cblind, setCb] = useState<boolean | undefined>(cb);

  const data = [
    {
      imageUrl:
        "https://i.pinimg.com/564x/62/38/dc/6238dc40add8eae74709ca45e94e4cee.jpg",
      projectName: "Data Scientist - Beginner",
      projectCompany: "Tokopedia",
      deadline: "24 Hours",
      skills: ["AI/ML", "Sci-kit Learn", "SQL"],
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/49/a4/b3/49a4b376e8be067386d2b4c09a3537bc.jpg",
      projectName: "Mobile App Development - Advanced",
      projectCompany: "Innovate Inc.",
      deadline: "104 Hours",
      skills: ["React Native", "Firebase"],
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/c8/14/3d/c8143d4f565efb867f6565eb6c690fb6.jpg",
      projectName: "Data Analysis Dashboard - Beginner",
      projectCompany: "Data Insights",
      deadline: "16 Hours",
      skills: ["Python", "Pandas", "Matplotlib"],
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/ca/11/e0/ca11e0ef86216e8d6d56313d4297f95a.jpg",
      projectName: "UI/UX Design - Intermediate",
      projectCompany: "Design Solutions",
      deadline: "56 Hours",
      skills: ["Adobe XD", "Figma", "Sketch"],
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/42/19/a0/4219a093885df7a73674f591f6681556.jpg",
      projectName: "Blockchain Integration - Beginner",
      projectCompany: "CryptoTech",
      deadline: "24 Hours",
      skills: ["Solidity", "Web3.js", "Ethereum"],
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/7c/b0/c1/7cb0c1392bccbc0538606b6653677193.jpg",
      projectName: "AI Chatbot Development - Advanced",
      projectCompany: "Fuse",
      deadline: "112 Hours",
      skills: ["Python", "TensorFlow"],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-12 justify-start w-full mt-44">
        {/* box for promo */}
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:items-center justify-between rounded-lg text-white py-6 lg:py-16 px-7 lg:px-14 h-fit lg:h-96 bg-no-repeat bg-cover bg-[url('/proj-bg.svg')]">
          <div className="flex flex-col gap-8 lg:w-2/5">
            <h1 className="text-4xl lg:text-6xl font-medium">ProjectiT!</h1>
            <p
              className={`${
                !cblind ? "text-secondary-dark" : "text-orange-400"
              } text-xl lg:text-2xl font-semibold`}
            >
              Guiding Your Growth; Elevate Your Skills with Real Projects!
            </p>
          </div>

          <Link
            href="/dashboard/project"
            className={`px-4 py-2 ${
              !cblind ? "bg-secondary-dark" : "bg-orange-400"
            } rounded-full text-xl font-semibold`}
          >
            My Project
          </Link>
        </div>

        {/* search & filter area */}

        <div className="flex lg:items-center gap-10 lg:flex-row flex-col justify-between">
          <h1 className="text-4xl font-semibold">
            Find Projects Just For You!
          </h1>

          <div className="flex md:flex-row  lg:items-center gap-6">
            <div className="shadow-md flex items-center gap-2 rounded-full px-4 py-2 bg-white">
              <AiOutlineSearch className="text-4xl" />
              <input
                type="text"
                placeholder="Search Projects"
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

        <div className="flex flex-wrap gap-8 justify-center">
          {data.map((project) => (
            <ProjectPromoBox
              key={project.projectName}
              imageUrl={project.imageUrl}
              projectName={project.projectName}
              projectCompany={project.projectCompany}
              deadline={project.deadline}
              skills={project.skills}
            />
          ))}
        </div>

        {/* Footer */}
      </div>
    </>
  );
}
