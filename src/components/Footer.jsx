import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <p>
        &copy; Created by Arman Dilanean 2023
        <a
          className="git-footer-link"
          href="https://github.com/Dilanean"
          target="_blank"
        >
          <AiFillGithub />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
