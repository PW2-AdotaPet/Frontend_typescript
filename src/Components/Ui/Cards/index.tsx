import Card from "../Card";
import Style from "./style.module.css";

function Cards(props: any) {
  return (
    <div className={Style.container}>
      {props.data.map((element: {}, index: number) => (
        <Card data={element} key={index} />
      ))}
    </div>
  );
}

export default Cards;
