import Style from "./style.module.css";
import { useState } from "react";

function InputLogin({ Icon, Type, Name, onChange }: any) {
  const [data, setData] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className={Style.container}>
      <Icon size={24}/>
      <input type={Type} id={Name} placeholder={Name} value={data} onChange={handleInputChange} />
    </div>
  );
}

export default InputLogin;
