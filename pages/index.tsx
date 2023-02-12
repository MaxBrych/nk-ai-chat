import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import ToolList from "../components/ToolList";
import { tools } from "../components/Tools";
import Link from "next/link";
import { Main } from "../components/Main";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState<String>("");

  console.log("Streamed response: ", generatedBios);

  const prompt = `Antworte auf die Frage folgende Frage mit "Ich bin Bob": ${bio}$`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto ">
      <div className="w-full min-h-screen flex justify-center items-center ">
        <Head>
          <title>Nordkurier AI-Tool</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className=" flex flex-col justify-between md:justify-center w-full min-h-screen lg:max-w-5xl">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
      <div className="absolute w-2/3 left-0 top-0 mr-4 -z-10 rounded-full bg-primary-100 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute w-2/3 right-0 bottom-0 mr-4 -z-10 rounded-full bg-primary-100 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute w-full mr-4 -z-10 rounded-full bg-primary-100 bg-cyan-90 opacity-20 h-full light:mix-blend-multiply filter blur-3xl animate-blob"></div>
    </div>
  );
};

export default Home;
