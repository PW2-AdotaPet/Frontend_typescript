import { useLocation } from "react-router-dom";
import Main from "../Layouts/Main";
import Container from "../Layouts/Container";
import InformationPet from "../Ui/InformationPet";

function Pet() {
  const location = useLocation();
  const data = location.state;
  return (
    <Container customClass="column">
      <Main customClass="column">
        <InformationPet data={data}/>
      </Main>
    </Container>
  );
}

export default Pet;
