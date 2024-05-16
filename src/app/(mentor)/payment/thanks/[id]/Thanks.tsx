"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function Thanks({
  token,
  resultDB,
}: {
  token: RequestCookie;
  resultDB: any;
}) {
  const router = useRouter();

  useEffect(() => {
    if (resultDB.message === "Applied to project successfully" && token) {
      toast.success("Pembayaran dan pendaftaran berhasil");
    } else {
      toast.error("Pembayaran dan pendaftaran gagal");
    }
  }, [resultDB, token]);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-bold">Thank you for your payment!</h1>

      <button
        className="bg-primary text-white rounded-md p-2 mt-4"
        onClick={() => router.push("/dashboard/project")}
      >
        Return to Dashboard
      </button>
    </div>
  );
}
