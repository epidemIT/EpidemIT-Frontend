"use client";
import { IconType } from "react-icons";
import Link from "next/link";
import Cookies from "universal-cookie";

export interface NavigationProps {
  icon: IconType;
  text: string;
  href: string;
}
const ProfileDropdown = ({
  isOpen,
  navigation,
}: {
  isOpen: boolean;
  navigation: NavigationProps[];
}) => {
  const cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove("token");
    window.location.reload();
  };

  return (
    <div
      className={`w-full py-3 px-3 bg-white absolute right-0 top-[150%] bg-background shadow-xl rounded-xl overflow-hidden transition origin-top ${
        isOpen ? "scale-y-100" : "scale-y-0"
      }`}
    >
      <div className="w-full bg-white z-50">
        {navigation.map((item, index) => (
          <Link
            className="flex items-center py-2"
            href="/dashboard"
            key={index}
            target={item.text === "Contact us" ? "_blank" : ""}
          >
            <item.icon size={22} />
            <p className="ml-2 text-[0.875rem] font-semibold select-none">
              Dashboard
            </p>
          </Link>
        ))}
        <button
          className="w-full select-none rounded-md font-semibold py-1 mt-4 text-[0.875rem] transition bg-red-500 text-white hover:brightness-110"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
