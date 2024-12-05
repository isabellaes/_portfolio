import Item from "../item/Item";
import "./container.scss";
import { Project } from "../../../Types";
import { useState } from "react";
import Module from "../module/Module";
import { projects } from "../../../data";

const Container = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState({} as Project);

  return (
    <div id="PROJECT">
      <h1 style={{ textAlign: "center" }}>Projekt</h1>
      <div className="container">
        {projects.map((project) => (
          <Item
            project={project}
            key={project.id}
            onClick={() => {
              setProject(project);
              setModalOpen(true);
            }}
          />
        ))}
      </div>

      {modalOpen ? (
        <Module project={project} onclose={() => setModalOpen(false)} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Container;
