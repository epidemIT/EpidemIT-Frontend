"use client";
import Image from "next/image";
import Skills from "./Skills";
import { MdOutlineGroup } from "react-icons/md";

export default function ProjectDetails() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-12 flex flex-col md:items-center">
      <div className="flex md:flex-row flex-col justify-around gap-12">
        <div className="flex flex-col justify-center bg-gray-100 shadow-xl gap-4 items-center py-6 px-3 rounded-lg">
          <Image
            src="https://i.pinimg.com/564x/62/38/dc/6238dc40add8eae74709ca45e94e4cee.jpg"
            width={150}
            height={48}
            alt="Logo"
          />

          <div className="text-center">
            <h1 className="font-semibold text-2xl">
              Machine Learning Predicitions
            </h1>
            <p className="text-gray-500">Home Credit</p>
          </div>
        </div>

        <div className="flex flex-col md:w-2/4 gap-4">
          <h1 className="text-2xl text-primary font-semibold">Overview</h1>
          <p className="text-lg text-primary">Skills Acquired</p>

          <div className="flex flex-wrap gap-4">
            <Skills color="119ABE" skills="Software Engineering" />
            <Skills color="119ABE" skills="Web Dev" />
          </div>

          <div className="text-black/60 flex items-center gap-4">
            <MdOutlineGroup className="text-2xl" />

            <p>50.0000 peserta Talent Mendaftar</p>
          </div>

          <p className="text-xl">
            Proyek Machine Learning ini bertujuan untuk mengimplementasikan
            algoritma-algoritma machine learning guna memproses dan menganalisis
            data untuk tujuan prediksi, klasifikasi, atau pengenalan pola.
            Melalui proyek ini, peserta akan belajar tentang prinsip-prinsip
            dasar machine learning, pengolahan data, pemilihan fitur. tertentu.
          </p>
        </div>

        <div className="bg-[#f1f0f0] md:w-1/5 flex flex-col justify-center gap-4 p-4 rounded-lg">
          <button className="p-2 text-xl text-white bg-secondary-dark rounded-full">
            Daftar
          </button>

          <button className="p-2 text-xl text-secondary-dark bg-white rounded-full">
            Financial Aid
          </button>

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
          <p className="text-lg text-primary">
            Proyek Machine Learning merupakan sebuah inisiatif yang memadukan
            kecanggihan teknologi dengan analisis data untuk menghasilkan solusi
            yang terkait dengan prediksi, klasifikasi, atau pengenalan pola.
            Dalam proyek ini, peserta akan memasuki dunia yang dinamis dari
            kecerdasan buatan, memperdalam pemahaman mereka tentang
            konsep-konsep kunci seperti pengolahan data, pemilihan fitur, dan
            pembangunan model. Dengan menerapkan algoritma-algoritma machine
            learning, peserta akan belajar bagaimana menerjemahkan data ke dalam
            wawasan yang bermakna, mengidentifikasi pola tersembunyi, dan
            membuat prediksi yang akurat. Proyek ini juga memberikan kesempatan
            bagi peserta untuk mengeksplorasi berbagai teknik machine learning,
            mulai dari model klasik seperti regresi dan klasifikasi hingga
            teknik-teknik canggih seperti deep learning, yang semuanya dapat
            diterapkan dalam konteks kasus studi yang beragam.
            <br /> <br />
            Selain memperdalam pemahaman teoritis mereka, peserta akan terlibat
            dalam proses praktis dari awal hingga akhir, mulai dari pemrosesan
            data hingga evaluasi performa model. Dalam prosesnya, mereka akan
            belajar bagaimana menghadapi tantangan yang muncul dalam pengolahan
            data yang kompleks, menyesuaikan parameter model, dan memvalidasi
            hasil prediksi mereka. Melalui proyek ini, peserta akan diberikan
            kesempatan untuk mengasah keterampilan teknis mereka dalam
            pemrograman dan analisis data, serta memperluas wawasan mereka
            tentang aplikasi machine learning dalam berbagai bidang, seperti
            ilmu pengetahuan, teknologi, kesehatan, dan keuangan.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <h1 className="text-2xl text-primary font-semibold">
              Peralatan Belajar
            </h1>
            <ul className="list-disc">
              <li>Laptop</li>
              <li>Koneksi internet</li>
              <li>Browser</li>
              <li>Python</li>
              <li>Text Editor {"(recommend: Jupyter Notebook)"}</li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl text-primary font-semibold">
              Metode Belajar
            </h1>
            <p>
              Metode belajar adalah teknik atau strategi yang digunakan untuk
              memperoleh pengetahuan dan keterampilan. Ini mencakup membaca,
              mendengarkan, mencatat, berlatih, berdiskusi, dan mengajar kembali
              materi kepada orang lain. Metode yang efektif dapat mencakup
              pembelajaran aktif, berbasis proyek, kooperatif, dan mandiri,
              disesuaikan dengan gaya belajar individu.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 md:flex flex-col gap-4 md:w-full" id="silabus">
        <h1 className="text-2xl text-primary font-semibold md:text-left">
          Silabus
        </h1>

        <ul className="list-disc text-lg">
          <li>Machine Learning Introduction</li>
          <li>Machine Learning Types</li>
          <li>Submission</li>
        </ul>
      </div>
    </div>
  );
}
