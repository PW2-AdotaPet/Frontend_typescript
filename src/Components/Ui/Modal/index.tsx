import Style from "./style.module.css";
import { motion } from "framer-motion";

import DividerContainer from "../../Layouts/DividerContainer";
import Button from "../Button";

function Modal({ contentText, isOpen, handle }: any) {
  return (
    <>
      {isOpen && (
        <motion.div
          className={Style.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => isOpen(false)}
        >
          <motion.div
            className={Style.modal}
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
          >
            <p>{contentText}</p>
            <DividerContainer>
              <Button
                customClass="outline"
                name="Cancelar"
                handle={() => isOpen(false)}
              />
              <Button customClass="success" name="Certeza" handle={handle} />
            </DividerContainer>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Modal;
