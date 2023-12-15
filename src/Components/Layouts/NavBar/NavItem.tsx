import { NavLink } from "react-router-dom";
import Style from "./style.module.css";
import { motion } from "framer-motion";

function NavItem(props: any) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? Style.active : "")}
      to={props.link}
    >
      <motion.span
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        whileHover={{ scale: 1.1 }}
      >
        <props.Icon size={24} />
        <p>{props.namePage}</p>
      </motion.span>
    </NavLink>
  );
}

export default NavItem;
