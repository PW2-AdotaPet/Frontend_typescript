import { Link } from "react-router-dom";
import Style from "./style.module.css";

function LinkLogin({ Name }: any) {
  return (
    <p className={Style.link}>
      <Link to="/register">{Name}</Link>
    </p>
  );
}

export default LinkLogin;
