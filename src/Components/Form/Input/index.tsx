import Style from "./style.module.css";

function Input({ name, value, Icon }: any) {
  return (
    <div className={Style.container}>
      <label className={Style.label} htmlFor={name}>{name}</label>
      <div className={Style.input}>
        <Icon size={24} />
        <input type="text" disabled={true} id={name} value={value} />
      </div>
    </div>
  );
}

export default Input;
