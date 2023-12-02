import { Link } from "react-router-dom";
import Style from "./style.module.css";

function LinkLogin({ name, link }: any) {
  return (
    <p className={Style.link}>
      <Link to={link}>{name}</Link>
    </p>
  );
}

export default LinkLogin;
