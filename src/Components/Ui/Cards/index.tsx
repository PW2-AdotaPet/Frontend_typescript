import Card from "../Card";
import Style from "./style.module.css";


import { useAuth } from "../../../Context/AuthContext";

import { useState } from "react";

function Cards({ data }: any) {

  const [isFavorite, setFavorite] = useState();

  const { token } = useAuth();

  const handleFavorite = (data: {id: Number}) => {

    fetch(`http://localhost:8000/api/pets/${data.id}/favorite/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST"
    })}

  const handleRemoveFavorite = async (data: { id: number }) => {
    const array = JSON.parse(localStorage.getItem("Favorites") || "[]");
    const newArray = await array.filter(
      (element: { id: number }) => element.id !== data.id
    );
    localStorage.setItem("Favorites", JSON.stringify(newArray));
  };

  return (
    <div className={Style.container}>
      {data.map((element: {}, index: number) => (
        <Card
          data={element}
          key={index}
          handleFavorite={handleFavorite}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      ))}
    </div>
  );
}

export default Cards;
