import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
import NavBar from "../Layouts/NavBar";
import BoxImage from "../Ui/BoxImage";

function ImageAccount() {
  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <Main customClass="column">
          <BoxImage />
        </Main>
      </Container>
    </Container>
  );
}

export default ImageAccount;
