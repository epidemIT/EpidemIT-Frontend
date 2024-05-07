import Image from "next/image";

export default function Empty() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/empty-project.svg" width={531} height={100} alt="Logo" />

      <p className="text-xl font-semibold">
        You have not enrolled to any projects yet
      </p>
      <button className="bg-secondary-dark mt-4 rounded-full px-6 py-2 text-white">
        <span className="text-lg">Enroll Now {">"}</span>
      </button>
    </div>
  );
}
