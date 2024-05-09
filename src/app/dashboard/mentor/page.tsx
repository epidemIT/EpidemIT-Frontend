import MentorDashboard from "./MentorDashboard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookie = cookies();
  const token = cookie.get("token");

  if (!token) {
    redirect("/login");
  }

  return (
    <>
      <MentorDashboard />
    </>
  );
}
