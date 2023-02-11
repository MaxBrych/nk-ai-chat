import React from "react";
import Link from "next/link";
import tools from "./Tools";

export const ToolList = ({ tools }) => {
  return (
    <>
      {tools.map((tool) => {
        return (
          <div key={tool.id}>
            <Link href="/[slug]" as={`/${tool.slug}`}>
              {tool.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};
