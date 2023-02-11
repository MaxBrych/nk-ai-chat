export interface ToolProps {
  name: string;
  id: number;
  description: string;
  slug: string;
  toolPrompt: string;
}

export const tools: ToolProps[] = [
  {
    name: "Tool 1",
    id: 1,
    description: "Tool 1 description",
    slug: "tool-1",
    toolPrompt: "Antworte auf die Frage folgende Frage mit 'Ich bin Mike':",
  },
  {
    name: "Tool 2",
    id: 2,
    description: "Tool 2 description",
    slug: "tool-2",
    toolPrompt: "Antworte auf die Frage folgende Frage mit 'Ich bin Fred':",
  },
  {
    name: "Tool 3",
    id: 3,
    description: "Tool 3 description",
    slug: "tool-3",
    toolPrompt: "Antworte auf die Frage folgende Frage mit 'Ich bin Strauch':",
  },
];
