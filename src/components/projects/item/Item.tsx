import { useEffect, useState } from "react";
import Button from "../../button/Button";
import "./item.scss";
import { Project } from "../../../Types";

interface Props {
  project: Project;
  onClick: () => void;
}
const Item = (props: Props) => {
  const [project, setProject] = useState({} as Project);

  useEffect(() => {
    setProject(props.project);
  }, []);
  return (
    <div className="item">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Button text={"Se mer"} onClick={props.onClick} />
    </div>
  );
};

export default Item;
