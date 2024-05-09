import Project from "../components/Project";

export default async function Page() {
  // const cookie = cookies();
  // const token = cookie.get("token");

  // if (!token) {
  //   redirect("/login");
  // }

  const token = {
    value:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrdWNsYXJpc3NhYWt1YWRhbGFodGFsZW50QGdtYWlsLmNvbSIsImV4cCI6MTcxNTM5NTM4M30.YBvhBTUiRHN9urDEjzpjQUcJPxBSAcBzsZhH__q5NJE",
  };

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
