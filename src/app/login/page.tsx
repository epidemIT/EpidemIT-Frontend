import Login from "./Login";

export default function Page() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="bg-[url('/login-bg.svg')] bg-no-repeat bg-cover min-h-screen flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}
