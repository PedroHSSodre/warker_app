import styled from "styled-components/native";

export const Container = styled.View<{ showList?: boolean }>`
    border-radius: 10px;
    height: ${props => !props.showList ? 50 : 300}px;
    overflow: hidden;

`;

