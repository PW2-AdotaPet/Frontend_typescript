import Style from "./style.module.css";

function Button({ name, customClass, handle }: any) {
  return (
    <button
      onClick={handle}
      className={`${Style.button} ${Style[customClass]}`}
    >
      {name}
    </button>
  );
}

export default Button;
