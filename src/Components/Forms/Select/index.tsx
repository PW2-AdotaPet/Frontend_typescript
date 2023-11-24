import Style from "./style.module.css";

function Select({ options, title, placeholder }: any) {
  return (
    <div className={Style.container}>
      <label htmlFor={title}>{title}</label>
      <select id={title} className={Style.select}>
        <option selected={true} disabled={true}>
          {placeholder}
        </option>
        {options.map((element: any, index: number) => (
          <option value={element.value} key={index}>
            {element.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
