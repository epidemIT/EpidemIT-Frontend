import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Thanks from "./Thanks";
import { cookies } from "next/headers";

const page = async ({ params }: { params: { id: string } }) => {
  const cookie = cookies();
  const token = cookie.get("token");

  let resultDB;
  if (token) {
    const payload = {
      project_id: params.id,
      progress: 0.0,
    };

    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/projects/apply/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify(payload),
      }
    );

    resultDB = await res.json();
  }

  return (
    <Thanks
      params={params}
      token={token as RequestCookie}
      resultDB={resultDB}
    />
  );
};

export default page;
