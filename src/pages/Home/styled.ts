import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${props => props.theme.fontSize.xl}px;
    text-align: center;
`;

export const Text = styled.Text`
    font-size: ${props => props.theme.fontSize.md}px;
    text-align: center;
    width: 80%;
`