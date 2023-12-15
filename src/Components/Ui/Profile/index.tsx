import { useNavigate } from "react-router-dom";

import { BiPencil } from "react-icons/bi";
import Style from "./style.module.css";
import { motion } from "framer-motion";

function Profile({ image }: any) {

  const navigate = useNavigate()

  return (
    <div className={Style.container}>
      <div
        className={Style.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        whileHover={{scale: 1.1}}
        className={Style.buttonEdit}
        onClick={() => navigate("/conta/editar")}
      >
        <BiPencil size={24} />
      </motion.div>
    </div>
  );
}

export default Profile;
