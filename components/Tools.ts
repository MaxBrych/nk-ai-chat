export interface ToolProps {
  name: string;
  id: number;
  description: string;
  slug: string;
  toolPrompt: string;
  icon: string;
}

export const tools: ToolProps[] = [
  {
    name: "Fragen beantworten",
    id: 1,
    description: "Beantwortet Fragen zu einem bestimmten Thema",
    slug: "frage-beantworten",
    toolPrompt: "",
    icon: "https://drive.google.com/uc?export=view&id=1_1_yO6icwZJ0oSlw5zjMwjn6S620qIma",
  },
  {
    name: "Grammatik korrigieren",
    id: 2,
    description: "Kontrolliert und berichtigt die Grammatik eines Textes",
    slug: "grammatik-korrigieren",
    toolPrompt: "Korrigieren Sie folgendes ins Hochdeutsch: ",
    icon: "https://drive.google.com/uc?export=view&id=1hU_gjDdWEXx75MS-Sbk7bvR1tqs56X2J",
  },
  {
    name: "Text Zusammenfassen",
    id: 3,
    description: "Fasst einen Text mit den wichtigsten Informationen zusammen",
    slug: "text-zusammenfassen",
    toolPrompt:
      "Fassen Sie den folgenden Text kurz zusammen und sodass die für den Kontext des Textes wichtigen Informationen beinhaltet sind:",
    icon: "https://drive.google.com/uc?export=view&id=1F8ux5RikXKGN_sduvCr4GORrt0YmFyim",
  },
  {
    name: "Übersetzer",
    id: 4,
    description: "Übersetzt Fremdsprachen in die deutsche Sprache",
    slug: "übersetzer",
    toolPrompt: "Übersetze folgendes in Deutsch:",
    icon: "https://drive.google.com/uc?export=view&id=16r_GlMNqAxZkfk-yzBhiS4cxjTP9PjIK",
  },
  {
    name: "Gesprächspartner",
    id: 5,
    description: "Führt eine Konversation mit einem KI-Assistenten",
    slug: "gesprächspartner",
    toolPrompt:
      "Im Folgenden sehen Sie ein Gespräch mit einem KI-Assistenten. Der Assistent ist hilfsbereit, kreativ, clever und sehr freundlich.\n\nMensch: Hallo, wer bist du?\nAI: Ich bin eine KI, die von OpenAI entwickelt wurde. Wie kann ich Ihnen heute helfen?\nMensch:",
    icon: "https://drive.google.com/uc?export=view&id=1QCZW0R7QH5RWg3V59Q8AL-af9STrFiAx",
  },
  {
    name: "Analogie erstellen",
    id: 6,
    description: "Erschafft eine Analogie aus zwei Worten zu einem Satz",
    slug: "analogy-erstellen",
    toolPrompt:
      "Erstellen Sie eine passende Analogie zum folgendem Satz die beide genannten Wörter beinhalten muss:",
    icon: "https://drive.google.com/uc?export=view&id=11zx_GRYhbbqR9MIutt2hoPjCJHa-kGzW",
  },
];
