import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
import InfoMessage from "../Layouts/InfoMessage";
import SearchBar from "../Layouts/SearchBar";
import Cards from "../Ui/Cards";
import NavBar from "../Layouts/NavBar";

function Home() {
  const teste = [
    {
      id: 0,
      image:
        "https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_2x3.jpg",
      especie: "Cachorro",
      raca: "Pug",
      porte: "Médio",
      sexo: "Macho",
      idade: 3,
      altura: 27,
      comprimento: 54,
      peso: 10,
      dono: "José da Silva",
      telefone: "(83) 99999-9999",
      email: "jose123@email.com",
      endereco: "Rua Monteiro Lobato",
      numero: 5,
      cidade: "Sousa",
      UF: "PB",
    },
    {
      id: 1,
      image:
        "https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_2x3.jpg",
      especie: "Cachorro",
      raca: "Pug",
      porte: "Médio",
      sexo: "Macho",
      idade: 3,
      altura: 27,
      comprimento: 54,
      peso: 10,
      dono: "José da Silva",
      telefone: "(83) 99999-9999",
      email: "jose123@email.com",
      endereco: "Rua Monteiro Lobato",
      numero: 5,
      cidade: "Sousa",
      UF: "PB",
    },
    {
      id: 2,
      image:
        "https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_2x3.jpg",
      especie: "Cachorro",
      raca: "Pug",
      porte: "Médio",
      sexo: "Macho",
      idade: 3,
      altura: 27,
      comprimento: 54,
      peso: 10,
      dono: "José da Silva",
      telefone: "(83) 99999-9999",
      email: "jose123@email.com",
      endereco: "Rua Monteiro Lobato",
      numero: 5,
      cidade: "Sousa",
      UF: "PB",
    },
    {
      id: 3,
      image:
        "https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_2x3.jpg",
      especie: "Cachorro",
      raca: "Pug",
      porte: "Médio",
      sexo: "Macho",
      idade: 3,
      altura: 27,
      comprimento: 54,
      peso: 10,
      dono: "José da Silva",
      telefone: "(83) 99999-9999",
      email: "jose123@email.com",
      endereco: "Rua Monteiro Lobato",
      numero: 5,
      cidade: "Sousa",
      UF: "PB",
    },
  ];

  return (
    <Container>
      <NavBar />
      <Container customClass="column">
        <SearchBar />
        {teste ? (
          <Main customClass="scroll">
            <Cards data={teste} />
          </Main>
        ) : (
          <InfoMessage message="Pesquise por algum animal" />
        )}
      </Container>
    </Container>
  );
}

export default Home;
