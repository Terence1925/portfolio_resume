import React from "react";
import usePageTitle from "./hooks/usePageTitle";
import "./components/projects.css";
const Projects = () => {
  usePageTitle("Projects | Terence");
  return (
    <div className="projects">
      <p>Projects</p>
    </div>
  );
};

export default Projects;
