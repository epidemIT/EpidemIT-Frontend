import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-white p-8 w-1/3 rounded-lg flex flex-col gap-8 justify-center">
      <h1 className="font-semibold text-2xl text-center">Login</h1>

      <div className="flex flex-col gap-4">
        <label className="font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="border border-gray-300 focus:outline-none rounded-lg p-4"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          className="border border-gray-300 rounded-lg p-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <button className="bg-secondary-dark hover:brightness-110 w-fit text-white rounded-full py-2 px-16 font-semibold">
          Login
        </button>
        <p className="text-gray-500">
          Don’t have an account yet?
          <Link href={"/signup"} className="font-semibold">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
