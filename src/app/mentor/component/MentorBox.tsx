import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

interface MentorBoxProps {
  imageUrl: string;
  name: string;
  title: string;
  reviews: number;
  sessions: number;
}

export default function MentorBox({
  imageUrl,
  name,
  title,
  reviews,
  sessions,
}: MentorBoxProps) {
  return (
    <div className="rounded-lg p-2 pb-6 bg-[#f5f4f4] flex flex-col justify-center gap-6 shadow-lg">
      <Image
        src={imageUrl}
        width={320}
        height={100}
        alt="Mentor Ava"
        className="rounded-lg object-cover"
      />

      <h1 className="text-2xl font-medium text-center">{name}</h1>

      <div className="flex justify-center items-center gap-4">
        <IoBagOutline />
        <p className="text-[#2A638B] text-lg font-semibold">{title}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <IoMdChatboxes />
          <p className="">{sessions} sessions</p>
        </div>

        <div className="flex gap-4 items-center">
          <FaStar />
          <p>{reviews} Reviews</p>
        </div>
      </div>
    </div>
  );
}
