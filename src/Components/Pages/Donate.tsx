import FormContainer from "../Forms/FormContainer";
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
      </FormContainer>
      <DividerContainer>
        <Button name="Cancelar" customClass="outline" />
        <Button name="Doar" customClass="success" />
      </DividerContainer>
    </Container>
  );
}

export default Donate;
