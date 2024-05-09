import Project from "../components/Project";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookie = cookies();
  const token = cookie.get("token");

  if (!token) {
    redirect("/login");
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/project-apply/user",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const data = await res.json();

  return (
    <>
      <Project data={data} />
    </>
  );
}
