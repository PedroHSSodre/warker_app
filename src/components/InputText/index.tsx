import { Ionicons } from "@expo/vector-icons";

import theme from "../../style/theme";
import { Container, TextInput, IconContainer } from "./styled";

import { InputTextProps } from "../../types/Input";

function InputText({ placeholder, value, onChangeText, iconName, onFocus, onBlur }: InputTextProps) {
    return (
        <Container>
            {
                iconName && (
                    <IconContainer>
                        <Ionicons 
                            name={iconName} 
                            size={theme.fontSize.md} 
                        />
                    </IconContainer>
                )
            }
            <TextInput 
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChangeText}
                placeholder={placeholder} 
                value={value}
            />
        </Container>   
    )
}

export default InputText;