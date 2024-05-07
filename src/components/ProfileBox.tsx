"use client"

import Image from "next/image";
import ProfileDropdown, { NavigationProps } from "./ProfileDropdown";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const ProfileBox = ({
  routeTitle,
  routePath,
  name,
  imgurl,
}: {
  routeTitle?: string;
  routePath?: string[];
  name?: string | null;
  imgurl?: string | null;
}) => {

  const navbarData: NavigationProps[] = [
    {
      icon: CgProfile,
      text: "Profile",
      href: "/profile",
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState("");
  const handleDropdownOpen = (dropdownName: string) => {
    if (dropdownOpen === dropdownName) return setDropdownOpen("");
    setDropdownOpen(dropdownName);
  };

  return (
    <div className="w-full py-4 px-2 bg-white rounded-xl flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div
          className="flex items-center gap-3 relative cursor-pointer"
          onClick={() => handleDropdownOpen("PROFILE")}
        >
          <div className="w-9 aspect-square bg-slate-300 rounded-full relative overflow-hidden">
            <Image
              src={imgurl ?? "/profile.jpg"}
              fill={true}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="font-league font-semibold text-[1rem] w-24">
            {name}
          </p>
          <div onClick={() => handleDropdownOpen("PROFILE")}>
            <FiChevronDown
              size={22}
              className={`${
                dropdownOpen === "PROFILE" && "rotate-180"
              } transition`}
            />
          </div>
          <ProfileDropdown
            isOpen={dropdownOpen === "PROFILE"}
            navigation={navbarData}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
