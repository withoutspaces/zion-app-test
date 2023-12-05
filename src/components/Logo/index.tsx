import React from "react";
import { Container } from "./styles";
import { Image } from "react-native";

import logo from "../../assets/logo-zion.png";
import nameLogo from "../../assets/zion.png"

interface LogoProps {
  size: "large" | "medium"
}

export default function Logo({size}: LogoProps) {
  return (
    <Container>
      <Image source={logo}/>
      <Image source={nameLogo} />
    </Container>
  );
}
