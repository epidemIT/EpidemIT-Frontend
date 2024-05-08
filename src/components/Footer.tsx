import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-primary flex md:flex-row flex-col py-4 justify-between px-[5%] w-screen mt-20 h-48">
      <Image src="/logo-epidemit.svg" width={150} height={50} alt="Logo" />

      <div className="flex gap-4 items-center justify-between">
        <p className="text-white text-xl w-2/5">
          Where IT expertise spreads like wildfire, for everyone
        </p>

        <div className="gap-4 flex items-start">
          <div className="bg-white rounded-full p-2">
            <BsTwitter />
          </div>
          <div className="bg-white rounded-full p-2">
            <BsInstagram />
          </div>
          <div className="bg-white rounded-full p-2">
            <MdEmail />
          </div>
        </div>
      </div>
    </div>
  );
}
