import React from "react";
import Link from "next/link";

export const ToolList = ({ tools }) => {
  console.log("Tools: ", tools);
  return (
    <>
      {tools.map((tool) => {
        return (
          <div>
            <Link href="/[slug]" as={`/${tool.slug}`}>
              {tool.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};
