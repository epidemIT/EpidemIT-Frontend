import Navbar from "@/components/Navbar";
import ProjectPage from "./component/ProjectPage";

export default function Page() {
  return (
    <div className="flex flex-col px-[6%] items-center pt-8">
      <Navbar currentPage="Project" />

      <ProjectPage />
    </div>
  );
}
