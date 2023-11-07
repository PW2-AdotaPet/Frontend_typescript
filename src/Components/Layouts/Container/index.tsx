import Style from "./style.module.css"

function Container(props:any) {
    return (
        <div className={`${Style.container} ${Style[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container