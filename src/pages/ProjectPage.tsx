import { Project } from "../Types";
import { projects } from "../data";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./projectPage.scss";
import SlideShowImg from "../components/slideShowImg/slideShowImg";

const ProjectPage = () => {
  const [project, setProject] = useState<Project>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const p = projects.find((p) => p.id === params.id);
    if (p) {
      setProject(p);
    }
  });

  return (
    <div className="projectPage">
      {project ? (
        <>
          <SlideShowImg images={project.img} currentImg={project.img[0]} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.github}>Github repo</a>
          <a href={project.url}>Länk till sidan</a>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectPage;
