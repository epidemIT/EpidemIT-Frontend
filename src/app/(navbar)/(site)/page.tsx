"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [cblind, setCb] = useState<boolean | undefined>(false);

  useEffect(() => {
    // Check if window is defined (available only in the browser)
    if (typeof window !== "undefined") {
      const cb = window.localStorage.getItem("cBlindKey") === "true";
      setCb(cb);
    }
  }, []);

  return (
    <div className="">
      <section className="bg-[url('/home-hero.svg')] min-h-screen bg-no-repeat bg-cover py-24">
        <div className="flex pb-20 h-[1000px] lg:h-full gap-28 px-[5%] mt-8 flex-col justify-between lg:items-center xl:flex-row lg:justify-center">
          <Image
            src="/laptop-hero.svg"
            width={570}
            height={50}
            alt="Logo"
            data-aos="fade-right"
          />
          <div
            data-aos="fade-left"
            className="flex flex-col items-start lg:justify-center gap-4 lg:w-1/4"
          >
            <h1
              className={`text-primary lg:text-white text-6xl md:text-8xl font-bold`}
            >
              EpidemIT
            </h1>
            <p
              className={`${
                !cblind
                  ? "text-secondary-dark lg:text-[#C3FFE3]"
                  : "text-orange-400 "
              }   md:text-2xl text-2xl`}
            >
              Where IT expertise spreads like wildfire, for everyone
            </p>
            <button
              onClick={() => handleScroll("features")}
              className={`${
                !cblind ? "bg-secondary-dark" : "bg-orange-400"
              } text-white px-12 shadow-2xl text-xl py-2 rounded-full`}
            >
              Start Now {" >"}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#3273A0] px-[15%] py-8">
        <div className="flex flex-col items-center gap-8 py-28" data-aos="fade-left">
          <h2 className="text-white text-4xl font-bold">Why EpidemIT?</h2>
          <p className="text-white text-2xl">
            At epidemIT, we believe in inclusive IT education for all. Our
            platform is designed to cater to diverse learners, ensuring everyone
            has access to quality tech education. Through creative learning
            media and hands-on experiences, we empower individuals to learn by
            doing, fostering a deeper understanding of IT concepts.
            <br /> <br />
            With our project-based learning feature, users dive into real-world
            scenarios, developing practical skills and problem-solving abilities
            essential in today`&apos;`s tech landscape. Additionally, our
            mentorship program connects learners with industry experts,
            providing valuable insights and guidance along their educational
            journey.
            <br /> <br />
            Join us at epidemIT and embark on a transformative learning
            experience, where everyone has the opportunity to thrive in the
            world of technology.
          </p>
        </div>
      </section>

      <section className="items-center flex flex-col gap-8 py-28" id="features">
        <h1 className="font-semibold text-4xl">Features</h1>
        <div className="flex flex-col lg:flex-row px-20 gap-20">
          <div data-aos="fade-right" className="rounded-lg max-w-96 flex flex-col justify-between items-center gap-4 shadow-xl py-6 px-2 lg:px-8">
            <Image
              src="/mentor-landing.svg"
              width={250}
              height={50}
              alt="Logo"
            />

            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-2xl font-semibold text-[#023147]">Mentors</h2>
              <p className="text-[#023147] text-lg text-center">
                Connects learners with industry experts mentors
              </p>

              <Link
                href="/mentor"
                className="border-2 text-secondary-dark hover:text-white hover:bg-secondary-dark border-secondary-dark rounded-full text-lg py-2 px-4"
              >
                Explore {" >"}
              </Link>
            </div>
          </div>

          <div data-aos="fade-left" className="rounded-lg max-w-96 flex flex-col justify-between items-center gap-4 shadow-xl py-6 px-8">
            <Image
              src="/project-landing.svg"
              width={200}
              height={50}
              alt="Logo"
            />

            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-2xl font-semibold text-[#023147]">Project</h2>
              <p className="text-[#023147] text-lg text-center">
                Dive into real-world project with project-based learning
              </p>

              <Link
                href="/project"
                className="border-2 text-secondary-dark hover:text-white hover:bg-secondary-dark border-secondary-dark rounded-full text-lg py-2 px-4"
              >
                Explore {" >"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
