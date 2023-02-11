import { tools, ToolProps } from "./Tools";
import Link from "next/link";

interface ToolListProps {
  tools: ToolProps[];
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => (
  <>
    <div className="grid w-full grid-cols-3 space-x-4 space-y-4">
      {tools.map((tool) => (
        <Link
          href="/tools/[slug]"
          as={`/tools/${tool.slug}`}
          key={tool.id}
          className="items-start justify-start p-4 border cursor-pointer border-slate-300 hover:bg-slate-50 rounded-xl"
        >
          <h1 className="text-lg text-semibold">{tool.name}</h1>
          <p>{tool.description}</p>
        </Link>
      ))}
    </div>
  </>
);

export default ToolList;
