import Style from "./style.module.css";

import { useState } from "react";

function Select({ options, title, placeholder, onChange, Value }: any) {

  const [data, setData] = useState<string>('');

  const handleInputChange = (e: string) => {
    setData(e);
    onChange(e);
  };

  return (
    <div className={Style.container}>
      <label htmlFor={title}>{title}</label>
      <select id={title} className={Style.select} required onChange={(e) => {handleInputChange(e.target.value)}}>
        <option selected={true} disabled={true}>
          {Value ? Value : placeholder}
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
