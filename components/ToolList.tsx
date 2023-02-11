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
          className="flex items-start justify-start p-4 border cursor-pointer flex-vertical border-slate-300 hover:bg-slate-50 rounded-xl"
        >
          {tool.name}
        </Link>
      ))}
    </div>
  </>
);

export default ToolList;
