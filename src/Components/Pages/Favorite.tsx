import { useLocation } from "react-router-dom";
import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
import Cards from "../Ui/Cards";

function Favorite() {
  const location = useLocation();
  const data = location.state.favorite;

  return (
    <Container customClass="column">
      <Main customClass="scroll">
        <Cards data={[data]} />
      </Main>
    </Container>
  );
}

export default Favorite;
