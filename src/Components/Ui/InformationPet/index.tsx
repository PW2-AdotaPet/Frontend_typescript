import { useNavigate } from "react-router-dom";
import Style from "./style.module.css";
import DividerContainer from "../../Layouts/DividerContainer";
import Button from "../Button";
import { useAuth } from "../../../Context/AuthContext";

function InformationPet({ data }: any) {
  const { token } = useAuth();
  const navigate = useNavigate();

  function goBack() {
    navigate("/adotar");
  }

  const handleAdopte = async () => {
    await fetch(`http://localhost:8000/api/pets/${data.id}/adopt/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    navigate("/adotados");
  };

  return (
    <>
      <DividerContainer customClass="containerAdotar">
        {data.pictures.map((picture: any) => (
          <div
            key={picture.id}
            className={Style.image}
            style={{ backgroundImage: `url(${picture.image})` }}
          ></div>
        ))}
      </DividerContainer>
      <DividerContainer>
        <div className={Style.boxInfo}>
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
          <p>
            <span>E-mail: </span>
            {data.donatario.email}
          </p>
          <p>
            <span>Telefone: </span>
            {data.donatario.profile.phone}
          </p>
        </div>
        <div className={Style.boxInfo}>
          <h2>Sobre o Pet</h2>
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
            {data.idade}
          </p>
          <p>
            <span>Medidas: </span>
            A:{data.altura} | C:{data.comprimento}
          </p>
          <p>
            <span>Peso: </span>
            {data.peso}
          </p>
        </div>
      </DividerContainer>
      <DividerContainer>
        <Button name="Cancelar" customClass="outline" handle={goBack} />
        <Button name="Adotar" customClass="success" handle={handleAdopte} />
      </DividerContainer>
    </>
  );
}

export default InformationPet;
