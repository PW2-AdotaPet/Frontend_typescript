import { NavLink } from "react-router-dom";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { LuDog } from "react-icons/lu";
import { PiPawPrint, PiHandHeart } from "react-icons/pi";
import menu from "../../../../src/Assets/Images/menu.svg";
import React, { useState } from "react";

import Style from "./style.module.css";
import NavItem from "./NavItem";
import { transform } from "@babel/core";

function NavBar() {
  const list = [
    {
      Icon: BiSearch,
      link: "/adotar",
      namePage: "Adotar",
    },
    {
      Icon: PiPawPrint,
      link: "/doar",
      namePage: "Doar",
    },
    {
      Icon: BiHeart,
      link: "/favoritos",
      namePage: "Favoritos",
    },
    {
      Icon: PiHandHeart,
      link: "/doados",
      namePage: "Pets doados",
    },
    {
      Icon: LuDog,
      link: "/adotados",
      namePage: "Pets adotados",
    },
  ];

  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={Style.container}
      style={
        window.innerWidth >= 600
          ? { transform: "none" }
          : toggle
          ? { transform: "translate(-400px)" }
          : { transform: "none" }
      }
    >
      <div className={Style.navLinks}>
        <h3></h3>
        <img
          src={menu}
          alt="Ícone de navegação Hambúrguer"
          onClick={handleClick}
          style={
            window.innerWidth >= 600
              ? { transform: "none" }
              : toggle
              ? { transform: "translate(400px)" }
              : { transform: "none" }
          }
          className={Style.menu}
        />
        <div className={Style.items}>
          {list.map((element, index) => (
            <NavItem
              link={element.link}
              namePage={element.namePage}
              Icon={element.Icon}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className={Style.account}>
        <NavLink
          className={({ isActive }) => (isActive ? Style.active : "")}
          to="/conta"
        >
          <BiUser size={24} />
          Conta
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
