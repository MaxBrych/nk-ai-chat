export interface ToolProps {
  name: string;
  id: number;
  description: string;
  slug: string;
  toolPrompt: string;
}

export const tools: ToolProps[] = [
  {
    name: "Fragen beantworten",
    id: 1,
    description: "Tool 1 description",
    slug: "tool-1",
    toolPrompt:
      'Ich bin ein hochintelligenter Fragen beantwortender Bot. Wenn du mir eine Frage stellst, die auf der Wahrheit beruht, werde ich dir die Antwort geben. Wenn du mir eine Frage stellst, die Unsinn oder Betrug ist oder auf die es keine klare Antwort gibt, antworte ich mit "Unbekannt".\n\nQ: Wie hoch ist die Lebenserwartung der Menschen in den Vereinigten Staaten?\nA: Die Lebenserwartung der Menschen in den Vereinigten Staaten beträgt 78 Jahre.\n\nQ: Wer war 1955 Präsident der Vereinigten Staaten?\nA: Dwight D. Eisenhower war 1955 Präsident der Vereinigten Staaten.\n\nQ: Welcher Partei gehörte er an? \nA: Er gehörte der Republikanischen Partei an. \n\nQ: Was ist die Quadratwurzel von Banane? \nA: Unbekannt. \n\nQ: Wie funktioniert ein Teleskop? \nA: Teleskope verwenden Linsen oder Spiegel, um das Licht zu bündeln und Objekte näher erscheinen zu lassen. \n\nQ: Wo wurden die Olympischen Spiele 1992 ausgetragen?\nA: Die Olympischen Spiele 1992 wurden in Barcelona, Spanien, ausgetragen.\n\nQ: Wie viele Squigs sind in einem Bonk?\nA: Unbekannt\n\nQ: Wo liegt das Tal der Könige?\nA:',
  },
  {
    name: "Grammatik korrigieren",
    id: 2,
    description: "Tool 2 description",
    slug: "tool-2",
    toolPrompt:
      "Korrigieren Sie das ins Hochdeutsche: \n\nSie ging nicht auf den Markt.: ",
  },
  {
    name: "Text Zusammenfassen",
    id: 3,
    description: "Tool 3 description",
    slug: "tool-3",
    toolPrompt:
      "Fassen Sie den folgenden Text kurz zusammen und sodass die für den Kontext des Textes wichtigen Informationen beinhaltet sind:",
  },
  {
    name: "Übersetzer",
    id: 4,
    description: "Tool 3 description",
    slug: "tool-4",
    toolPrompt:
      "Übersetze folgendes 1. Französisch, 2. Spanisch und 3. Japanisch:",
  },
  {
    name: "Virtueller Gesprächspartner",
    id: 5,
    description: "Tool 3 description",
    slug: "tool-5",
    toolPrompt:
      "Im Folgenden sehen Sie ein Gespräch mit einem KI-Assistenten. Der Assistent ist hilfsbereit, kreativ, clever und sehr freundlich.\n\nMensch: Hallo, wer bist du?\nAI: Ich bin eine KI, die von OpenAI entwickelt wurde. Wie kann ich Ihnen heute helfen?\nMensch:",
  },
  {
    name: "Analogie erstellen",
    id: 6,
    description: "Tool 3 description",
    slug: "tool-6",
    toolPrompt: "Erstellen Sie eine Analogie zu diesem Satz:",
  },
];
