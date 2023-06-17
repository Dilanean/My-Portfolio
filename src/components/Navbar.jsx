import React, { useState } from "react";
import { Link } from "react-router-dom";
import CVBtn from "../components/CVBtn";
import BurgerMenu from "./BurgerMenu";
function Navbar() {
  return (
    <nav>
      <BurgerMenu />
      <ul className="nav_list">
        <li>
          <Link to="/">
            <span>01.</span>Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <span>02.</span>Projects
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <span>03.</span>Contacts
          </Link>
        </li>
      </ul>

      <CVBtn />
    </nav>
  );
}

export default Navbar;
