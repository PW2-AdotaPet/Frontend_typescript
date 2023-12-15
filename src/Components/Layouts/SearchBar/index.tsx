import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

import Style from "./style.module.css";
import { motion } from "framer-motion";

function SearchBar({ setData }: any) {
  const [value, setValue] = useState<string>("");
  const searchFunction = () => {
    // fetch('http://localhost:8000/api/pets/')
    // .then(response => response.json())
    // .then(result => setData(result))
    // .catch(error => console.error('Error fetching data:', error));
    setData([]);
  };

  return (
    <div className={Style.container}>
      <div className={Style.search}>
        <BsSearch size={24} />
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={Style.button}
        onClick={searchFunction}
      >
        <FiFilter size={24} />
      </motion.button>
    </div>
  );
}

export default SearchBar;
