import Container from "../Layouts/Container";
import InfoMessage from "../Layouts/InfoMessage";
import SearchBar from "../Layouts/SearchBar";

function Home() {
    return (
        <Container customClass="column">
            <SearchBar />
            <InfoMessage message="Pesquise por algum animal"/>
        </Container>
    )
}

export default Home