import { useEffect, useState } from "react";
import Project from "../../../Types";
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
          X
        </p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Module;
