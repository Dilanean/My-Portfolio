import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../helpers/context";

const Project = () => {
  const name = useParams();
  const { projects } = useGlobalContext();
  const project = projects.find((item) => item.name === name.name);

  return (
    <section className="single-project-page">
      <div className="project-image">
        <img src={project.img} alt="project image" loading="lazy" />
      </div>

      <div className="project-details">
        <h2 className="project-name">{project.name}</h2>
        <div className="project-date">{project.date}</div>
        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <p>{technology}</p>
          ))}
        </div>
        <div className="project_description">{project.description}</div>
        <a href={project.url} target="_blank" className="project-url">
          View Site
        </a>
      </div>
    </section>
  );
};

export default Project;
