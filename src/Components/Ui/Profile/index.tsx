import { BiPencil  } from "react-icons/bi";

import Style from "./style.module.css"

function Profile({image}: any) {
    return (
        <div className={Style.container}>
          <div className={Style.image} style={{backgroundImage: `url(${image})`}}></div>
          <div className={Style.buttonEdit}>
            <BiPencil size={24} />
          </div>
        </div>
    )
}

export default Profile