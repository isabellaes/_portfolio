import poster from "./assets/poster-store.png";
import pyssel from "./assets/pysselfrun.png";
import { Project } from "./Types";

export const skills = [
  "C#",
  ".Net",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "SQL",
  "React",
  "React Native",
];

export const projects: Project[] = [
  {
    id: "2",
    title: "Pysselfrun",
    description: "Website for pysselfrun, built with react and typescript.",
    url: "https://pysselfrun.se/",
    img: [pyssel],
  },
  {
    id: "3",
    title: "Poster Store",
    description: "Webbshop built with react and typescript.",
    github: "https://github.com/isabellaes/poster-store",
    img: [poster],
  },
  {
    id: "4",
    title: "NPF-Planner",
    description: "En app för att skapa struktur i vardagen",
    longDescription: [],
    github: "https://github.com/isabellaes/slutprojekt-apputveckling",
    img: [],
  },
];
