import { Ionicons } from "@expo/vector-icons";

import theme from "../../style/theme";
import { InputSearchProps } from "../../types/InputSearch";
import { Container, TextInput, IconContainer } from "./styled";

function InputSearch({placeholder, value}: InputSearchProps) {
    return (
        <Container>
            <IconContainer>
                <Ionicons 
                    name="search-outline" 
                    size={theme.fontSize.md} 
                />
            </IconContainer>
            <TextInput 
                placeholder={placeholder} 
                value={value}
            />
        </Container>   
    )
}

export default InputSearch;