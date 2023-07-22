import { Ionicons } from "@expo/vector-icons";

import { Container, Text } from "./styled";
import theme from "../../style/theme";

import { ButtonProps } from "../../types/Button";

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