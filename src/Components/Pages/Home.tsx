import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
// import InfoMessage from "../Layouts/InfoMessage";
import SearchBar from "../Layouts/SearchBar";
// import Card from "../Ui/Card";
import Cards from "../Ui/Cards";

function Home() {
  const teste = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/3eaf/9f72/591b5570913ed4517e6b6d622943cf98?Expires=1700438400&Signature=PX97k7VJJ~qL09-B78olq3UE6wnxLzLPR7DWpcQ9B6yx0CA7KSm-6a4U5DWsyx8Zge10N8C7~nbdDD-owROF5KJIR~hcWc3s9bkSRwgnpd6EU0HlsjcC8AU6wgZxZLCC0vql4-p~3UoMQv4Fm0ZDDj5fWE6RrKxbpYH1ShLJ6QyNZd~IVgSyXhRUKJ6D3~TVKE~XsQoNrmCuZqaup03CwKiNL~F3G2f2dAG8MpAQK0N6eODlJ28OedFpdKXT3bjO78wnfJ2WbXBo2ssY2ePrV2MbWg5uofoxpVQ4SQeNgBpTOj5~PoFp1BLnu4H9vDzxt-JNvBUDpTDnDAZIaWZ2FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      especie: "Cachorro",
      raca: "Pug",
      porte: "Médio",
      sexo: "Macho",
      idade: 3,
      altura: 27,
      comprimento: 54,
      peso: 10,
      dono: "José da Silva",
      endereco: "Rua Monteiro Lobato",
      numero: 5,
      cidade: "Sousa",
      UF: "PB",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/3eaf/9f72/591b5570913ed4517e6b6d622943cf98?Expires=1700438400&Signature=PX97k7VJJ~qL09-B78olq3UE6wnxLzLPR7DWpcQ9B6yx0CA7KSm-6a4U5DWsyx8Zge10N8C7~nbdDD-owROF5KJIR~hcWc3s9bkSRwgnpd6EU0HlsjcC8AU6wgZxZLCC0vql4-p~3UoMQv4Fm0ZDDj5fWE6RrKxbpYH1ShLJ6QyNZd~IVgSyXhRUKJ6D3~TVKE~XsQoNrmCuZqaup03CwKiNL~F3G2f2dAG8MpAQK0N6eODlJ28OedFpdKXT3bjO78wnfJ2WbXBo2ssY2ePrV2MbWg5uofoxpVQ4SQeNgBpTOj5~PoFp1BLnu4H9vDzxt-JNvBUDpTDnDAZIaWZ2FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      especie: "Cachorro",
      raca: "Pug",
      porte: "Médio",
      sexo: "Macho",
      idade: 3,
      altura: 27,
      comprimento: 54,
      peso: 10,
      dono: "José da Silva",
      endereco: "Rua Monteiro Lobato",
      numero: 5,
      cidade: "Sousa",
      UF: "PB",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/3eaf/9f72/591b5570913ed4517e6b6d622943cf98?Expires=1700438400&Signature=PX97k7VJJ~qL09-B78olq3UE6wnxLzLPR7DWpcQ9B6yx0CA7KSm-6a4U5DWsyx8Zge10N8C7~nbdDD-owROF5KJIR~hcWc3s9bkSRwgnpd6EU0HlsjcC8AU6wgZxZLCC0vql4-p~3UoMQv4Fm0ZDDj5fWE6RrKxbpYH1ShLJ6QyNZd~IVgSyXhRUKJ6D3~TVKE~XsQoNrmCuZqaup03CwKiNL~F3G2f2dAG8MpAQK0N6eODlJ28OedFpdKXT3bjO78wnfJ2WbXBo2ssY2ePrV2MbWg5uofoxpVQ4SQeNgBpTOj5~PoFp1BLnu4H9vDzxt-JNvBUDpTDnDAZIaWZ2FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      especie: "Cachorro",
      raca: "Pug",
      porte: "Médio",
      sexo: "Macho",
      idade: 3,
      altura: 27,
      comprimento: 54,
      peso: 10,
      dono: "José da Silva",
      endereco: "Rua Monteiro Lobato",
      numero: 5,
      cidade: "Sousa",
      UF: "PB",
    },
  ];

  return (
    <Container customClass="column">
      <SearchBar />
      {/* <InfoMessage message="Pesquise por algum animal"/> */}
      <Main customClass="scroll">
        {/* <Card data={teste} /> */}
        <Cards data={teste} />
      </Main>
    </Container>
  );
}

export default Home;
