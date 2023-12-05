import styled from "styled-components/native";
import { themes } from "../../global/themes";



export const Container = styled.SafeAreaView`
    flex: 1;
    
`
export const Title = styled.Text`
    font-size: 24px;
    line-height: 34px;
    font-weight: bold;
    color: ${themes.colors.textPrimary};
`
export const Subtitle = styled.Text`
    font-size: 14px;
    line-height: 24px;
    margin-top: 8px;
    color: ${themes.colors.textSecondary};
`

export const Text = styled.Text<{$weight?: string; $size?: number; $color?: string}>`
    font-weight: ${props => props.$weight || "regular"};
    font-size: ${props => props.$size || 14}px;
    color: ${props => props.$color || themes.colors.textPrimary};
`

export const TextLink = styled.TouchableOpacity`
  margin-top: 8px;
`
export const SpecialText = styled.Text`
    color: ${themes.colors.special};
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
`

export const CheckBox = styled.View`
    width: 16px;
    height: 16px;
    border: 1px solid ${themes.colors.formSecondary};
`

 