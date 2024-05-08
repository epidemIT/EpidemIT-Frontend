import Image from "next/image";
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
    <div className="p-2 flex gap-20 shadow-xl">
      <Image src={imageUrl} width={200} height={100} alt="Mentor" />
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

      <div className="flex flex-col gap-4 justify-center">
        <button className="bg-secondary-dark text-white py-2 px-4 rounded-full">
          Join Meeting
        </button>

        <button className="bg-white text-secondary-dark border border-secondary-dark py-2 px-4 rounded-full">
          Message
        </button>
      </div>
    </div>
  );
}
