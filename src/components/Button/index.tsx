import React from 'react';
import { Container } from './styles';

interface ButtonProps {
    children: React.ReactNode
    onPress?: () => void
}

export default function Button({children, onPress}: ButtonProps) {
  return (
      <Container onPress={onPress}>
          {children}
      </Container>
   );
}