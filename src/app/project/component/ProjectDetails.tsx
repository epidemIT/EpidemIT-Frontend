import Image from "next/image";
import Skills from "./Skills";
import { MdOutlineGroup } from "react-icons/md";

export default function ProjectDetails() {
  return (
    <div className="mt-12 flex flex-col md:items-center">
      <div className="flex md:flex-row flex-col justify-around gap-12">
        <div className="flex flex-col justify-center bg-gray-100 shadow-xl gap-4 items-center py-6 px-3 rounded-lg">
          <Image src="/home-credit.png" width={100} height={48} alt="Logo" />

          <div>
            <h1 className="font-semibold text-2xl">Project Name</h1>
            <p className="text-gray-500">Project Company</p>
          </div>
        </div>

        <div className="flex flex-col md:w-2/4 gap-4">
          <h1 className="text-2xl text-primary font-semibold">Overview</h1>
          <p className="text-lg text-primary">Skills Acquired</p>

          <div className="flex flex-wrap gap-4">
            <Skills skills="Software Engineering" />
            <Skills skills="Web Dev" />
          </div>

          <div className="text-black/60 flex items-center gap-4">
            <MdOutlineGroup className="text-2xl" />

            <p>50.0000 peserta Talent Mendaftar</p>
          </div>

          <p className="text-xl">
            Pelajari dasar bahasa pemrograman, functional programming,
            object-oriented programming (OOP), serta concurrency dengan
            menggunakan Kotlin.
          </p>
        </div>

        <div className="bg-[#f1f0f0] md:w-1/5 flex flex-col justify-center gap-4 p-4 rounded-lg">
          <button className="p-2 text-xl text-white bg-secondary-dark rounded-full">
            Daftar
          </button>

          <button className="p-2 text-xl text-secondary-dark bg-white rounded-full">
            Deskripsi
          </button>

          <button className="p-2 text-xl text-secondary-dark bg-white rounded-full">
            Silabus
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between gap-20 mt-20">
        <div>
          <h1 className="text-2xl text-primary font-semibold">Deskripsi</h1>
          <p className="text-lg text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus natus enim doloribus, ratione esse dolores obcaecati,
            molestiae reiciendis veritatis quos tenetur distinctio quae iure, a
            molestias qui accusamus non. Cumque. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Doloribus mollitia dicta eum assumenda
            quod eveniet culpa. Exercitationem accusamus consequuntur minima
            velit labore. Quibusdam nulla magni quis illum quidem qui ratione.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <h1 className="text-2xl text-primary font-semibold">
              Peralatan Belajar
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              nemo, repellat, voluptatem, quae quas quidem doloremque
              necessitatibus dolorum aspernatur quia aperiam. Quisquam, quidem
              natus. Quisquam, quidem natus.
            </p>
          </div>

          <div>
            <h1 className="text-2xl text-primary font-semibold">
              Metode Belajar
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              reiciendis vero architecto molestias, esse consequatur aliquid
              voluptates minus dolor vel neque et accusamus aperiam porro qui
              totam obcaecati dignissimos tempora.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 md:flex flex-col gap-4 md:w-1/2">
        <h1 className="text-2xl text-primary font-semibold md:text-center">
          Silabus
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo,
          repellat, voluptatem, quae quas quidem doloremque necessitatibus
          dolorum aspernatur quia aperiam. Quisquam, quidem natus. Quisquam,
          quidem natus.
        </p>
      </div>
    </div>
  );
}
