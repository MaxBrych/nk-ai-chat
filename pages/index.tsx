import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Main } from "../components/Main";
import Sidebar from "../components/Sidebar";
import { tools } from "../components/Tools";

const Home: NextPage = () => {
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
      <div className="absolute w-2/3 left-0 top-0 mr-4 -z-10 rounded-full bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute w-2/3 right-0 bottom-0 mr-4 -z-10 rounded-full bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute w-full mr-4 -z-10 rounded-full bg-cyan-90 opacity-20 h-full light:mix-blend-multiply filter blur-3xl animate-blob"></div>
    </div>
  );
};

export default Home;
