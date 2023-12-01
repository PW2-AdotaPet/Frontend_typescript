import Style from "./style.module.css";

function BoxLogin({ children }: any) {
  return <div className={Style.container}>{children}</div>;
}

export default BoxLogin;
