import Style from "./style.module.css"

function DividerContainer({children, customClass}: any) {
    return (
        <div className={`${Style.container} ${Style[customClass]}`}>
            {children}
        </div>
    )
}

export default DividerContainer