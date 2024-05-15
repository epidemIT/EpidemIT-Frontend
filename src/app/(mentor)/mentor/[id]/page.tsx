import Footer from "@/components/Footer";
import MentorDetails from "./MentorDetails";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col px-[6%] min-h-screen items-center pt-8">
      <MentorDetails />

      <Footer />
    </div>
  );
}
