import { useEffect, useState } from "react";
import { Project } from "../../../Types";
import "./module.scss";

interface Props {
  project: Project;
  onclose: () => void;
}

const Module = (props: Props) => {
  const [project, setProject] = useState({} as Project);

  useEffect(() => {
    setProject(props.project);
  }, []);

  return (
    <div className="scrollable-module">
      <div className="content">
        <p className="close-icon" onClick={props.onclose}>
          x
        </p>
        <div className="content-div">
          <img src={project.img} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.github}>Github repot</a>
          <a href={project.url}>Länk till sidan</a>
        </div>
      </div>
    </div>
  );
};

export default Module;
