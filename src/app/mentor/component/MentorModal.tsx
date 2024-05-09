"use client";
import React from "react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import Cookies from "universal-cookie";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const MentorModal = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  const cookie = new Cookies();

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div
            className="py-4 px-10 bg-[#2FBFA6] align-center justify-center rounded-[56px] text-white shadow-lg"
            onClick={() => setModal1(true)}
          >
            Book Session
          </div>
        </DialogTrigger>
        <DialogContent
          className="max-w-[900px]"
          onCloseAutoFocus={() => {
            setModal1(false);
            setModal2(false);
          }}
        >
          <div className={`${modal1 ? `block` : `hidden`}`}>
            <p className="text-[#8C8C8C] text-md font-semibold ">STEP 1 OF 2</p>
            <h2 className="text-2xl text-[#031E31] mt-6 font-semibold ">
              Available Sessions
            </h2>
            <h2 className="text-lg text-[#2A638B] mt-2 font-medium">
              Book 1 on 1 mentoring session with{" "}
              <span className="font-bold text-lg">Auvarifqi Putra</span>
            </h2>
            <div className="grid grid-cols-3 md:flex gap-5 mt-4 items-center justify-center">
              <div className="flex flex-col justify-between items-center px-8 py-5 border-[1px] border-[#8C8C8C] rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Wed</p>
                <h1 className="text-black font-bold text-[40px]">08</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <div className="flex flex-col justify-between items-center px-8 py-5 border-[2px] border-black rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Thu</p>
                <h1 className="text-black font-bold text-[40px]">09</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <div className="flex flex-col justify-between items-center px-8 py-5 border-[1px] border-[#8C8C8C] rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Fri</p>
                <h1 className="text-black font-bold text-[40px]">10</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <div className="flex flex-col justify-between items-center px-8 py-5 border-[1px] border-[#8C8C8C] rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Sat</p>
                <h1 className="text-black font-bold text-[40px]">11</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <div className="flex flex-col justify-between items-center px-6 py-5 border-[1px] border-[#8C8C8C] rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Sun</p>
                <h1 className="text-black font-bold text-[40px]">12</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <FaChevronRight className="w-4 h-4" />
            </div>
            <p className="text-lg text-[#8C8C8C] font-medium mt-5">
              Available Time Slots
            </p>
            <div className="grid grid-cols-4 mt-4 gap-5">
              <p
                onClick={() => setSelected(!selected)}
                className={`${
                  selected ? "bg-secondary-dark text-white" : "bg-white"
                } flex py-2 border-[1px] cursor-pointer border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]`}
              >
                08.30
              </p>
              <p className="flex py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                09.30
              </p>
              <p className="flex py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                10.30
              </p>
              <p className="flex py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                11.30
              </p>
              <p className="flex py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                08.30
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="flex cursor-pointer justify-center items-center mt-5 text-white rounded-full w-[80%] py-3 bg-[#2FBFA6]"
                onClick={() => {
                  setModal1(false);
                  setModal2(true);
                }}
              >
                Continue
              </div>
            </div>
          </div>

          <div className={`${modal2 ? `block` : `hidden`}`}>
            <p className="text-[#8C8C8C] text-md font-semibold ">STEP 2 OF 2</p>
            <h2 className="text-2xl text-[#031E31] mt-6 font-semibold ">
              Confirm Booking
            </h2>
            <div className="grid grid-cols-1 gap-4 md:flex items-center justify-between">
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={"/bewok.jpeg"}
                  alt="Profile"
                  width={150}
                  height={150}
                  className="h-[120px] w-[120px] rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold ">Asep Berlian</h2>
                  <p className="font-medium text-[#2A638B] text-lg">
                    Data Scientist at Kalbe
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-10 px-4 py-4 border-[3px] shadow-md border-[#F1F1F1] rounded-lg h-fit">
                <div>
                  <p className="text-xl font-bold">09 May 2024</p>
                  <p className="text-lg font-medium text-[#8C8C8C]">8:30</p>
                </div>
                <p className="text-[#2FBFA6]">Change</p>
              </div>
            </div>
            <hr className=" mt-6 h-[1px] w-[90%] mx-auto bg-[#8C8C8C]" />
            <h3 className="text-2xl font-medium mt-5">Booking Details</h3>

            <div className="geid grid-cols-1 gap-4 md:flex justify-between mt-2">
              <div>
                <p className="text-md font-semibold my-4">Select Main Topic</p>
                <Select>
                  <SelectTrigger className="w-[420px]">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Main Topic</SelectLabel>
                      <SelectItem value="data">Data</SelectItem>
                      <SelectItem value="code">Code</SelectItem>
                      <SelectItem value="oop">OOP</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="web">Web</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="text-md font-semibold my-4">
                  Add your questions for this session
                </p>
                <Textarea
                  className="w-[420px]"
                  placeholder="Type your message here."
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="flex cursor-pointer justify-center items-center mt-5  rounded-full w-[80%] py-3 bg-[#2FBFA6]"
                onClick={() => {
                  setModal1(false);
                  setModal2(true);
                  if (cookie.get("token") === undefined) {
                    toast.error("Please Login First");
                    router.push("/login");
                  } else router.push("/dashboard/mentor");
                }}
              >
                <p className="text-white">
                  Book Session for{" "}
                  <span className="font-bold text-md"> 09 May 2024</span>
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MentorModal;
