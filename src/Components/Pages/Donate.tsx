import FormContainer from "../Forms/FormContainer";
import InputDonate from "../Forms/InputDonate";
import Select from "../Forms/Select";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import NavBar from "../Layouts/NavBar";
import Title from "../Layouts/Title";
import Button from "../Ui/Button";

import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

function Donate() {

  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [porte, setPorte] = useState('');
  const [sexo, setSexo] = useState('');
  const [altura, setAltura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [foto, setFoto] = useState('');
  const [idade, setIdade] = useState('');
  const peso = 3.2

  const { token } = useAuth();

  const racas = [{ value: "Pitbull" }, { value: "Pug" }, { value: "Pinscher" }];
  const portes = [{value: "P"}, {value: "M"}, {value: "G"}]
  const sexos = [{value: "M"}, {value: "F"}]

  const handleDonate = async () => {
    const response = await fetch('http://localhost:8000/api/pets/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ especie, "raça": raca, porte, sexo, altura, comprimento, idade, peso }),
    })

  }

  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <Title contentTitle="Doação de pet" />
        <FormContainer>
          <Select
            options={racas}
            title="Espécie"
            placeholder="Selecione a espécie"
            onChange={(value: string) => setEspecie(value)}
          />
          <Select options={racas} title="Raça" placeholder="Selecione a raça" onChange={(value: string) => setRaca(value)}/>
          <Select
            options={portes}
            title="Porte"
            placeholder="Selecione o porte"
            onChange={(value: string) => setPorte(value)}
          />
          <Select options={sexos} title="Sexo" placeholder="Selecione o sexo"  onChange={(value: string) => setSexo(value)}/>
          <InputDonate
            label="Altura"
            placeholder="Digite a altura"
            type="text"
            onChange={(value: string) => setAltura(value)}
          />
          <InputDonate
            label="Comprimento"
            placeholder="Digite o comprimento"
            type="text"
            onChange={(value: string) => setComprimento(value)}
          />
          <InputDonate
            label="Foto"
            type="file"
            onChange={(value: string) => setFoto(value)}
          />
          <InputDonate
            label="Idade"
            placeholder="0"
            type="number"
            onChange={(value: string) => setIdade(value)}
          />
        </FormContainer>
        <DividerContainer>
          <Button name="Cancelar" customClass="outline" />
          <Button name="Doar" customClass="success" handle={ handleDonate } />
        </DividerContainer>
      </Container>
    </Container>
  );
}

export default Donate;
