import Style from "./style.module.css";

function Input({ name, type, status, value, placeholder, Icon }: any) {
  return (
    <div className={Style.container}>
      <label className={Style.label} htmlFor={name}>
        {name}
      </label>
      <div className={Style.input}>
        <Icon size={24} />
        <input
          type={type}
          disabled={status}
          id={name}
          {...(value ? (value = { value }) : "")}
          {...(placeholder ? (placeholder = { placeholder }) : "")}
        />
      </div>
    </div>
  );
}

export default Input;
