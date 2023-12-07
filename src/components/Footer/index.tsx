import React from "react";
import { Container } from "./styles";
import { Text, TextLink } from "../../screens/Login/styles";
import { View } from "react-native";
import Logo from "../Logo";
import { themes } from "../../global/themes";

export default function Footer() {
  return (
    <Container>
      <Logo size="medium" />
      <Text $color={themes.colors.textSecondary} $size={12}>
        Copryright © 2022 - Todos os direitos reservados
      </Text>
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center", marginTop: 16}}>
        <TextLink>
          <Text $color={themes.colors.textTerciary} $size={12}>
            Suporte
          </Text>
        </TextLink>
        <Text $color={themes.colors.textTerciary} $size={12}>
          •
        </Text>
        <TextLink>
          <Text $color={themes.colors.textTerciary} $size={12}>
            Termos de uso
          </Text>
        </TextLink>
        <Text $color={themes.colors.textTerciary} $size={12}>
          •
        </Text>
        <TextLink>
          <Text $color={themes.colors.textTerciary} $size={12}>
            Política de privacidade
          </Text>
        </TextLink>
      </View>
    </Container>
  );
}
