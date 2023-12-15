import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";
import Animals from "../../Assets/Scripts/Animals.json";

import FormContainer from "../Forms/FormContainer";
import InputDonate from "../Forms/InputDonate";
import Select from "../Forms/Select";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import NavBar from "../Layouts/NavBar";
import Title from "../Layouts/Title";
import Button from "../Ui/Button";

function Donate() {
  const location = useLocation();
  const data = location.state;

  const sizes: { [key: string]: string } = {
    P: "Pequeno",
    M: "Médio",
    G: "Grande",
  };
  const sexos: { [key: string]: string } = { M: "Macho", F: "Fêmea" };

  data.porte = sizes[data.porte];
  data.sexo = sexos[data.sexo];

  // console.log(data.porte, sizes[data.porte]);
  console.log(data)

  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [porte, setPorte] = useState("");
  const [sexo, setSexo] = useState("");
  const [altura, setAltura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [foto, setFoto] = useState("");
  const [idade, setIdade] = useState("");
  const peso = 3.2;

  const { token } = useAuth();

  const racas = [
    { value: "Pitbull" },
    { value: "Pug" },
    { value: "Pinscher" },
    { value: "" },
  ];

  const handleDonate = async () => {
    await fetch("http://localhost:8000/api/pets/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        especie,
        raça: raca,
        porte,
        sexo,
        altura,
        comprimento,
        idade,
        peso,
      }),
    });
  };

  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <Title contentTitle="Editar pet" />
        <FormContainer>
          <Select
            options={Animals.species}
            title="Espécie"
            placeholder={data.especie}
            onChange={(value: string) => setEspecie(value)}
            Value={data.especie}
          />
          <Select
            options={racas}
            title="Raça"
            placeholder={data.raça}
            onChange={(value: string) => setRaca(value)}
            Value={data.raça}
          />
          <Select
            options={Animals.size}
            title="Porte"
            onChange={(value: string) => setPorte(value)}
            Value={data.porte}
          />
          <Select
            options={Animals.sexo}
            title="Sexo"
            onChange={(value: string) => setSexo(value)}
            Value={data.sexo}
          />
          <InputDonate
            label="Altura"
            type="text"
            onChange={(value: string) => setAltura(value)}
            Value={data.altura}
          />
          <InputDonate
            label="Comprimento"
            type="text"
            onChange={(value: string) => setComprimento(value)}
            Value={data.comprimento}
          />
          <InputDonate
            label="Foto"
            type="file"
            onChange={(value: string) => setFoto(value)}
          />
          <InputDonate
            label="Idade"
            type="number"
            onChange={(value: string) => setIdade(value)}
            Value={data.idade}
          />
        </FormContainer>
        <DividerContainer>
          <Button name="Cancelar" customClass="outline" />
          <Button name="Salvar" customClass="success" handle={handleDonate} />
        </DividerContainer>
      </Container>
    </Container>
  );
}

export default Donate;
