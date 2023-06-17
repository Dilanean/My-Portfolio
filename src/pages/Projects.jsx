import React from "react";
import { useGlobalContext } from "../helpers/context";
import Project from "../components/Project";
import Loading from "../components/Loading";
const Projects = () => {
  const { isLoading, projects } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <section className="projects">
          {projects.map((project) => {
            return <Project {...project} />;
          })}
        </section>
      </>
    );
  }
};

export default Projects;
