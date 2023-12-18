import Style from "./style.module.css";
import { motion } from "framer-motion";

function Button({ name, Icon, customClass, handle, type }: any) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={handle}
      type={type === "submit" ? type : "button"}
      className={`${Style.button} ${Style[customClass]}`}
    >
      {Icon ? <Icon size={24} /> : ""}
      {name}
    </motion.button>
  );
}

export default Button;
