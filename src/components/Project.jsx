import React from "react";
import { Link } from "react-router-dom";

const Project = ({ img, name, date, technologies, description }) => {
  return (
    <Link to={`/project/${name}`}>
      <div className="project">
        <div
          className="project_image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="project_name">{name}</div>
        <div className="project_date">{date}</div>
        <div className="project_technologies">
          {technologies.map((technology) => (
            <p>{technology}</p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;
