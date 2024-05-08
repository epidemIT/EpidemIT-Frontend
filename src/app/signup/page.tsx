import Signup from "./Signup";

export default function Page() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="bg-[url('/login-bg.svg')] bg-no-repeat bg-cover min-h-screen flex justify-center items-center">
        <Signup />
      </div>
    </div>
  );
}
