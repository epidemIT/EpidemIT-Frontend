"use client";

import Image from "next/image";
import Link from "next/link";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineGroup } from "react-icons/md";

interface SidebarProps {
  active: string;
}

export default function Sidebar({ active }: SidebarProps) {
  return (
    <div className="flex bg-primary min-h-screen w-[100px] md:w-[300px] text-white py-28  flex-col justify-between">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center">
          <Link href={"/"}>
            <Image
              src="/logo-epidemit.svg"
              width={174}
              height={100}
              alt="Logo"
            />
          </Link>
          <h1 className="text-md md:text-xl text-center font-semibold">
            Dashboard
          </h1>
        </div>

        <div className="text-xl flex flex-col gap-8">
          <Link
            href={"/dashboard"}
            className={`flex flex-col md:flex-row  ${
              active == "dashboard" ? "bg-secondary text-primary" : "text-white"
            } items-center gap-2 hover:bg-secondary hover:text-primary text-base md:text-2xl cursor-pointer p-4 rounded-l-lg`}
          >
            <IoHomeOutline className="w-5 h-5 mb-2 md:mb-0" />
            <span>Dashboard</span>
          </Link>

          <Link
            href={"/dashboard/project"}
            className={`flex flex-col md:flex-row ${
              active == "projects" ? "bg-secondary text-primary" : "text-white"
            } items-center gap-2 hover:bg-secondary hover:text-primary text-base md:text-2xl cursor-pointer p-4 rounded-l-lg`}
          >
            <GoProjectRoadmap className="w-5 h-5 mb-2 md:mb-0" />
            <span>Projects</span>
          </Link>

          <Link
            href={"/dashboard/mentor"}
            className={`flex flex-col md:flex-row ${
              active == "mentors" ? "bg-secondary text-primary" : "text-white"
            } items-center gap-2 hover:bg-secondary hover:text-primary text-base md:text-2xl cursor-pointer p-4 rounded-l-lg`}
          >
            <MdOutlineGroup className="w-5 h-5 mb-2 md:mb-0" />
            <span>Mentors</span>
          </Link>
        </div>
      </div>

      <Link
        href={"/"}
        className="flex items-center self-center w-4/5 justify-center hover:bg-secondary hover:text-primary cursor-pointer p-2 rounded-full"
      >
        <IoIosArrowRoundBack className="text-4xl" />
        <span className=" text-lg md:text-2xl">Back</span>
      </Link>
    </div>
  );
}
