import { ToolProps, tools } from "../../components/Tools";
import Link from "next/link";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../../components/DropDown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Translator from "../../components/Tools/Translator";

interface ToolPageProps {
  tool: ToolProps;
}

const ToolPage: React.FC<ToolPageProps> = ({ tool }) => {
  return (
    <>
      <Head>
        <title>Twitter Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 text-center sm:mt-20">
        <Link href="/" as={`/`}>
          Go back
        </Link>
        <h1>{tool.name}</h1>
        <p>{tool.description}</p>
        <Translator tool={tool} />
      </main>
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

export default ToolPage;
