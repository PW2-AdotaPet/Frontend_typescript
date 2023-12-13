import Style from "./style.module.css"

import DividerContainer from "../../Layouts/DividerContainer"
import Button from "../Button"

function Modal({contentText, isOpen, handle}: any) {
    return (
        <div className={Style.container}>
            <div className={Style.modal}>
                <p>{contentText}</p>
                <DividerContainer>
                    <Button customClass="outline" name="Cancelar" handle={() => isOpen(false)} />
                    <Button customClass="success" name="Certeza" handle={handle} />
                </DividerContainer>
            </div>
        </div>
    )
}

export default Modal