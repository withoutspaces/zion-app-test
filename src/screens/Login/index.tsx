import React from "react";
import {
  Container,
  SpecialText,
  Subtitle,
  TextLink,
  Title,
  Text,
  CheckBox,
} from "./styles";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../global/themes";

import GeneralScreenContainer from "../../components/GeneralScreenContainer";
import TextField from "../../components/TextField";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Login() {
  const navigation = useNavigation();

  const handleChangeScreen = () => {
    navigation.navigate("Register" as never);
  };

  return (
    <Container>
      <Header />
      <GeneralScreenContainer>
        <ScrollView>
          <Title>Boas-vindas à Zion!</Title>
          <View style={{ flexDirection: "row", gap: 8, marginBottom: 40 }}>
            <Subtitle>Novo por aqui?</Subtitle>
            <TextLink onPress={handleChangeScreen}>
              <SpecialText>Crie sua conta agora</SpecialText>
            </TextLink>
          </View>

          {/* Form */}
          <View style={{ gap: 24 }}>
            <TextField label="E-mail" placeholder="bcerqueira94@gmail.com" />
            <TextField label="Senha" placeholder="•••••••••••••" />
          </View>

          <View
            style={{
              marginTop: 24,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <CheckBox />
              <Text $color={themes.colors.textSecondary}>Manter conectado</Text>
            </View>
            <TextLink>
              <SpecialText>Esqueci minha senha</SpecialText>
            </TextLink>
          </View>

          <Button>
            <Text $size={16} $weight="bold">
              Entrar
            </Text>
          </Button>
          <Footer />
        </ScrollView>
      </GeneralScreenContainer>
    </Container>
  );
}
