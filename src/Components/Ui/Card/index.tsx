import { useEffect, useState } from "react";
import { useAuth } from "../../../Context/AuthContext";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

import Style from "./style.module.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Card({ data, handleFavorite, handleRemoveFavorite }: any) {
  const { token } = useAuth();
  const [isSpan, setIsSpan] = useState(false);

  const span = () => {
    setIsSpan(!isSpan);
  };

  const isFavorite = data.is_favorite;

  const [petFavorite, setPetFavorite] = useState(isFavorite);

  const favorite = () => {
    if (isFavorite) {
      setPetFavorite(!petFavorite);
      handleRemoveFavorite(data);
      window.location.reload();
      return;
    }
    setPetFavorite(!petFavorite);
    handleFavorite(data);
  };

  const [userData, setUserData] = useState<{ id?: number }>({});

  useEffect(() => {
    const getIdUser = async () => {
      const response = await fetch("http://localhost:8000/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserData(data);
    };
    getIdUser();
  }, []);

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
              {userData.id !== data.adotante ? (
                userData.id !== data.donatario.id ? (
                  petFavorite ? (
                    <AiFillHeart size={24} />
                  ) : (
                    <AiOutlineHeart size={24} />
                  )
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </span>
          </div>
          <div className={`${Style.buttons} ${isSpan ? Style.rotate : ""}`}>
              {userData.id !== data.adotante ? (
                userData.id !== data.donatario.id ? (
                  <motion.span
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <NavLink to="/pet" state={data}>
                      Adotar
                    </NavLink>
                  </motion.span>
                ) : (
                  data.adotante > 0 ? (
                    <p className={Style.a}>O seu pet já foi adotado</p>
                  ) : (
                    <motion.span
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <NavLink to="/doados/editar" state={data}>
                      Editar
                    </NavLink>
                  </motion.span>
                  )
                )
              ) : (
                <p className={Style.a}>Mais informações abaixo</p>
              )}
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
          {data.donatario.profile.human_readable_address
            ? data.donatario.profile.human_readable_address.street
            : ""}
        </p>
        <p>
          <span>Cidade: </span>
          {data.donatario.profile.human_readable_address
            ? data.donatario.profile.human_readable_address.city
            : ""}
          ,{" "}
          {data.donatario.profile.human_readable_address
            ? data.donatario.profile.human_readable_address.state
            : ""}
        </p>
      </div>
      <div className={Style.infoCard}>
        <h2>Sobre o Pet</h2>
        <p>
          <span>Medidas: </span>A: {data.altura} cm | C: {data.comprimento} cm
        </p>
      </div>
    </div>
  );
}

export default Card;
