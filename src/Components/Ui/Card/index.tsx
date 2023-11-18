import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

import Style from "./style.module.css";
import { NavLink } from "react-router-dom";

function Card({ data }: any) {
  const [isSpan, setIsSpan] = useState(false);

  const span = () => {
    setIsSpan(!isSpan);
  };

  return (
    <div className={`${Style.container} ${isSpan ? Style.span : ""}`}>
      <div className={Style.infoTemplate}>
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div className={Style.Pet}>
          <div className={Style.infoPet}>
            <div>
              <p>
                <span>Espécie: </span>
                {data.especie}
              </p>
              <p>
                <span>Raça: </span>
                {data.raca}
              </p>
              <p>
                <span>Porte: </span>
                {data.porte}
              </p>
              <p>
                <span>Sexo: </span>
                {data.sexo}
              </p>
              <p>
                <span>Idade: </span>
                {data.idade} anos
              </p>
            </div>
            <AiOutlineHeart size={24} />
          </div>
          <div className={`${Style.buttons} ${isSpan ? Style.rotate : ""}`}>
            <NavLink to="/pet" state={data}>Adotar</NavLink>
            <button onClick={span}>
              <MdArrowForwardIos size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className={Style.infoCard}>
        <h2>Sobre o Doador</h2>
        <p>
          <span>Nome: </span>
          {data.dono}
        </p>
        <p>
          <span>Endereço: </span>
          {data.endereco}, {data.numero}
        </p>
        <p>
          <span>Cidade: </span>
          {data.cidade}, {data.UF}
        </p>
      </div>
      <div className={Style.infoCard}>
        <h2>Sobre o Pet</h2>
        <p>
          <span>Medidas: </span>A: {data.altura}cm | C: {data.comprimento}cm
        </p>
        <p>
          <span>Peso: </span>
          {data.peso}Kg
        </p>
      </div>
    </div>
  );
}

export default Card;
