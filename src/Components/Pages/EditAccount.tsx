import FormContainer from "../Forms/FormContainer";
import InputDonate from "../Forms/InputDonate";
import Container from "../Layouts/Container";
import NavBar from "../Layouts/NavBar";
import Title from "../Layouts/Title";

import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import DividerContainer from "../Layouts/DividerContainer";
import Button from "../Ui/Button";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation()
  const userData = location.state.user

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
    let idAdressUsuario = data.profile.address ? data.profile.address : null;

    await fetch(`http://localhost:8000/api/users/${idUsuario}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "username": (username === "" ? userData.username : username),
        "email": (email === "" ? userData.email : email),
        "first_name":  (firstName === "" ? userData.first_name : firstName),
        "last_name":  (lastName === "" ? userData.last_name : lastName),
      }),
    });

    await fetch(`http://localhost:8000/api/profiles/${idProfileUsuario}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        "phone": (phone === "" ? userData.profile.phone : phone),
      }),
    });

    if (idAdressUsuario !== null) {
      await fetch(`http://localhost:8000/api/addresses/${idAdressUsuario}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          "street": (street === "" ? userData.profile.human_readable_address.street : street),
          "city": (city === "" ? userData.profile.human_readable_address.city : city),
          "state": (state === "" ? userData.profile.human_readable_address.state : state),
        }),
      });
    } else {
      let newAddress = await fetch(`http://localhost:8000/api/addresses/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          street,
          city,
          state,
        }),
      });

      const data = await newAddress.json();

      await fetch(`http://localhost:8000/api/profiles/${idProfileUsuario}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          address: data.id,
        }),
      });
    }
    navigate("/conta");
  };

  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <Title contentTitle="Editar conta" customClass="title" />
        <FormContainer>
          <InputDonate
            type="text"
            label="Username"
            placeholder="Digite seu username"
            onChange={(value: string) => setUsername(value)}
            Value={userData.username}
          />
          <InputDonate
            type="text"
            label="Nome"
            placeholder="Digite seu primeiro nome"
            onChange={(value: string) => setfirstName(value)}
            Value={userData.first_name}
          />
          <InputDonate
            type="text"
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            onChange={(value: string) => setLastName(value)}
            Value={userData.last_name}
          />
          <InputDonate
            type="email"
            label="E-mail"
            placeholder="Digite o seu endereço de email"
            onChange={(value: string) => setEmail(value)}
            Value={userData.email}
          />
          <InputDonate
            type="tel"
            label="Telefone"
            placeholder="Digite o número do seu telefone"
            onChange={(value: string) => setPhone(value)}
            Value={userData.profile.phone}
          />
          <InputDonate
            type="text"
            label="Rua"
            placeholder="Digite o nome da sua rua"
            onChange={(value: string) => setStreet(value)}
            Value={userData.profile.human_readable_address ? userData.profile.human_readable_address.street : ""}
          />
          <InputDonate
            type="text"
            label="Cidade"
            placeholder="Digite o nome da sua cidade"
            onChange={(value: string) => setCity(value)}
            Value={userData.profile.human_readable_address ? userData.profile.human_readable_address.city : ""}
          />
          <InputDonate
            type="text"
            label="UF/Estado"
            placeholder="Digite o nome de seu estado"
            onChange={(value: string) => setState(value)}
            Value={userData.profile.human_readable_address ? userData.profile.human_readable_address.state : ""}
          />
          {/* <InputDonate
              type="file"
              label="Foto de perfil"
              placeholder="Digite seu username"
            /> Depois eu implemento isso! */}
        </FormContainer>
        <DividerContainer customClass="">
          <Button
            customClass="outline"
            name="Cancelar"
            handle={() => navigate("/conta")}
          />
          <Button
            customClass="success"
            name="Salvar"
            handle={handleEditAccount}
          />
        </DividerContainer>
      </Container>
    </Container>
  );
}

export default EditAccount;
