import { NavLink } from "react-router-dom";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { PiPawPrint } from "react-icons/pi";

import Style from "./style.module.css";
import NavItem from "./NavItem";

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
      link: "/favorito",
      namePage: "Favoritos",
    },
  ];

  return (
    <nav className={Style.container}>
      <div className={Style.navLinks}>
        <h3>Logo</h3>
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
          to="/lif"
        >
          <BiUser size={24} />
          Conta
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
