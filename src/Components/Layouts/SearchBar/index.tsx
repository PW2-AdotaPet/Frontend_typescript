import { BsSearch } from "react-icons/bs"
import { FiFilter } from "react-icons/fi"

import Style from "./style.module.css"

function SearchBar() {
    return (
        <div className={Style.container}>
            <div className={Style.search}>
                <BsSearch size={24}/>
                <input type="text" placeholder="Pesquisar" />
            </div>
            <button className={Style.button}>
                <FiFilter size={24}/>
            </button>
        </div>
    )
}

export default SearchBar