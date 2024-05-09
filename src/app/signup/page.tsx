import Signup from "./Signup";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookie = cookies();
  const token = cookie.get("token");

  if (token) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="bg-[url('/login-bg.svg')] bg-no-repeat bg-cover min-h-screen flex justify-center items-center">
        <Signup />
      </div>
    </div>
  );
}
