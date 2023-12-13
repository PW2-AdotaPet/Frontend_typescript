import { useState } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

import Style from "./style.module.css";
import { NavLink } from "react-router-dom";


function Card({ data, handleFavorite, handleRemoveFavorite }: any) {
  const [isSpan, setIsSpan] = useState(false);

  const isFavorite = data.is_favorite;

  const span = () => {
    setIsSpan(!isSpan);
  };


  const favorite =  () => {
    if (isFavorite) {
      handleRemoveFavorite(data);
      return
    }
    handleFavorite(data);
  };

  return (
    <div className={`${Style.container} ${isSpan ? Style.span : ""}`}>
      <div className={Style.infoTemplate}>
        <div
          className={Style.image}
          style={{
            backgroundImage: `url(${
              data.pictures.length > 0 ? data.pictures[0].image : ""
            })`,
          }}
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
                {data.raça}
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
            <span className={Style.icon} onClick={favorite}>
              {isFavorite ? (
                <AiFillHeart size={24} />
              ) : (
                <AiOutlineHeart size={24} />
              )}
            </span>
          </div>
          <div className={`${Style.buttons} ${isSpan ? Style.rotate : ""}`}>
            <NavLink to="/pet" state={data}>
              Adotar
            </NavLink>
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
          {data.donatario.username}
        </p>
        <p>
          <span>Endereço: </span>
          {data.donatario.profile.address.street}
        </p>
        <p>
          <span>Cidade: </span>
          {data.donatario.profile.address.city},{" "}
          {data.donatario.profile.address.state}
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
