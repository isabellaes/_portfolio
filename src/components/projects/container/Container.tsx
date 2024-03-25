import Item from "../item/Item";
import "./container.scss";
import Project from "../../../Types";
import { useState } from "react";
import Module from "../module/Module";

const Container = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const projects: Project[] = [
    { id: 1, title: "WEBBSHOP", description: "Kommer snart..." },
    { id: 2, title: "SUDOKU", description: "Kommer snart..." },
  ];
  return (
    <div id="PROJECT">
      <h1 style={{ textAlign: "center" }}>Projekt</h1>
      <div className="container">
        {projects.map((project) => (
          <Item
            project={project}
            key={project.id}
            onClick={() => setModalOpen(true)}
          />
        ))}
      </div>

      {modalOpen ? (
        <Module project={projects[0]} onclose={() => setModalOpen(false)} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Container;
