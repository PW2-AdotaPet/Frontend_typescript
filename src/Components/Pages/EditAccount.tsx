import FormContainer from "../Forms/FormContainer";
import InputDonate from "../Forms/InputDonate";
import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
import NavBar from "../Layouts/NavBar";
import Title from "../Layouts/Title";

import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";

function EditAccount() {
  const [username, setUsername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");

  const { token } = useAuth();

  const handleEditAccount = async () => {
    const response = await fetch("http://localhost:8000/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const idUsuario = data.id;
    const idProfileUsuario = data.profile.id;

    await fetch(`http://localhost:8000/api/users/${idUsuario}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username,
        email,
        first_name: firstName,
        last_name: lastName,
      }),
    });

    await fetch(`http://localhost:8000/api/users/${idProfileUsuario}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        phone,
      }),
    });
  };

  handleEditAccount();

  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <Title contentTitle="Editar conta" customClass="title" />
        <Main customClass="scroll">
          <FormContainer>
            <InputDonate
              type="text"
              label="Username"
              placeholder="Digite seu username"
              onChange={(value: string) => setUsername(value)}
            />
            <InputDonate
              type="text"
              label="Nome"
              placeholder="Digite seu username"
              onChange={(value: string) => setfirstName(value)}
            />
            <InputDonate
              type="text"
              label="Sobrenome"
              placeholder="Digite seu username"
              onChange={(value: string) => setLastName(value)}
            />
            <InputDonate
              type="email"
              label="E-mail"
              placeholder="Digite seu username"
              onChange={(value: string) => setEmail(value)}
            />
            <InputDonate
              type="tel"
              label="Telefone"
              placeholder="Digite seu username"
              onChange={(value: string) => setPhone(value)}
            />
            {/* <InputDonate
              type="date"
              label="Data de nascimento"
              placeholder="Digite seu username"
            /> Ainda falta implementar data de nascimento no model do banco */}
            <InputDonate
              type="text"
              label="Rua"
              placeholder="Digite seu username"
              onChange={(value: string) => setStreet(value)}
            />
            <InputDonate
              type="text"
              label="Cidade"
              placeholder="Digite seu username"
              onChange={(value: string) => setCity(value)}
            />
            <InputDonate
              type="text"
              label="UF/Estado"
              placeholder="Digite seu username"
              onChange={(value: string) => setState(value)}
            />
            {/* <InputDonate
              type="file"
              label="Foto de perfil"
              placeholder="Digite seu username"
            /> Depois eu implemento isso! */}
          </FormContainer>
        </Main>
      </Container>
    </Container>
  );
}

export default EditAccount;
