import React from "react";
import LoadingDots from "../LoadingDots";
import ResizablePanel from "../ResizablePanel";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../DropDown";
import Image from "next/image";
import { ToolProps, tools } from "../Tools";

import { useState } from "react";

interface ChatPageProps {
  tool: ToolProps;
}

const Chat: React.FC<ChatPageProps> = ({ tool }) => {
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
    <main className="flex flex-col items-end justify-end flex-1 w-full h-full max-w-5xl px-4 pt-6 text-center bg-white sm:mt-20">
      {/* DROPDOWN */}

      <div className="hidden">
        <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
      </div>
      {/**/}
      <div />
      <div className="w-full h-full pb-4">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />

        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="my-10 space-y-10">
              {generatedBios && (
                <>
                  <div className="flex flex-col items-start justify-start max-w-xl mx-auto space-y-8">
                    {generatedBios
                      //.substring(generatedBios.indexOf("1") + 3)
                      .split("3.")
                      .map((generatedBio) => {
                        return (
                          <div
                            className="p-4 transition border shadow-md bg-dark-95 rounded-xl hover:bg-gray-100 cursor-copy"
                            onClick={() => {
                              navigator.clipboard.writeText(generatedBio);
                              toast("Bio copied to clipboard", {
                                icon: "✂️",
                              });
                            }}
                            key={generatedBio}
                          >
                            <p className="text-left">{generatedBio}</p>
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </div>
      <div className="flex flex-row items-end justify-start w-full gap-4 mb-8">
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={1}
          className="w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
          placeholder={"Dein text hier..."}
        />

        {!loading && (
          <button
            className="w-12 h-12 px-4 py-2 font-medium text-white bg-black rounded-full sm:mt-10 hover:bg-black/80"
            onClick={(e) => generateBio(e)}
          >
            &rarr;
          </button>
        )}
        {loading && (
          <button
            className="w-12 h-12 px-4 py-2 font-medium text-white bg-black rounded-full sm:mt-10 hover:bg-black/80"
            disabled
          >
            <LoadingDots color="white" style="large" />
          </button>
        )}
      </div>
    </main>
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

export default Chat;
