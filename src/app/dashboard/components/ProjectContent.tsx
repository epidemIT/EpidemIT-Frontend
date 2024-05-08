"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import React from "react";
import {
  Image as ResponsiveImage,
  StructuredText,
  VideoPlayer,
} from "react-datocms";

export interface CreateSoundRequest {
  text: string;
}


export default function ProjectContent({
  allMaterials,
  projectName,
  partnerName,
  progress,
}: any) {
  /*
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const handleGetAudio = async (request: CreateSoundRequest) => {

    try {
      const response = await fetch("/api/generate-sound", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: request.text,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio data");
      }

      const data = await response.arrayBuffer();

      const blob = new Blob([data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);

      setAudioUrl(audioUrl);
    } catch (error) {
      console.error(error)
    }
  };
  Api tts */

  const [currentMateriKe, setCurrentMateriKe] = useState(1);
  const [currentMateri, setCurrentMateri] = useState(allMaterials[0]);

  return (
    <div className="py-8 px-[11%]">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="w-full flex gap-16">
        <div className="w-2/5 flex flex-col gap-12 mt-12">
          <div>
            <h1 className="text-2xl font-bold">{projectName}</h1>
            <p className="text-gray-500 text-lg">{partnerName}</p>
          </div>

          <div className="bg-[#FBFBFB] rounded-lg">
            {allMaterials.map((material: any, index: number) => (
              <div
                key={index}
                className={`p-6 cursor-pointer text-lg border-b-2 ${
                  currentMateriKe === index + 1 ? "bg-primary text-white" : ""
                }`}
                onClick={() => {
                  setCurrentMateriKe(index + 1);
                  setCurrentMateri(material);
                }}
              >
                <p>Materi {index + 1}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl flex justify-between">
              <p className="font-semibold">Progress</p>

              <p className="text-gray-500">{progress * 100}%</p>
            </div>

            <ProgressBar
              completed={progress * 100}
              bgColor={progress * 100 < 50 ? "#FF0000" : "#00FF00"}
              height="16px"
              isLabelVisible={false}
            />
          </div>
        </div>

        <div className="w-3/5 flex flex-col justify-between">
          <div>
            {/* cms shit */}
            <div className="flex justify-between mt-12 items-center">
              <h1 className="text-2xl font-bold">{currentMateri.title}</h1>
              <Image src="/tts.svg" width={30} height={50} alt="Logo" />
            </div>
            {currentMateri?.image?.responsiveImage &&
              currentMateri?.image?.responsiveImage.webpSrcSet && (
                <ResponsiveImage
                  data={currentMateri?.image?.responsiveImage}
                  className="object-cover w-full h-auto min-h-full"
                  layout="responsive"
                />
              )}
            <p className="text-gray-500 text-lg mt-4">
              <StructuredText data={currentMateri?.content1} />
            </p>

            {currentMateri?.video && (
              <VideoPlayer data={currentMateri?.video} />
            )}

            <p className="text-gray-500 text-lg mt-4">
              <StructuredText data={currentMateri?.content} />
            </p>

            {currentMateri?.file?.responsiveImage &&
              currentMateri?.file?.responsiveImage.webpSrcSet && (
                <ResponsiveImage
                  data={currentMateri?.file?.responsiveImage}
                  className="object-cover w-full h-auto min-h-full"
                  layout="responsive"
                />
              )}
          </div>

          <button className="bg-primary py-2 px-4 w-32 text-white rounded-lg">
            Summarize !
          </button>
        </div>
      </div>
    </div>
  );
}
