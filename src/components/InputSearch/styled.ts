import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    width: 300px;
    height: 50px;
    background: ${props => props.theme.colors.WHITE};
    border-radius: 10px;
    padding: 0 12px;
`;
export const IconContainer = styled.View`
    margin-right: 8px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 100%;
`;