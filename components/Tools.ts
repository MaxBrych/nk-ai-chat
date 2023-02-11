interface Tool {
  name: string;
  id: number;
  description: string;
  slug: string;
}

const tools: Tool[] = [
  {
    name: "Tool 1",
    id: 1,
    description: "Tool 1 description",
    slug: "tool-1",
  },
  {
    name: "Tool 2",
    id: 2,
    description: "Tool 2 description",
    slug: "tool-2",
  },
  {
    name: "Tool 3",
    id: 3,
    description: "Tool 3 description",
    slug: "tool-3",
  },
];

export default tools;
