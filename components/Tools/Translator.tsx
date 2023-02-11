import React from "react";
import LoadingDots from "../../components/LoadingDots";
import ResizablePanel from "../../components/ResizablePanel";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../../components/DropDown";
import Image from "next/image";

import Head from "next/head";
import { ToolProps, tools } from "../../components/Tools";

import { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface TranslatorPageProps {
  tool: ToolProps;
}

const Translator: React.FC<TranslatorPageProps> = ({ tool }) => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState<String>("");

  console.log("Streamed response: ", generatedBios);

  const toolPrompt = tool.toolPrompt;

  const prompt = `${toolPrompt}$ ${bio}$`;

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
    <>
      <div className="w-full max-w-xl">
        <div className="flex items-center mt-10 space-x-3">
          <Image
            src="/1-black.png"
            width={30}
            height={30}
            alt="1 icon"
            className="mb-5 sm:mb-0"
          />
          <p className="font-medium text-left">
            Copy your current bio{" "}
            <span className="text-slate-500">
              (or write a few sentences about yourself)
            </span>
            .
          </p>
        </div>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          className="w-full my-5 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
          placeholder={
            "e.g. Senior Developer Advocate @vercel. Tweeting about web development, AI, and React / Next.js. Writing nutlope.substack.com."
          }
        />
        <div className="flex items-center mb-5 space-x-3">
          <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
          <p className="font-medium text-left">Select your vibe.</p>
        </div>
        <div className="block">
          <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
        </div>

        {!loading && (
          <button
            className="w-full px-4 py-2 mt-8 font-medium text-white bg-black rounded-xl sm:mt-10 hover:bg-black/80"
            onClick={(e) => generateBio(e)}
          >
            Generate your bio &rarr;
          </button>
        )}
        {loading && (
          <button
            className="w-full px-4 py-2 mt-8 font-medium text-white bg-black rounded-xl sm:mt-10 hover:bg-black/80"
            disabled
          >
            <LoadingDots color="white" style="large" />
          </button>
        )}
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
      <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
      <ResizablePanel>
        <AnimatePresence mode="wait">
          <motion.div className="my-10 space-y-10">
            {generatedBios && (
              <>
                <div>
                  <h2 className="mx-auto text-3xl font-bold sm:text-4xl text-slate-900">
                    Your generated bios
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-8">
                  {generatedBios
                    .substring(generatedBios.indexOf("1") + 3)
                    .split("2.")
                    .map((generatedBio) => {
                      return (
                        <div
                          className="p-4 transition bg-white border shadow-md rounded-xl hover:bg-gray-100 cursor-copy"
                          onClick={() => {
                            navigator.clipboard.writeText(generatedBio);
                            toast("Bio copied to clipboard", {
                              icon: "✂️",
                            });
                          }}
                          key={generatedBio}
                        >
                          <p>{generatedBio}</p>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </ResizablePanel>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = tools.map((tool) => ({
    params: { slug: tool.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const tool = tools.find((tool) => tool.slug === params.slug);

  return {
    props: {
      tool,
    },
  };
};

export default Translator;
