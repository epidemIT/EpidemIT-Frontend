"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

export default function Thanks({ params }: { params: { id: string } }) {
  const router = useRouter();
  const cookie = new Cookies();

  useEffect(() => {
    const handleRegisterProject = async () => {
      const payload = {
        project_id: params.id,
        progress: 0.000,
      };

      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/projects/apply/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie.get("token")}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const resultDB = await res.json();

      if (resultDB.message === "Applied to project successfully") {
        toast.success("Pembayaran dan pendaftaran berhasil");
      } else {
        toast.error("Pembayaran dan pendaftaran gagal");
      }
    };

    handleRegisterProject();
  }, [params.id, cookie]);

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
