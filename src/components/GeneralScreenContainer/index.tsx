import React from "react";
import { Container } from "./styles";
import { ContainerProps } from "./types";

export default function GeneralScreenContainer({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}
