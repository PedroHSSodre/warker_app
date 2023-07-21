import { Container, Text } from "./styled";
import { ButtonProps } from "../../types/Button";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../style/theme";

function Button({ onPress, text, iconName, size = "lg" }: ButtonProps) {
    return (
        <Container 
            onPress={onPress}
        >
            {
                iconName && 
                <Ionicons 
                    color={theme.colors.WHITE} 
                    name={iconName} 
                    size={theme.fontSize.md}
                    style={{
                        marginRight: 8
                    }}
                />
            }
            <Text size={size}>{text}</Text>
        </Container>
    )
}
export default Button;