import { FaRegCalendar } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BiUser } from "react-icons/bi";

import Container from "../Layouts/Container";
import DividerContainer from "../Layouts/DividerContainer";
import Button from "../Ui/Button";
import Profile from "../Ui/Profile";
import Input from "../Forms/Input";

function Account() {
  const teste = {
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
    telefone: "(83) 99999-9999",
    email: "jose123@email.com",
    endereco: "Rua Monteiro Lobato",
    numero: 5,
    cidade: "Sousa",
    UF: "PB",
  };
  const inputs = [
    {
      name: "Nome",
      icon: BiUser,
      value: teste.dono,
    },
    {
      name: "Email",
      icon: MdOutlineEmail,
      value: teste.email,
    },
    {
      name: "Telefone",
      icon: FiSmartphone,
      value: teste.telefone,
    },
    {
      name: "Data de Nascimento",
      icon: FaRegCalendar,
      value: "01/01/2000",
    },
  ];
  return (
    <Container customClass="columnSpace">
      <DividerContainer customClass="center">
        <Profile image={teste.image} />
      </DividerContainer>
      <DividerContainer customClass="column">
        {inputs.map((element: any, index: number) => (
          <Input name={element.name} Icon={element.icon} status={true} value={element.value} key={index} />
        ))}
      </DividerContainer>
      <DividerContainer>
        <Button name="Editar Conta" customClass="outline" />
        <Button name="Apagar Conta" customClass="outline" />
        <Button name="Sair" customClass="danger" />
      </DividerContainer>
    </Container>
  );
}

export default Account;
