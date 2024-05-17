import MentorDashboard from "./MentorDashboard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookie = cookies();
  const token = cookie.get("token");

  if (!token) {
    redirect("/login");
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/mentor-apply/user",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const data = await response.json();

  return (
    <>
      <MentorDashboard data={data} />
    </>
  );
}
