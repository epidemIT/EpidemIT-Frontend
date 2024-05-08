"use client";
import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectModal = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div
            className="py-4 px-10 bg-[#2FBFA6] align-center justify-center rounded-[56px] text-white shadow-lg"
            onClick={() => setModal(true)}
          >
            Book Session
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[45%]">
          <div className="">
            <p className="text-[#8C8C8C] text-md font-semibold ">STEP 1 OF 2</p>
            <h2 className="text-2xl text-[#031E31] mt-6 font-semibold ">
              Available Sessions
            </h2>
            <h2 className="text-lg text-[#2A638B] mt-2 font-medium">
              Book 1 on 1 mentoring session with{" "}
              <span className="font-bold text-lg">Asep Berlian</span>
            </h2>
            <div className="flex gap-5 mt-4 items-center justify-center">
              <div className="flex flex-col justify-between items-center px-6 py-5 border-[1px] border-[#8C8C8C] rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Wed</p>
                <h1 className="text-black font-bold text-[40px]">08</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <div className="flex flex-col justify-between items-center px-6 py-5 border-[2px] border-black rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Thu</p>
                <h1 className="text-black font-bold text-[40px]">09</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <div className="flex flex-col justify-between items-center px-6 py-5 border-[1px] border-[#8C8C8C] rounded-[10px]">
                <p className="text-md text-[#8C8C8C] font-medium">Fri</p>
                <h1 className="text-black font-bold text-[40px]">10</h1>
                <h1 className="text-black font-bold text-[20px]">May</h1>
                <p className="text-md text-[#26B43C]">10 slots</p>
              </div>
              <div className="flex flex-col justify-between items-center px-6 py-5 border-[1px] border-[#8C8C8C] rounded-[10px]">
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
              <p className="flex py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                08.30
              </p>
              <p className="flex px-4 py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                09.30
              </p>
              <p className="flex px-4 py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                10.30
              </p>
              <p className="flex px-4 py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                11.30
              </p>
              <p className="flex px-4 py-2 border-[1px] border-[#8C8C8C] font-bold text-lg justify-center rounded-[10px]">
                08.30
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center mt-5 text-white rounded-full w-[80%] py-3 bg-[#2FBFA6]">
                Continue
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectModal;
