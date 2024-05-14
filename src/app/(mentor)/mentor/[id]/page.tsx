import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MentorDetails from "./MentorDetails";

export default function Page() {
  return (
    <div className="flex flex-col px-[6%] min-h-screen items-center pt-8">
      <MentorDetails />

      <Footer />
    </div>
  );
}
