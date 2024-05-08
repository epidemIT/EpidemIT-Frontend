import Navbar from "@/components/Navbar";
import ProjectPage from "../project/component/ProjectPage";
import MentorPage from "./component/MentorPage";

export default function Page() {
  return (
    <div className="flex flex-col px-[6%] items-center pt-8">
      <Navbar currentPage="Project" />

      <MentorPage />
    </div>
  );
}
