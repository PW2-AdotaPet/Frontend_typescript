import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
// import InfoMessage from "../Layouts/InfoMessage";
import SearchBar from "../Layouts/SearchBar";

function Home() {
    return (
        <Container customClass="column">
            <SearchBar />
            {/* <InfoMessage message="Pesquise por algum animal"/> */}
            <Main customClass="scroll">
                
            </Main>
        </Container>
    )
}

export default Home