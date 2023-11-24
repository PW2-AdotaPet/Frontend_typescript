import Select from "../Forms/Select"
import Container from "../Layouts/Container"
import DividerContainer from "../Layouts/DividerContainer"
import Main from "../Layouts/Main"
import Title from "../Layouts/Title"
import Button from "../Ui/Button"

function Donate() {
    const racas = [
        {value:"Pitbull"},
        {value:"Pug"},
        {value:"Pinscher"}
    ]
    return (
        <Container>
            <Main customClass="column">
                <Title contentTitle="Olá"/>
                <DividerContainer>
                    <Select options={racas} title="Espécie" placeholder="Selecione a espécie"/>
                </DividerContainer>
                <DividerContainer>
                    <Button name="Cancelar" customClass="outline"/>
                    <Button name="Doar" customClass="success"/>
                </DividerContainer>
            </Main>
        </Container>
    )
}

export default Donate