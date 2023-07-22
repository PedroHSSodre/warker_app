import { Container, Text, Title } from "./styled";

import Button from "../../components/Button";

function Home({ navigation }) {
    const handleNavigate = () => navigation.navigate("App");

    return (
        <Container>
            <Title>Bem vindo ao Warker App!</Title>
            <Text>
                No mundo pós-apocaliptico em que vivemos o combustível tem um valor inestimável. 
                Gangues bárbaras lutam até a morte pelo controle desse valioso recurso e o app WARKER é a última esperança 
                da humanidade em trazer um pouco de paz e ordem à esse mundo devastado.
            </Text>
            <Button
                onPress={handleNavigate}
                text="Continuar"
            />
        </Container>
    )
}

export default Home;