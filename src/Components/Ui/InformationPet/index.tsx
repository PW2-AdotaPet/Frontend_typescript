import Style from "./style.module.css";
import DividerContainer from "../../Layouts/DividerContainer";
import Button from "../Button";

function InformationPet({ data }: any) {
  return (
    <>
      <DividerContainer>
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
      </DividerContainer>
      <DividerContainer>
        <div className={Style.boxInfo}>
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
          <p>
            <span>E-mail: </span>
            {data.email}
          </p>
          <p>
            <span>Telefone: </span>
            {data.telefone}
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
            <span>Iadade: </span>
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
      <DividerContainer customClass="max">
        <div
          className={Style.map}
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
      </DividerContainer>
      <DividerContainer>
        <Button name="Cancelar" customClass="outline" />
        <Button name="Adotar" customClass="success" />
      </DividerContainer>
    </>
  );
}

export default InformationPet;
