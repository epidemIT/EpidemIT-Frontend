import MentorPage from "./component/MentorPage";
import Footer from "@/components/Footer";

export default async function Page() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/mentors",
    {
      method: "GET",
    }
  );

  const data = await response.json();

  return (
    <>
      <div className="flex flex-col px-[6%] items-center pt-8">
        <MentorPage data={data} />
      </div>
      <Footer />
    </>
  );
}
