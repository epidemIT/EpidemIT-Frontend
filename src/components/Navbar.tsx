"use client";
import { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import ProfileBox from "./ProfileBox";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import { User } from "./UserFetcher";
import { Switch } from "@/components/ui/switch";

interface NavbarProps {
  currentPage?: string;
  home?: boolean;
  user: User | null;
}

export default function Navbar({ currentPage, home, user }: NavbarProps) {
  let cb;
  if (window.localStorage.getItem("cBlindKey") === undefined) {
    window.localStorage.setItem("cBlindKey", "false");
  }
  cb = window.localStorage.getItem("cBlindKey") === "true";
  const [cblind, setCb] = useState<boolean | undefined>(cb);
  const switchChange = () => {
    window.localStorage.setItem("cBlindKey", String(!cblind));
    setCb(!cblind);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if the screen size is greater than md
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      // Change the background color based on scroll position
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listeners for window resize and scroll
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Remove event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`${
        home && !scrolled ? "bg-transparent" : "bg-primary"
      } w-full py-4 pl-20 pr-6 flex items-center justify-between ${
        home ? "rounded-none" : "rounded-2xl"
      } transition-colors duration-300 z-50`}
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
            } cursor-pointer text-xl`}
          >
            Home
          </Link>
          <Link
            href={"/mentor"}
            className={`${
              currentPage == "Mentor"
                ? `underline md:no-underline ${
                    cblind === false ? "text-secondary" : "text-orange-300"
                  }`
                : "text-white"
            } cursor-pointer text-xl`}
          >
            Mentor
          </Link>
          <Link
            href={"/project"}
            className={`${
              currentPage == "Project"
                ? `underline md:no-underline ${
                    cblind === false ? "text-secondary-dark" : "text-orange-400"
                  }`
                : "text-white"
            } cursor-pointer text-xl`}
          >
            Project
          </Link>

          {user?.id ? (
            <div className="flex flex-col items-center gap-2">
              <div className="md:hidden block">
                <ProfileBox name={user.full_name} imgurl={user.photo} />
              </div>
              <div className="flex lg:hidden flex-col gap-2 justify-center items-center">
                <Switch checked={cblind} onCheckedChange={switchChange} />
                <p className="text-white text-lg">Colorblind Mode</p>
              </div>
            </div>
          ) : (
            <div className="md:hidden flex flex-col items-center gap-6">
              <Link
                href="/signup"
                className="bg-white md:w-24 text-center text-primary/80 font-semibold rounded-lg px-4 py-2 w-full"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="bg-secondary-dark md:w-24 text-center text-white font-semibold rounded-lg px-4 py-2 w-full"
              >
                Login
              </Link>
            </div>
          )}
        </ul>
      </div>

      {user?.id ? (
        <div className="flex gap-4">
          <div className="hidden lg:flex gap-2 md:justify-center md:items-center">
            <Switch
              checked={cblind}
              onCheckedChange={switchChange}
              className="data-[state=checked]:bg-green-500 "
            />
            <p className="text-white text-md">Colorblind Mode</p>
          </div>
          <div className="hidden md:block">
            <ProfileBox name={user.full_name} imgurl={user.photo} />
          </div>
        </div>
      ) : (
        <div className="md:flex gap-6 hidden">
          <Link
            href="/signup"
            className="bg-white w-24 text-center text-primary/80 font-semibold rounded-lg p-4"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="bg-secondary-dark w-24 text-center text-white font-semibold rounded-lg p-4"
          >
            Login
          </Link>
        </div>
      )}

      <MenuIcon isOpen={menuOpen} handleToggle={toggleMenu} />
    </nav>
  );
}
