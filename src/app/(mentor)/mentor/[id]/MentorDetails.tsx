import Image from "next/image";
import Skills from "@/app/(mentor)/project/component/Skills";
import Experience from "./Experience";
import Review from "./Review";
import MentorBox from "../component/MentorBox";
import MentorModal from "../component/MentorModal";

interface Mentor {
  id: string;
  full_name: string;
  email: string;
  company: string;
  specialty: string;
  bio: string;
  photo: string;
  mentees: string[] | null;
  reviews: number;
  sessions: number;
  created_at: string;
  updated_at: string;
}

export default function MentorDetails({ data }: { data: Mentor }) {
  return (
    <div className="mt-44 flex flex-col md:items-center">
      <div className="flex md:flex-row w-full items-center flex-col justify-between gap-12">
        <Image
          src={data.photo}
          alt="profile"
          width={128}
          height={128}
          className="w-40 h-40 aspect-square object-cover rounded-full"
        />

        <div className="flex flex-col md:w-3/4 gap-4">
          <h1 className="text-4xl text-primary font-semibold">
            {data.full_name}
          </h1>
          <p className="text-2xl text-[#2A638B] font-semibold">
            {data.specialty} at {data.company}
          </p>
        </div>

        <div className="md:w-4/5 flex flex-col justify-end items-end gap-4 p-4 rounded-lg">
          <MentorModal />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-20">
        <h1 className="font-semibold text-2xl">Overview</h1>

        <p className="text-lg">{data.bio}</p>
      </div>

      <div className="flex md:flex-row flex-col justify-between gap-20 mt-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl text-primary font-semibold">Experience</h1>
          <Experience
            title={data.specialty}
            year="2020 - Present"
            description="Design and develop operational optimization models in logistics to enhance efficiency and reduce costs.
            Perform operational research and modeling to support dynamic pricing strategies.
            Collaborate in the development of Mostrans dynamic pricing engine to ensure competitiveness and profitability"
          />

          <Experience
            title={data.specialty}
            year="2023"
            description="Enabled a committee of 170+ and 300+ participants in conducting overall 3 months series of events.
            Responsible for leading the committee and participants in 10 training event (Seminar, Mentoring, &
            Focused Group Discussion)."
          />
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-primary font-semibold">Expertise</h1>
            <div className="flex flex-wrap gap-4">
              <Skills color="119ABE" skills="Data Science" />
              <Skills color="119ABE" skills="Machine Learning" />
              <Skills color="119ABE" skills="Python" />
              <Skills color="119ABE" skills="SQL" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-primary font-semibold">Reviews</h1>
            <Review
              name="Ibnu"
              review="Mentor yang sangat baik, membantu saya dalam memahami konsep data science"
            />

            <Review
              name="Nicho"
              review="Mentor yang kurang baik, tidak membantu saya dalam memahami konsep data science"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-8">
        <h1 className="text-2xl text-primary font-semibold md:text-center">
          Similar Mentor Profiles
        </h1>

        <div className="flex flex-wrap gap-24 justify-between w-full">
          <MentorBox
            name="Syahrial Alzaidan"
            company="Meta"
            title="Software Engineer"
            id="1"
            imageUrl="/niggs.svg"
            reviews={5}
            sessions={4.5}
          />
          <MentorBox
            id="1"
            name="Agita Ardelia"
            title="Business Development"
            company="Shopee"
            imageUrl="/agit_decrypted.jpeg"
            reviews={5}
            sessions={4.5}
          />
          <MentorBox
            id="2"
            name="Hj. Gibran Fasha Ghazanfar"
            title="Software Engineer"
            imageUrl="/gibs.jpeg"
            company="OCBC"
            reviews={5}
            sessions={4.5}
          />
        </div>
      </div>
    </div>
  );
}
