import React, { useState } from "react";
import { Link } from "react-router-dom";
const BurgerMenu = ({ isActive }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setBurgerActive(!burgerActive);
        }}
        className={`${burgerActive ? "burger active" : "burger"}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${burgerActive ? "burger_menu active" : "burger_menu"}`}>
        <li
          onClick={() => {
            setBurgerActive(!burgerActive);
          }}
        >
          <Link to="/">
            <span>01.</span>Home
          </Link>
        </li>
        <li
          onClick={() => {
            setBurgerActive(!burgerActive);
          }}
        >
          <Link to="/projects">
            <span>02.</span>Projects
          </Link>
        </li>
        <li
          onClick={() => {
            setBurgerActive(!burgerActive);
          }}
        >
          <Link to="/contacts">
            <span>03.</span>Contacts
          </Link>
        </li>
      </ul>
    </>
  );
};

export default BurgerMenu;
