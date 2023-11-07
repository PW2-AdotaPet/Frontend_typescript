import { NavLink } from "react-router-dom";
import Style from "./style.module.css"

function NavItem (props: any) {
    return (
        <NavLink className={({isActive}) => ( isActive ? Style.active : "" )} to={props.link}>
            <props.Icon size={24}/>
            <p>{props.namePage}</p>  
        </NavLink>
    )
}

export default NavItem