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
      <div className="w-full min-h-screen">
        <div className="flex flex-col justify-between w-full min-h-screen lg:max-w-5xl">
          <div>
            <Header />
            <Subheader tool={tool} />
          </div>
          <Chat tool={tool} />
        </div>
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
