import { useState } from "react";
import { CiUser, CiLock } from "react-icons/ci";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import BoxLogin from "../Layouts/BoxLogin";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Title from "../Layouts/Title";
import InputLogin from "../Forms/InputLogin";
import LinkLogin from "../Ui/LinkLogin";
import Button from "../Ui/Button";

function Login() {
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    const url = 'http://localhost:8000/api/token/';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          password: '123qwe',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access;

        // Armazena o token no localStorage
        localStorage.setItem('token', accessToken);

        // Atualiza o estado com o token
        setToken(accessToken);
      } else {
        console.error('Falha na autenticação');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <Container customClass="center">
      <DividerContainer customClass="columnCenter">
        <BoxLogin>
          <Title contentTitle="Entrar" />
          <DividerContainer customClass="columnMin">
            <InputLogin Icon={CiUser} Type="text" Name="E-mail" />
            <InputLogin Icon={CiLock} Type="password" Name="Senha" />
            <LinkLogin name="Esqueci a senha" link="/register" />
            <DividerContainer>
              <Button name="Entrar" customClass="success" handle={handleLogin}/>
            </DividerContainer>
          </DividerContainer>

        </BoxLogin>
        <p style={{ display: "flex" }}>
          Você não tem uma conta?{" "}
          <LinkLogin name="Criar conta" link="/register" />
        </p>
      </DividerContainer>
    </Container>
  );
}

export default Login;
