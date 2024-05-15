import Footer from "@/components/Footer";
import ProjectDetails from "../component/ProjectDetails";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/projects/" + params.id,
    {
      method: "GET"
    }
  );

  const data = await res.json();

  return (
    <div className="flex flex-col px-[6%] min-h-screen items-center pt-8">
      <ProjectDetails data={data} />

      <Footer />
    </div>
  );
}
