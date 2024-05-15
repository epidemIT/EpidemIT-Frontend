"use client";
import Image from "next/image";
import Skills from "./Skills";
import { MdOutlineGroup } from "react-icons/md";
import FinancialAid from "./FinancialAid";
import ProjectRegist from "./ProjectRegist";

interface ProjectPromoBoxProps {
  id: string;
  name: string;
  project_description: string;
  short_description: string;
  price: number;
  peralatan_belajar: string;
  silabus: string;
  total_hours: number;
  deadline: string;
  image_url: string;
  partner_name: string;
  partner_description: string;
  skills: {
    id: string;
    name: string;
  }[];
  users: {
    id: string;
  }[];
}

export default function ProjectDetails({
  data,
}: {
  data: ProjectPromoBoxProps;
}) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const peralatanBelajar = data.peralatan_belajar.split(", ");
  const silabus = data.silabus.split(", ");

  return (
    <div className="mt-44 flex flex-col md:items-center">
      <div className="flex md:flex-row flex-col justify-around gap-12">
        <div className="flex flex-col justify-center bg-gray-100 shadow-xl gap-4 items-center py-6 px-3 rounded-lg">
          <Image src={data.image_url} width={150} height={48} alt="Logo" />

          <div className="text-center">
            <h1 className="font-semibold text-2xl">{data.name}</h1>
            <p className="text-gray-500">{data.partner_name}</p>
          </div>
        </div>

        <div className="flex flex-col md:w-2/4 gap-4">
          <h1 className="text-2xl text-primary font-semibold">Overview</h1>
          <p className="text-lg text-primary">Skills Acquired</p>

          <div className="flex flex-wrap gap-4">
            {data.skills.map((skill) => (
              <Skills key={skill.id} color="119ABE" skills={skill.name} />
            ))}
          </div>

          <div className="text-black/60 flex items-center gap-4">
            <MdOutlineGroup className="text-2xl" />

            <p>{data?.users?.length} Talent telah Mendaftar</p>
          </div>

          <p className="text-xl">{data.short_description}</p>
        </div>

        <div className="bg-[#f1f0f0] md:w-1/5 flex flex-col justify-center gap-4 p-4 rounded-lg">
          <button className="p-2 text-xl text-white bg-secondary-dark rounded-full flex justify-center items-center">
            <ProjectRegist data={data} />
          </button>

          <div className="p-2 text-xl text-secondary-dark bg-white rounded-full flex justify-center items-center">
            <FinancialAid />
          </div>

          <button
            onClick={() => handleScroll("silabus")}
            className="p-2 text-xl text-secondary-dark bg-white rounded-full"
          >
            Silabus
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between gap-20 mt-20">
        <div>
          <h1 className="text-2xl text-primary font-semibold">Deskripsi</h1>
          <p className="text-lg text-primary">{data.project_description}</p>
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <h1 className="text-2xl text-primary font-semibold">
              Peralatan Belajar
            </h1>
            <ul className="list-disc">
              {peralatanBelajar.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl text-primary font-semibold">
              Metode Belajar
            </h1>
            <p>
              <strong>Online self-learning</strong>
              <br />- Total jam belajar : {data.total_hours} jam
              <br />- Rekomendasi waktu belajar :{" "}
              {(data.total_hours / 7).toFixed(1)} jam/hari selama 7 hari
              <br />
              <br />
              <strong>Evaluasi pembelajaran</strong>
              <br />
              - Ujian akhir kelas
              <br />- Submission (proyek akhir) berupa proyek yang berisi hasil
              pembelajaran sesuai company
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 md:flex flex-col gap-4 md:w-full" id="silabus">
        <h1 className="text-2xl text-primary font-semibold md:text-left">
          Silabus
        </h1>

        <ul className="list-disc text-lg">
          {silabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
