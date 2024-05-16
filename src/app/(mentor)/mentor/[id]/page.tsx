import Footer from "@/components/Footer";
import MentorDetails from "./MentorDetails";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/api/v1/mentors/${params.id}`
  );
  const data = await response.json();

  return (
    <>
      <div className="flex flex-col px-[6%] min-h-screen items-center pt-8">
        <MentorDetails data={data} />
      </div>
      <Footer />
    </>
  );
}
