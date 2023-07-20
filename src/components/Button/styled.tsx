import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 300px;
    height: 50px;
    background: ${props => props.theme.colors.RED_300};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.WHITE};
    font-size: ${props => props.theme.fontSize.lg}px;
`;