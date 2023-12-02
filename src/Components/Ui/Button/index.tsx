import Style from "./style.module.css";

function Button({ name, Icon, customClass, handle }: any) {
  return (
    <button
      onClick={handle}
      className={`${Style.button} ${Style[customClass]}`}
    >
      {Icon ? <Icon size={24} /> : ""}
      {name}
    </button>
  );
}

export default Button;
