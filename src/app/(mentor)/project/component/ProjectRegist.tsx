"use client";

declare global {
  interface Window {
    snap: any;
  }
}

import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

interface ProjectRegistProps {
  id: string;
  name: string;
  project_description: string;
  short_description: string;
  price: number;
  peralatan_belajar: string;
  silabus: string;
  total_hours: number;
  deadline: string;
  image_url: string;
  partner_name: string;
  partner_description: string;
  skills: {
    id: string;
    name: string;
  }[];
  users: {
    id: string;
  }[];
}

export default function ProjectRegist({ data }: { data: ProjectRegistProps }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const status_code = searchParams.get("status_code");

  if (status_code === "200") {
    router.push(`/payment/thanks/${data.id}`);
  }

  const handlePayment = async () => {
    const payload = {
      id: Math.random().toString(36).substring(7),
      name: data.name,
      price: data.price,
      quantity: 1,
    };

    const resMidTrans = await fetch(
      process.env.NEXT_PUBLIC_URL + "/api/tokenizer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const resultMidTrans = await resMidTrans.json();

    if (resultMidTrans.token) {
      window.snap.pay(resultMidTrans.token);
    } else {
      toast.error("Pembayaran Gagal");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div>Daftar</div>
        </DialogTrigger>
        <DialogContent className="max-w-[750px] max-h-screen">
          <div className="">
            <h2 className="text-2xl text-[#031E31] mt-6 font-semibold ">
              Total Pembayaran
            </h2>
            <hr className=" mt-2 h-[1px] w-[100%] mx-auto bg-[#8C8C8C]" />
            <div className="md:flex mt-4 gap-10 items-center">
              <div className=" border-[1px] rounded-lg p-2 mt-2 w-[200px]">
                <Image
                  src={data.image_url}
                  alt="Niggs"
                  width={200}
                  height={200}
                />
                <h2 className="text-[#393939] text-xl font-semibold mt-2">
                  {data.name}
                </h2>
                <h2 className="text-[#2A638B] text-lg">{data.partner_name}</h2>
              </div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-[#1E1E1E] font-bold text-2xl mt-5 md:mt-0">
                    Rp{data.price}
                  </h2>
                  <p className="text-[#1E1E1E] font-semibold text-md mt-5">
                    Kode Promo/Financial Aid
                  </p>
                  <Input
                    type="text"
                    placeholder="Masukkan Kode yang telah diberikan"
                    className="w-[100%] md:w-[430px] mt-3"
                  ></Input>
                </div>
                <button
                  className="py-4 px-[80px] max-w-full bg-[#2FBFA6] text-white rounded-full text-lg ml-auto mt-10"
                  onClick={handlePayment}
                >
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
