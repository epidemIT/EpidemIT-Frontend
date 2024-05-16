import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import ProjectPage from "../mentor/component/ProjectPage";
import Footer from "@/components/Footer";

export default async function Page() {
  const cookie = cookies();
  const token = cookie.get("token");

  let res;
  if (token) {
    res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/projects/user/available",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  } else {
    res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/projects",
      {
        method: "GET",
      }
    );
  }

  const data = await res.json();

  return (
    <>
      <div className="flex flex-col px-[6%] items-center pt-8">
        <ProjectPage data={data} />
      </div>
      <Footer />
    </>
  );
}
