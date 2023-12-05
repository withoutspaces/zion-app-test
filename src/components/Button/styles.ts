import styled from "styled-components/native";
import { themes } from "../../global/themes";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    background-color: ${themes.colors.special};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 32px;
`