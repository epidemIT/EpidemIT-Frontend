"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

interface MentorBoxProps {
  id: string;
  imageUrl: string;
  name: string;
  title: string;
  company: string;
  reviews: number;
  sessions: number;
}

export default function MentorBox({
  id,
  imageUrl,
  name,
  title,
  company,
  reviews,
  sessions,
}: MentorBoxProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/mentor/${id}`);
      }}
      className="cursor-pointer w-80 rounded-lg p-2 pb-6 bg-[#f5f4f4] flex flex-col justify-center gap-6 shadow-lg"
    >
      <Image
        alt="Profile Picture"
        src={imageUrl}
        width={200}
        height={100}
        className="rounded-lg w-80 h-80 object-cover aspect-square"
      />

      <h1 className="text-2xl font-medium text-center">{name}</h1>

      <div className="flex justify-center items-center gap-4">
        <IoBagOutline />
        <p className="text-[#2A638B] text-lg font-semibold">
          {title} at {company}
        </p>
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
