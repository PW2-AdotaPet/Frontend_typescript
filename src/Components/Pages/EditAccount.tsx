import Container from "../Layouts/Container";
import NavBar from "../Layouts/NavBar";
import Title from "../Layouts/Title";

function EditAccount() {
  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <Title contentTitle="Editar conta" customClass="title" />
      </Container>
    </Container>
  );
}

export default EditAccount;
