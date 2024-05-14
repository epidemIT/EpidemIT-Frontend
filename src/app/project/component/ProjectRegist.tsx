"use client";

import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

export default function ProjectRegist() {
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
            <h2 className="text-xl text-[#031E31] mt-6 font-semibold ">
              Data Analyst - Beginner (nama project course)
            </h2>
            <div className="md:flex mt-4 gap-10 items-center">
              <div className=" border-[1px] rounded-lg p-2 mt-2 w-[200px]">
                <Image src="/niggs.svg" alt="Niggs" width={200} height={200} />
                <h2 className="text-[#393939] text-xl font-semibold mt-2">
                  Home Credit
                </h2>
                <h2 className="text-[#2A638B] text-lg">Kredivo</h2>
              </div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-[#1E1E1E] font-bold text-2xl mt-5 md:mt-0">
                    Rp150.000
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
                <button className="py-4 px-[80px] max-w-full bg-[#2FBFA6] text-white rounded-full text-lg ml-auto mt-10">
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
