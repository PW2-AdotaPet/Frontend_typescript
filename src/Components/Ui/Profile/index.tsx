import { useState } from "react";

import { BiPencil } from "react-icons/bi";
import Style from "./style.module.css";
import { motion } from "framer-motion";

import Modal from "../Modal";

function Profile({ image }: any) {
  const [openModal, setOpenModal] = useState(false);
  const [fileImage, setFileImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileImage(e.target.files[0]);
    }
  };

  const handleUploadImage = async () => {
    if (fileImage) {
      const formData = new FormData()
      formData.append('file', fileImage)
      console.log(formData)
    } else {
      console.warn("Deu ruim!")
    }
  }

  return (
    <div className={Style.container}>
      <div
        className={Style.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        className={Style.buttonEdit}
        onClick={() => setOpenModal(true)}
      >
        <BiPencil size={24} />
      </motion.div>
      <input type="file"  id="perfil" />
      <button onClick={handleUploadImage}>Enviar</button>
    </div>
  );
}

export default Profile;
