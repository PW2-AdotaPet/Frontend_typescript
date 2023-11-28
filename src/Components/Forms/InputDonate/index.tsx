import Style from "./style.module.css"

function InputDonate({type, label, placeholder}: any) {
    return (
        <div className={Style.container}>
            <label htmlFor={label}>{label}</label>
            {type === "file" ? (
                <input type={type} accept="image/*" placeholder={placeholder} />
            ) : (
                <input type={type} placeholder={placeholder} />
            )}
        </div>
    )
}

export default InputDonate