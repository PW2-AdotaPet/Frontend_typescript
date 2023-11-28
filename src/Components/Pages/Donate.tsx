import FormContainer from "../Forms/FormContainer";
import InputDonate from "../Forms/InputDonate";
import Select from "../Forms/Select";
import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Title from "../Layouts/Title";
import Button from "../Ui/Button";

function Donate() {
  const racas = [{ value: "Pitbull" }, { value: "Pug" }, { value: "Pinscher" }];
  return (
    <Container customClass="columnSpace">
      <Title contentTitle="Doação de pet" />
      <FormContainer>
        <Select
          options={racas}
          title="Espécie"
          placeholder="Selecione a espécie"
        />
        <Select options={racas} title="Raça" placeholder="Selecione a raça" />
        <Select options={racas} title="Porte" placeholder="Selecione o porte" />
        <Select options={racas} title="Sexo" placeholder="Selecione o sexo" />
        <InputDonate label="Altura" placeholder="Digite a altura" type="text" />
        <InputDonate
          label="Comprimento"
          placeholder="Digite o comprimento"
          type="text"
        />
        <InputDonate label="Altura" placeholder="Digite a altura" type="file" />
        <InputDonate label="Idade" placeholder="0" type="number" />
      </FormContainer>
      <DividerContainer>
        <Button name="Cancelar" customClass="outline" />
        <Button name="Doar" customClass="success" />
      </DividerContainer>
    </Container>
  );
}

export default Donate;
