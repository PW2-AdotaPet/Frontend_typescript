import { CiUser, CiLock } from "react-icons/ci";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";

import BoxLogin from "../Layouts/BoxLogin";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Title from "../Layouts/Title";
import InputLogin from "../Forms/InputLogin";
import LinkLogin from "../Ui/LinkLogin";
import Button from "../Ui/Button";

function Register() {
  return (
    <Container customClass="center">
      <DividerContainer customClass="columnCenter">
        <BoxLogin>
          <Title contentTitle="Cadastro" />
          <DividerContainer customClass="columnMin">
            <InputLogin Icon={CiUser} Type="text" Name="E-mail" />
            <InputLogin Icon={CiLock} Type="password" Name="Senha" />
            <InputLogin Icon={CiLock} Type="password" Name="Confirmar senha" />
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
          Já possui uma conta?
          <LinkLogin name="Fazer login" link="/login" />
        </p>
      </DividerContainer>
    </Container>
  );
}

export default Register;
