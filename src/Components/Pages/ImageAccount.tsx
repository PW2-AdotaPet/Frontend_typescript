import Container from "../Layouts/Container";
import NavBar from "../Layouts/NavBar";
import BoxImage from "../Ui/BoxImage";

function ImageAccount() {
  return (
    <Container>
      <NavBar />
      <Container customClass="columnSpace">
        <BoxImage />
      </Container>
    </Container>
  );
}

export default ImageAccount;
