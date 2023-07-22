import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    position: relative;
`;

export const InputSearchContainer = styled.View`
    position: absolute;
    top: 8%;
    z-index: 10;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.View`
    position: absolute;
    bottom: 4%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const CalloutContainer = styled.View`
    height: 40px;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.WHITE};
    padding: 8px;
    border-radius: 24px;
`

export const CalloutText = styled.Text`

`