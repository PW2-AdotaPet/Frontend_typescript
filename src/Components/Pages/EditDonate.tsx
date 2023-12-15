import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
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

  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [porte, setPorte] = useState("");
  const [sexo, setSexo] = useState("");
  const [altura, setAltura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [foto, setFoto] = useState("");
  const [idade, setIdade] = useState("");
  const peso = 3.2;

  const navigate = useNavigate()

  const { token } = useAuth();

  const racas = [
    { value: "Pitbull" },
    { value: "Pug" },
    { value: "Pinscher" },
    { value: "" },
  ];

  const handleDonate = async () => {
    await fetch(`http://localhost:8000/api/pets/${data.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "especie": (especie === "" ? data.especie : especie),
        "raça": (raca === "" ? data.raça : raca),
        "porte":(porte === "" ? data.porte : porte),
        "sexo":(sexo === "" ? data.sexo : sexo),
        "altura":(altura === "" ? data.altura : altura),
        "comprimento":(comprimento === "" ? data.comprimento : comprimento),
        "idade":(idade === "" ? data.idade : idade),
        "peso":(peso.toString() === "" ? data.peso.toString() : peso.toString()),
      }),
    });
    navigate("/doados")
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
          <Button name="Cancelar" customClass="outline" handle={() => navigate("/doados")} />
          <Button name="Salvar" customClass="success" handle={handleDonate} />
        </DividerContainer>
      </Container>
    </Container>
  );
}

export default Donate;
