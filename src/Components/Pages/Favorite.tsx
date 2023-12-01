import { useLocation } from "react-router-dom";
import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
import Cards from "../Ui/Cards";
import NavBar from "../Layouts/NavBar";
import InfoMessage from "../Layouts/InfoMessage";

function Favorite() {
  const location = useLocation();
  const data = location.state;

  return (
    <Container>
      <NavBar />
      <Container customClass="column">
        <Main customClass="scroll">
          {data ? (
            <Cards data={[data.favorite]} />
          ) : (
            <InfoMessage message="Nenhum pet ainda foi adicionado à lista!" />
          )}
        </Main>
      </Container>
    </Container>
  );
}

export default Favorite;
