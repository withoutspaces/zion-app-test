import React from 'react';
import { Container } from './styles';

interface ButtonProps {
    children: React.ReactNode
}

export default function Button({children}: ButtonProps) {
  return (
      <Container>
          {children}
      </Container>
   );
}