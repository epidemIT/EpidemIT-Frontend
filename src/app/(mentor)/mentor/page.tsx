import Navbar from "@/components/Navbar";
import ProjectPage from "./component/ProjectPage";
import MentorPage from "./component/MentorPage";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="flex flex-col px-[6%] items-center pt-8">
        <MentorPage />
      </div>
      <Footer />
    </>
  );
}
