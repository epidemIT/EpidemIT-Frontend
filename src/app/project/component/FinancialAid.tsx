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

const FinancialAid = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div
            className="p-2 text-xl bg-white text-secondary-dark rounded-full"
            onClick={() => setModal1(true)}
          >
            Financial Aid
          </div>
        </DialogTrigger>
        <DialogContent
          className="max-w-[900px] overflow-y-scroll max-h-screen no-scrollbar"
          onCloseAutoFocus={() => {
            setModal1(false);
            setModal2(false);
          }}
        >
          <div className={`${modal1 ? `block` : `hidden`}`}>
            <p className="text-[#8C8C8C] text-md font-semibold ">STEP 1 OF 2</p>
            <h2 className="text-2xl text-[#031E31] mt-6 font-semibold ">
              Ceritakan tentang diri anda 😊
            </h2>
            <hr className=" mt-2 h-[1px] w-[90%] mx-auto bg-[#8C8C8C]" />
            <div className="flex flex-col md:flex-row">
              <div>
                <p className="text-md font-semibold my-4">
                  Apa pendidikan terakhir yang kamu tempuh?
                </p>
                <Select>
                  <SelectTrigger className="w-[420px]">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Please Select</SelectLabel>
                      <SelectItem value="data">
                        Tidak menempuh pendidikan
                      </SelectItem>
                      <SelectItem value="code">SD</SelectItem>
                      <SelectItem value="oop">SMP</SelectItem>
                      <SelectItem value="design">SMA</SelectItem>
                      <SelectItem value="web">Diploma</SelectItem>
                      <SelectItem value="web">Sarjana</SelectItem>
                      <SelectItem value="web">Magister</SelectItem>
                      <SelectItem value="web">Doktor</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <p className="text-md font-semibold my-4">
                  Berapa jumlah pendapatan kamu dalam setahun?
                </p>
                <Select>
                  <SelectTrigger className="w-[420px]">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Please Select</SelectLabel>
                      <SelectItem value="data">{`< Rp 1.000.000`}</SelectItem>
                      <SelectItem value="code">{`Rp1.000.000 - Rp 5.000.000`}</SelectItem>
                      <SelectItem value="oop">{`Rp5.000.000 - Rp 10.000.000`}</SelectItem>
                      <SelectItem value="design">{`Rp10.000.000 - Rp 20.000.000`}</SelectItem>
                      <SelectItem value="web">{`> Rp.20.000.000`}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <p className="text-md font-semibold my-4">
                  Apakah kamu sudah bekerja?
                </p>
                <Select>
                  <SelectTrigger className="w-[420px]">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Please Select</SelectLabel>
                      <SelectItem value="data">Sudah</SelectItem>
                      <SelectItem value="code">Belum</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <p className="text-md font-semibold my-4">
                  Mengapa kamu mengajukan financial aid
                </p>
                <Textarea
                  className="w-[420px]"
                  placeholder="Type your message here."
                />
              </div>

              <div>
                <p className="text-md font-semibold my-4 mx-4">
                  Course yang diperlukan
                </p>
                <div className="border-[1px] px-4 py-4 mx-4 w-[300px] rounded-lg">
                  <Image
                    src="https://i.pinimg.com/564x/62/38/dc/6238dc40add8eae74709ca45e94e4cee.jpg"
                    alt="tokped"
                    width={200}
                    height={250}
                    className="rounded-lg h-[275px] w-[250px]"
                  />
                  <h2 className="text-xl font-semibold mx-3 mt-2">
                    Data Scientist - Beginner
                  </h2>
                  <p className="text-md text-[#2A638B] mx-3">Tokopedia</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="flex cursor-pointer justify-center items-center mt-5 text-white rounded-full w-[80%] py-3 bg-[#2FBFA6]"
                onClick={() => {
                  setModal1(false);
                  setModal2(true);
                }}
              >
                Next
              </div>
            </div>
          </div>

          <div className={`${modal2 ? `block` : `hidden`}`}>
            <p className="text-[#8C8C8C] text-md font-semibold ">STEP 2 OF 2</p>
            <h2 className="text-2xl text-[#031E31] mt-6 font-semibold ">
              Yuk sedikit lagi 😅
            </h2>
            <hr className=" mt-2 h-[1px] w-[90%] mx-auto bg-[#8C8C8C]" />
            <div className="flex flex-col md:flex-row"></div>

            <div className="gap-4 justify-between mt-2">
              <div>
                <p className="text-md font-semibold my-4">
                  Seberapa sanggup kamu membayar course ini?
                </p>
                <Select>
                  <SelectTrigger className="w-[400px]">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Kesanggupan</SelectLabel>
                      <SelectItem value="data">Tidak Sanggup</SelectItem>
                      <SelectItem value="code">Sanggup</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="text-md font-semibold my-4">
                  Bagaimana project course ini akan membantu kamu meraih
                  goals-mu?
                </p>
                <Textarea
                  className="w-full"
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
                  toast.success(
                    "Terima kasih telah mengisi form, ditunggu kabarnya di email"
                  );
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }}
              >
                <p className="text-white">Submit</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FinancialAid;
