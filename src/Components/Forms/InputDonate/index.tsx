import Style from "./style.module.css"

import { useState } from "react";

function InputDonate({type, label, placeholder, onChange}: any) {

    const [data, setData] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
        onChange(e.target.value);
      };

    return (
        <div className={Style.container}>
            <label htmlFor={label}>{label}</label>
            {type === "file" ? (
                <input type={type} accept="image/*" placeholder={placeholder} onChange={handleInputChange}/>
            ) : (
                <input type={type} placeholder={placeholder} onChange={handleInputChange}/>
            )}
        </div>
    )
}

export default InputDonate