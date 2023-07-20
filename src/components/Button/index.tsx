import { Container, Text } from "./styled";
import { ButtonProps } from "../../types/Button";

function Button({ onPress, text }: ButtonProps) {
    return (
        <Container onPress={onPress}>
            <Text>{text}</Text>
        </Container>
    )
}
export default Button;