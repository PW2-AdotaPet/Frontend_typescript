import Card from "../Card";
import Style from "./style.module.css";

import { useAuth } from "../../../Context/AuthContext";

function Cards({ data }: any) {
  const { token } = useAuth();

  const handleFavorite = (data: { id: Number }) => {
    fetch(`http://localhost:8000/api/pets/${data.id}/favorite/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const handleRemoveFavorite = async (data: { id: number }) => {
    fetch(`http://localhost:8000/api/pets/${data.id}/unfavorite/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
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
