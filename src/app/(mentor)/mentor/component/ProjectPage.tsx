"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import ProjectPromoBox from "../../project/component/ProjectPromoBox";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectProps {
  id: string;
  name: string;
  project_description: string;
  total_hours: number;
  image_url: string;
  partner_name: string;
  partner_description: string;
  users: string[];
  skills: {
    id: string;
    name: string;
  }[];
  created_at: string;
  updated_at: string;
}

export default function ProjectPage({ data }: { data: ProjectProps[] }) {
  const [cblind, setCb] = useState<boolean | undefined>(false);

  useEffect(() => {
    // Check if window is defined (available only in the browser)
    if (typeof window !== "undefined") {
      const cb = window.localStorage.getItem("cBlindKey") === "true";
      setCb(cb);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12 justify-start w-full mt-44">
        {/* box for promo */}
        <div
          className="w-full flex flex-col gap-8 lg:flex-row lg:items-center justify-between rounded-lg text-white py-6 lg:py-16 px-7 lg:px-14 h-fit lg:h-96 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${
              cblind ? "/proj-bg-purp.svg" : "/proj-bg.svg"
            })`,
          }}
        >
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
              <button
                className={`px-4 py-2 ${
                  cblind ? "bg-purple-500" : "bg-secondary-dark"
                } rounded-full text-white font-semibold`}
              >
                Search
              </button>
            </div>

            <div className="flex gap-4 justify-end">
              <div
                className={` ${
                  cblind ? "bg-purple-500" : "bg-[#119ABE]"
                } flex items-center rounded-lg p-1`}
              >
                <CgSortAz className="text-4xl text-white" />
              </div>

              <div
                className={`${
                  cblind ? "bg-purple-500" : "bg-[#119ABE]"
                } flex items-center rounded-lg p-1`}
              >
                <CiFilter className="text-4xl text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* project box section */}

        <div className="flex flex-wrap gap-8 justify-center">
          {data.map((project) => (
            <ProjectPromoBox
              key={project.id}
              id={project.id}
              imageUrl={project.image_url}
              projectName={project.name}
              projectCompany={project.partner_name}
              total_hours={project.total_hours}
              skills={project.skills}
            />
          ))}
        </div>

        {/* Footer */}
      </div>
    </>
  );
}
