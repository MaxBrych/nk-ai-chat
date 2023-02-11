import { tools, ToolProps } from "./Tools";
import Link from "next/link";

interface ToolListProps {
  tools: ToolProps[];
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => (
  <>
    {tools.map((tool) => (
      <p key={tool.id}>
        <Link href="/tools/[slug]" as={`/tools/${tool.slug}`}>
          {tool.name}
        </Link>
      </p>
    ))}
  </>
);

export default ToolList;
