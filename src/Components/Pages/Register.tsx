import { CiUser, CiLock } from "react-icons/ci";

import BoxLogin from "../Layouts/BoxLogin";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Title from "../Layouts/Title";
import InputLogin from "../Forms/InputLogin";
import LinkLogin from "../Ui/LinkLogin";
import Button from "../Ui/Button";

import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { login } = useAuth();

  const handleRegister = async () => {
    const response = await fetch("http://localhost:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, password_confirmation }),
    });

    if (response.ok) {
      login(username, password);
    }
  };

  return (
    <Container customClass="center">
      <DividerContainer customClass="columnCenter">
        <BoxLogin>
          <Title contentTitle="Cadastro" />
          <DividerContainer customClass="columnMin">
            <InputLogin
              Icon={CiUser}
              Type="text"
              Name="Username"
              onChange={(value: string) => setUsername(value)}
            />
            <InputLogin
              Icon={CiLock}
              Type="password"
              Name="Senha"
              onChange={(value: string) => setPassword(value)}
            />
            <InputLogin
              Icon={CiLock}
              Type="password"
              Name="Confirmar senha"
              onChange={(value: string) => setPasswordConfirmation(value)}
            />
            <DividerContainer>
              <Button
                name="Entrar"
                customClass="success"
                handle={handleRegister}
              />
            </DividerContainer>
          </DividerContainer>
        </BoxLogin>
        <p style={{ display: "flex" }}>
          Já possui uma conta?
          <LinkLogin name="Fazer login" link="/login" />
        </p>
      </DividerContainer>
    </Container>
  );
}

export default Register;
