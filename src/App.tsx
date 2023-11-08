import { BrowserRouter as Router } from "react-router-dom";
import RoutesContent from "./Routes";
import Container from "./Components/Layouts/Container";
import NavBar from "./Components/Layouts/NavBar";

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <RoutesContent />
      </Container>
    </Router>
  );
}

export default App;
