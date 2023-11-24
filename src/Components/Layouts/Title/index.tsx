import Style from "./style.module.css"

function Title({contentTitle}: any) {
    return <h1 className={Style.title}>{contentTitle}</h1>
}

export default Title