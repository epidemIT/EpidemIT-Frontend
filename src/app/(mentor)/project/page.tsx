import ProjectPage from "../mentor/component/ProjectPage";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="flex flex-col px-[6%] items-center pt-8">
        <ProjectPage />
      </div>
      <Footer />
    </>
  );
}
