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
import Chat from "../../components/Tools/Chat";
import Subheader from "../../components/Subheader";

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
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="flex flex-col justify-between md:justify-center w-full min-h-screen md:h-3/4  lg:max-w-5xl">
          <div>
            <Header />
            <Subheader tool={tool} />
          </div>
          <Chat tool={tool} />
        </div>
        <div className="absolute w-2/3 left-0 top-0 mr-4 -z-10 rounded-full bg-primary-100 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute w-2/3 right-0 bottom-0 mr-4 -z-10 rounded-full bg-primary-100 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute w-full mr-4 -z-10 rounded-full bg-primary-100 bg-cyan-90 opacity-20 h-full light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>
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
