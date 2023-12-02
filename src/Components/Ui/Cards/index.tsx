import Card from "../Card";
import Style from "./style.module.css";

function Cards({ data }: any) {
  const handleFavorite = (data: {}) => {
    const array = JSON.parse(localStorage.getItem("Favorites") || "[]");
    const newArray = [...array, data];
    localStorage.setItem("Favorites", JSON.stringify(newArray));
  };

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
