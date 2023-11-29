import Card from "../Card";
import Style from "./style.module.css";

function Cards({data}: any) {
  return (
    <div className={Style.container}>
      {data.map((element: {}, index: number) => (
        <Card data={element} key={index} />
      ))}
    </div>
  );
}

export default Cards;
