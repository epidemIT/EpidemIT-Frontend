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
import toast from "react-hot-toast";

const fixedContentForTTS = [
  {
    content:
      "Machine Learning Introduction. In the past decade, machine learning has emerged as a rapidly growing field continuously developed by scientists worldwide.",
  },
  {
    content:
      "Machine Learning Types. Types of Machine Learning. Machine learning is divided into several categories. Specifically, there are four major categories: supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning.",
  },
  {
    content:
      "Final Project. Congratulations, you've reached the end of the academy's learning journey. You have learned the basics of machine learning and how neural networks work. To graduate from this academy, you must submit a program of artificial neural network using TensorFlow.",
  },
];

const fixedContentForSummarize =
  "Types of Machine Learning. Machine learning is divided into several categories. Specifically, there are four major categories: supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning. Supervised learning and unsupervised learning are two categories that you might be familiar with. But, do you know why these categories are divided? Yes, they are based on the characteristics of data and the type of supervision obtained by the program during training. What does that mean? Let's discuss it below. Supervised Learning. Supervised learning is a category of machine learning that includes the desired solution - called labels - in its learning process. The dataset used already has labels, and the algorithm then learns patterns from these pairs of data and labels. Supervised learning algorithms are easy to understand, and their accuracy performance is easily measurable. Supervised learning can be seen as a machine/robot that learns to answer questions according to the answers provided by humans. Unsupervised Learning. You might already guess that in unsupervised learning, the dataset used does not have labels. Correct, unsupervised learning models go through the learning process to label or group data by themselves. Unsupervised learning can be seen as a robot/machine that tries to learn to answer questions independently without any human-provided answers. Semi-supervised Learning. This category combines supervised learning and unsupervised learning. In semi-supervised learning, the training dataset partly has labels and partly does not. Google Photos is an example of an implementation we often use. In Google Photos, we can tag or label each person in a photo. Consequently, when we upload a new photo with faces of people we previously labeled, Google Photos will automatically recognize those people. One example of a semi-supervised learning model is Deep Belief Network (DBNs). DBNs are graphical models with multiple layers that efficiently learn to extract training data. Two types of layers in DBNs are visible or input layer and hidden layer. According to Geron, DBNs are based on unsupervised components called restricted Boltzmann machines (RBMs). RBMs are trained sequentially with unsupervised learning algorithms, and then the entire system is adjusted with supervised learning techniques. According to Campbell in his writing, the DBNs approach has successfully solved acoustic modeling in speech recognition. DBNs show strong predictive properties, performance improvements, and are efficient parameters. Reinforcement Learning Reinforcement Learning is known as a model that learns using reward and penalty systems. According to Winder, reinforcement learning is a technique that learns how to make the best decisions sequentially to maximize real-life success measures. Decision-makers learn through trial and error processes. Reinforcement learning has four components: action, agent, environment, and reward. Action is any decision made. For example, when we drive, actions we take include steering, pressing the accelerator, and braking. The agent is the entity making decisions, such as software, robots, or even humans. The environment is the means of interaction, which can accept actions and provide responses in the form of outcomes or data in the form of a new set of observations. Rewards are given when the agent successfully completes challenges. This feedback mechanism allows the agent to learn which actions lead to success (yielding rewards) or failure (yielding penalties). These four components represent the Markov decision process (MDP). Reinforcement learning models learn to continually receive rewards and avoid penalties. AlphaGo, a program developed by Google DeepMind, is a famous example of reinforcement learning. AlphaGo was created to play Go, an ancient board game originating from China. AlphaGo learns every move in millions of Go games to continually receive the reward of winning the game. AlphaGo became famous after becoming the first computer program to defeat a professional Go player, who is also a world champion. Amazing, isn't it? Further explanations about reinforcement learning will be covered in the next class: Machine Learning Development. In this Beginner Machine Learning class, we will focus on supervised and unsupervised learning. Further explanations about algorithms in these two categories will be available in the following modules. Keep up the spirit to move on to the next material!";

export interface CreateSoundRequest {
  text: string;
}

export default function ProjectContent({
  allMaterials,
  projectName,
  partnerName,
  progress,
}: any) {
  const [currentMateriKe, setCurrentMateriKe] = useState(1);
  const [currentMateri, setCurrentMateri] = useState(allMaterials[0]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [summarizedText, setSummarizedText] = useState<string>("");

  const handleGetAudio = async (text: string) => {
    const toastId = toast.loading("Generating audio...");
    try {
      const response = await fetch("/api/generate-voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: text,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio data");
      } else {
        toast.dismiss(toastId);
        toast.success("Audio generated successfully. Playing audio...", {
          duration: 5000,
        });
      }

      const data = await response.arrayBuffer();

      const blob = new Blob([data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);

      setAudioUrl(audioUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSummarize = async (text: string) => {
    const toastId = toast.loading("Summarizing text...");
    try {
      const response = await fetch("/api/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch summarized data");
      } else {
        toast.dismiss(toastId);
        toast.success("Text summarized successfully.", {
          duration: 5000,
        });
      }

      const data = await response.json();

      setSummarizedText(data[0].summary_text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-8 px-[11%]">
      {audioUrl && (
        <audio autoPlay>
          <source type="audio/flac" src={audioUrl!} />
        </audio>
      )}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/5 flex flex-col gap-12 mt-12">
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
                  setSummarizedText("");
                }}
              >
                {index < 2 ? <p>Materi {index + 1}</p> : <p>Final Project</p>}
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

        <div className="lg:w-3/5 flex flex-col gap-8 justify-between">
          <div>
            {/* cms shit */}
            <div className="flex justify-between mt-12 items-center cursor-pointer">
              <h1 className="text-2xl font-bold">{currentMateri?.title}</h1>
              <Image
                src="/tts.svg"
                width={30}
                height={50}
                alt="Logo"
                onClick={() =>
                  handleGetAudio(
                    fixedContentForTTS[currentMateriKe - 1].content
                  )
                }
              />
            </div>
            {currentMateri?.image?.responsiveImage &&
              currentMateri?.image?.responsiveImage.webpSrcSet && (
                <ResponsiveImage
                  data={currentMateri?.image?.responsiveImage}
                  className="object-cover w-full h-auto max-h-full"
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

          <button
            className="bg-primary py-2 px-4 w-32 text-white rounded-lg"
            onClick={() => handleSummarize(fixedContentForSummarize)}
          >
            Summarize !
          </button>

          {/* tampilkan summary text */}
          {summarizedText ? (
            <div>
              <h3 className="mb-4 font-bold text-xl"> Summmarized Text</h3>
              <div className="border-[1px] p-4 rounded-lg shadow-md">
                <p className="text-gray-500 text-lg">{summarizedText}</p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
