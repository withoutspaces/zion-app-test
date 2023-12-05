import styled from "styled-components/native";
import { themes } from "../../global/themes";

export const Container = styled.View`
    
`
export const Label = styled.Text`
    color: ${themes.colors.textPrimary};
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    margin-bottom: 4px;
`

export const TextInput = styled.TextInput`
    width: 100%;
    height: 44px;
    border-radius: 8px;
    padding-left: 16px;
    font-size: 16px;
    color: ${themes.colors.textPrimary};
    border: 1px solid ${themes.colors.formSecondary};
    background-color: ${themes.colors.formPrimary};
`