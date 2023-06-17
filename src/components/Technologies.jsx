import React from "react";
import react from "../../images/react.png";
import js from "../../images/js.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import sass from "../../images/sass.png";
import figma from "../../images/figma.png";
import github from "../../images/github.png";

const Technologies = () => {
  return (
    <div className="technologies">
      <h3>
        Here are a few <span>technologies</span> I’ve been working with recently
      </h3>
      <img src={react} alt="react icon" />
      <img src={js} alt="js icon" />
      <img src={html} alt="html icon" />
      <img src={css} alt="css icon" />
      <img src={sass} alt="sass icon" />
      <img src={figma} alt="figma icon" />
      <img src={github} alt="github icon" />
    </div>
  );
};

export default Technologies;
