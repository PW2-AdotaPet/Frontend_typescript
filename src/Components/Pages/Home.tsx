import Container from "../Layouts/Container";
import SearchBar from "../Layouts/SearchBar";

function Home() {
    return (
        <Container customClass="column">
            <SearchBar />
            <h1>Home</h1>
        </Container>
    )
}

export default Home