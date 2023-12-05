import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { themes } from "../../global/themes";

const statusBarHeight = StatusBar.currentHeight

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    z-index: 0;
`
export const Border = styled.View`
    width: 100%;
    height: 16px;
    position: absolute;
    background-color: ${themes.colors.backgroundPrimary};
    z-index: 1;
    bottom: 0;
    border-radius: 20px 20px 0px 0px;
`

export const BackgroundImage = styled.Image`
    margin-top: ${statusBarHeight}px;
    width: 100%;
`