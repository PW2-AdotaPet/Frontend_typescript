import Style from "./style.module.css";
import { motion } from "framer-motion";

import DividerContainer from "../../Layouts/DividerContainer";
import Button from "../Button";

function Modal({ children, isOpen, handle }: any) {
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
            {children}
            <DividerContainer>
              <Button
                customClass="outline"
                name="Cancelar"
                handle={() => isOpen(false)}
              />
              <Button customClass="success" name="Confirmar" handle={handle} />
            </DividerContainer>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Modal;
