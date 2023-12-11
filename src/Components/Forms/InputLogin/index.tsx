import Style from "./style.module.css";
import { useState } from "react";

function InputLogin({ Icon, Type, Name }: any) {

  const [data, setData] = useState<string>();

  return (
    <div className={Style.container}>
      <Icon size={24}/>
      <input type={Type} id={Name} placeholder={Name} value={data} onChange={(e) => setData(e.target.value)} />
    </div>
  );
}

export default InputLogin;
