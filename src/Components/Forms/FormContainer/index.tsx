import Style from "./style.module.css";

function FormContainer({ children }: any) {
  return <div className={Style.container}>{children}</div>;
}

export default FormContainer;
