import Style from "./style.module.css"

function Title({contentTitle, customClass}: any) {
    return <p className={`${Style.title} ${Style[customClass]}`}>{contentTitle}</p>
}

export default Title