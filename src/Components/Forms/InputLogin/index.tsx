import Style from "./style.module.css";
import { useState } from "react";

function InputLogin({ Icon, Type, Name, onInputChange }: any) {

  const [inputValue, setInputValue] = useState<string>();

  const handleInputChange = (e: string) => {
    setInputValue(e)
    onInputChange(Type, e)
  }

  return (
    <div className={Style.container}>
      <Icon size={24}/>
      <input type={Type} id={Name} placeholder={Name} value={inputValue} onChange={(e) => handleInputChange(e.target.value)} />
    </div>
  );
}

export default InputLogin;
