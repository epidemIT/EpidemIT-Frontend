"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/users/talent/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullname,
          email,
          birth_date: birthDate,
          password,
        }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      router.push("/login");
      toast.success("Signup successful");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="bg-white p-8 w-1/2 rounded-lg flex flex-col gap-8 justify-center">
      <h1 className="font-semibold text-2xl text-center">Signup</h1>

      <div className="flex flex-col gap-4">
        <label className="font-semibold">Fullname</label>
        <input
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type="email"
          placeholder="Enter your Fullname"
          className="border border-gray-300 focus:outline-none rounded-lg p-4"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-semibold">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
          className="border border-gray-300 focus:outline-none rounded-lg p-4"
        />
      </div>

      {/* birth date */}
      <div className="flex flex-col gap-4">
        <label className="font-semibold">Birth Date</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          placeholder="Enter your Birth Date"
          className="border border-gray-300 focus:outline-none rounded-lg p-4"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-semibold">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your Password"
          className="border border-gray-300 rounded-lg p-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-semibold">Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Enter your Password"
          className="border border-gray-300 rounded-lg p-4 focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleSignup}
          className="bg-secondary-dark hover:brightness-110 w-fit text-white rounded-full py-2 px-16 font-semibold"
        >
          Sign Up
        </button>
        <p className="text-gray-500">
          Already have an account?
          <Link href={"/login"} className="font-semibold">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
