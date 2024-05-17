import Image from "next/image";
import Link from "next/link";
import { MdOutlineDateRange, MdOutlineTimer } from "react-icons/md";

interface MentorBoxDashboardProps {
  imageUrl: string;
  mentorName: string;
  date: string;
  time: string;
}

export default function MentorBoxDashboard({
  imageUrl,
  mentorName,
  date,
  time,
}: MentorBoxDashboardProps) {
  return (
    <div className="p-2 pr-12 flex flex-col xl:flex-row justify-between gap-2 xl:gap-20 shadow-xl">
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          width={200}
          height={100}
          alt="Mentor"
          className="w-40 h-40 aspect-square object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col py-8 justify-between">
        <h1 className="text-2xl">
          Mentorship Session with <strong>{mentorName}</strong>
        </h1>

        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <MdOutlineDateRange />
            <p>{date}</p>
          </div>

          <div className="flex gap-4 items-center">
            <MdOutlineTimer />
            <p>{time}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  gap-4 justify-center">
        <Link
          href={"http://bit.ly/kosAupa"}
          target="_blank"
          className="bg-secondary-dark w-32 text-center text-white py-2 px-4 rounded-full"
        >
          Join Meeting
        </Link>

        <button className="bg-white w-32 text-secondary-dark border border-secondary-dark py-2 px-4 rounded-full">
          Message
        </button>
      </div>
    </div>
  );
}
