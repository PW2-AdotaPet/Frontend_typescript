import Style from "./style.module.css";

function InfoMessage(props:any) {
    return (
        <div className={Style.container}>
            <p>{props.message}</p>
        </div>
    )
}

export default InfoMessage