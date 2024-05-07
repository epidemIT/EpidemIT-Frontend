import Image from "next/image";
import ProfileBox from "./ProfileBox";

export default function Navbar() {
  return (
    <nav className="bg-primary max-w-screen-xl w-full py-4 px-8 flex items-center justify-between rounded-2xl">
      <Image src="/logo-epidemit.svg" width={150} height={50} alt="Logo" />

      <div>
        <ul className="flex gap-8 text-white text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Mentor</li>
          <li className="cursor-pointer">Project</li>
        </ul>
      </div>

      <div>
        {/* <button className="text-white bg-secondary-dark p-3 rounded-lg">
          Login
        </button> */}

        <ProfileBox name="John Doe" imgurl="/profile.jpg" />
      </div>
    </nav>
  );
}
