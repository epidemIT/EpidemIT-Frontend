import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";

interface LevelBoxProps {
  level: number;
  remaining: number;
}

export default function LevelBox({ level, remaining }: LevelBoxProps) {
  return (
    <div className="rounded-lg shadow-lg sm:flex gap-8 p-5 w-full items-center justify-center">
      <Image
        src="/level.svg"
        width={140}
        height={140}
        alt="Logo"
        className="rounded-lg"
      />

      <div className="flex flex-col gap-2 w-4/5 items-start justify-start mb-2">
        <p className="text-lg md:text-xl font-semibold">Level {level}</p>
        <p className="text-ms md:text-lg text-[#8C8C8C]">
          Dapatkan {remaining} xp lagi untuk mencapai level {level + 1}
        </p>
      </div>

      <div>
        <ProgressBar
          completed={100 - (remaining / 5000) * 100}
          bgColor="#119ABE"
          height="10px"
          isLabelVisible={false}
        />
      </div>
    </div>
  );
}
