import pizza from "./assets/pizza-calculato.png";
import poster from "./assets/poster-store.png";
import lib from "./assets/isabella-library).png";
import lib2 from "./assets/lib2.png";
import lib3 from "./assets/lib3.png";
import lib4 from "./assets/lib4.png";
import pizza2 from "./assets/pizza2.png";
import pizza3 from "./assets/pizza3.png";
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
    id: "1",
    title: "Pizza Calculator",
    description: "Website pizza shop built with react and typescript.",
    github: "https://github.com/isabellaes/pizza-calculator",
    url: "https://pizza-calculator-demo.netlify.app/",
    img: [pizza, pizza2, pizza3],
  },
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
    title: "Library",
    description: "Library demo for portfolio, built with react and typescript.",
    url: "https://isabella-library.netlify.app/",
    github: "https://github.com/isabellaes/slutprojekt-js-ramverk",
    img: [lib, lib2, lib3, lib4],
  },
];
