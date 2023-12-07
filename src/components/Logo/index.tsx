import React from "react";
import { Container } from "./styles";
import { Image } from "react-native";

import logo from "../../assets/logo-zion.png";
import nameLogo from "../../assets/zion.png"

interface LogoProps {
  size: "large" | "medium"
}

export default function Logo({size}: LogoProps) {
  const logoSize = size === "large" ? 40 : 25
  const nameLogoSize = size === "large" ? 100 : 85
  return (
    <Container>
      <Image source={logo} style={{width: logoSize, resizeMode: "contain"}}/>
      <Image source={nameLogo} style={{width: nameLogoSize, resizeMode: "contain"}}/>
    </Container>
  );
}
