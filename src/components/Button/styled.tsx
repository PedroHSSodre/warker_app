import styled from "styled-components/native";

interface TextProps { 
    size?: "sm" | "md" | "lg"
}

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-evenly;
    width: 300px;
    height: 50px;
    background: ${props => props.theme.colors.RED_300};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const Text = styled.Text<TextProps>`
    color: ${props => props.theme.colors.WHITE};
    font-size: ${props => props.theme.fontSize[props.size]}px;
`;