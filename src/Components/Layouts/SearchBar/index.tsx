import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

import Style from "./style.module.css";
import { motion } from "framer-motion";


import { useAuth } from "../../../Context/AuthContext";

function SearchBar({ setData }: any) {

  const { token } = useAuth();
  const [value, setValue] = useState<string>("");

  const fetchURLByRoute = {
    "/adotar": "http://localhost:8000/api/pets/",
    "/doados": "http://localhost:8000/api/pets/donated/",
    "/adotados": "http://localhost:8000/api/pets/adopted/",
  }
  const pagePathName = window.location.pathname

  const searchFunction = () => {

    fetch(fetchURLByRoute[pagePathName as keyof typeof fetchURLByRoute], {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      if (value.length > 0) {
        let filteredResult = result.filter((element: {especie: string, raça: string}) => element.especie.toUpperCase().includes(value.toUpperCase()) || element.raça.toUpperCase().includes(value.toUpperCase()))
        return setData(filteredResult)
      }
      return setData(result)
    })
    .catch(error => console.error('Error fetching data:', error));
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
