import { useLocation } from "react-router-dom";
import Main from "../Layouts/Main";
import Container from "../Layouts/Container";
import InformationPet from "../Ui/InformationPet";
import NavBar from "../Layouts/NavBar";

function Pet() {
  const location = useLocation();
  const data = location.state;

  console.log(data)
  return (
    <Container>
      <NavBar />
      <Container customClass="column">
        <Main customClass="column">
          <InformationPet data={data} />
        </Main>
      </Container>
    </Container>
  );
}

export default Pet;
