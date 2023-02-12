import React from "react";
import ToolList from "./ToolList";
import { tools } from "./Tools";

export const Main = () => {
  return (
    <main className="flex flex-col items-start justify-start flex-1 w-full h-full  max-w-5xl px-4 pt-6 text-center bg-white md:px-8">
      <h1 className="max-w-2xl text-2xl font-semibold tracking-tight text-left sm:text-4xl text-slate-900 mb-6">
        Willkommen zurück!
      </h1>
      <ToolList tools={tools} />
      <p className="mt-5 text-slate-500"></p>
    </main>
  );
};
