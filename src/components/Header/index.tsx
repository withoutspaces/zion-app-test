import React from "react";
import { Container, BackgroundImage, Border } from "./styles";

import background from "../../assets/background2.png";
import Logo from "../Logo";

export default function Header() {
  return (
    <Container>
      <Logo />
      <BackgroundImage source={background} />
      <Border />
    </Container>
  );
}
