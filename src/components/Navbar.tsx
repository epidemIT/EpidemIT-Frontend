"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProfileBox from "./ProfileBox";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import { User } from "./UserFetcher";

interface NavbarProps {
  currentPage: string;
  home?: boolean;
  user: User | null;
}

export default function Navbar({ currentPage, home, user }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if the screen size is greater than md
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`${
        home ? "bg-transparent" : "bg-primary"
      } w-full py-4 px-8 flex items-center justify-between rounded-2xl`}
    >
      <Link href={"/"} className="cursor-pointer">
        <Image src="/logo-epidemit.svg" width={150} height={50} alt="Logo" />
      </Link>

      <div className={menuOpen ? "block " : "hidden md:block"}>
        <ul
          className={
            menuOpen
              ? "flex flex-col gap-4 absolute bg-primary px-4 py-6 right-8 top-32 w-72 rounded-lg text-white"
              : "flex gap-8 text-white text-lg"
          }
        >
          <Link
            href={"/"}
            className={`${
              currentPage == "Home"
                ? "underline md:no-underline text-secondary-dark"
                : "text-white"
            }cursor-pointer text-xl`}
          >
            Home
          </Link>
          <Link
            href={"/mentor"}
            className={`${
              currentPage == "Mentor"
                ? "underline md:no-underline text-secondary-dark"
                : "text-white"
            }cursor-pointer text-xl`}
          >
            Mentor
          </Link>
          <Link
            href={"/project"}
            className={`${
              currentPage == "Project"
                ? "underline md:no-underline text-secondary-dark"
                : "text-white"
            }cursor-pointer text-xl`}
          >
            Project
          </Link>
          <div className="text-black md:hidden flex justify-center">
            <ProfileBox name="John Doe" imgurl="/profile.jpg" />
          </div>
        </ul>
      </div>

      <div className="hidden md:block">
        <ProfileBox name="John Doe" imgurl="/profile.jpg" />
      </div>

      <MenuIcon isOpen={menuOpen} handleToggle={toggleMenu} />
    </nav>
  );
}
