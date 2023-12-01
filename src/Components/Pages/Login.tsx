import { CiUser, CiLock } from "react-icons/ci";

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
      <BoxLogin>
        <Title contentTitle="Entrar" />
        <DividerContainer customClass="columnMin">
          <InputLogin Icon={CiUser} Type="text" Name="E-mail" />
          <InputLogin Icon={CiLock} Type="password" Name="Senha" />
          <LinkLogin Name="Esqueci a senha" />
          <DividerContainer>
            <Button name="Entrar" customClass="success" />
          </DividerContainer>
        </DividerContainer>
        <DividerContainer customClass="column">
            <Title contentTitle="Entrar com" customClass="textLogin"/>
            <DividerContainer>
                
            </DividerContainer>
        </DividerContainer>
      </BoxLogin>
    </Container>
  );
}

export default Login;
