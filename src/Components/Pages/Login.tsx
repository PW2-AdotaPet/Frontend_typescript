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
              <Button name="Entrar" customClass="success" />
            </DividerContainer>
          </DividerContainer>
          <DividerContainer customClass="column">
            <Title contentTitle="Entrar com" customClass="textLogin" />
            <DividerContainer>
              <Button name="Facebook" Icon={FaFacebook} customClass="auth" />
              <Button name="Google" Icon={FaGoogle} customClass="auth" />
              <Button name="Apple" Icon={FaApple} customClass="auth" />
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
