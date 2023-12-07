import React from "react";
import { Alert, ScrollView, View } from "react-native";
import { Container } from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";

import GeneralScreenContainer from "../../components/GeneralScreenContainer";
import Header from "../../components/Header";
import { SpecialText, TextLink, Title, Subtitle, Text } from "../Login/styles";
import TextField from "../../components/TextField";

import Footer from "../../components/Footer";
import { themes } from "../../global/themes";
import Button from "../../components/Button";

export default function Register() {
  return (
    <Container>
      <Header />
      <GeneralScreenContainer>
        <ScrollView>
          {/* Header */}
          <View style={{ gap: 56, marginBottom: 40 }}>
            <TextLink>
              <SpecialText>Voltar</SpecialText>
            </TextLink>
            <View>
              <Title>Comece agora mesmo</Title>
              <Subtitle>
                Você está próximo de acessar o melhor conteúdo de Marketing
                Digital
              </Subtitle>
            </View>
          </View>

          <Formik
            initialValues={{
              name: "",
              lastName: "",
              cpf: "",
              isForeing: false,
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
                Alert.alert(JSON.stringify(values))
                // console.log(values)
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                .required("Nome é obrigatório"),
                lastName: Yup.string()
                .required("O Último nome é obrigatório"),
                cpf: Yup.string()
                .required("CPF é obrigatório")
                .max(14),
                isForeing: Yup.boolean(),
                email: Yup.string()
                .email("Email inválido")
                .required("E-mail é obrigatório"),
                password: Yup.string()
                .required("Senha é obrigatória")
                .min(8)
                .max(20)
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
                )
                
            })}
            
          >
            {({ handleChange, handleSubmit, handleBlur, values, touched, errors }) => (
              <View style={{ gap: 24 }}>
                <TextField
                  label="Primeiro nome"
                  placeholder="Bruno" 
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {touched.name && errors.name ? (
                    <Text $color={themes.colors.textPrimary}>{errors.name}</Text>
                ): null}
                <TextField
                  label="Último nome"
                  placeholder="Cerqueira"
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
                <TextField
                  label="CPF"
                  placeholder="000.000.000-00"
                  onChangeText={handleChange("cpf")}
                  onBlur={handleBlur("cpf")}
                  value={values.cpf}
                />
                <TextField
                  label="E-mail"
                  placeholder="bcerqueira94@gmail.com"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <TextField
                  label="Senha"
                  placeholder="•••••••••••••"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TextField
                  label="Confirmar senha"
                  placeholder="•••••••••••••"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                />
                <Button onPress={handleSubmit}>
                  <Text $size={16} $weight="bold">
                    Continuar
                  </Text>
                </Button>
              </View>
            )}
          </Formik>

          <Footer />
        </ScrollView>
      </GeneralScreenContainer>
    </Container>
  );
}
