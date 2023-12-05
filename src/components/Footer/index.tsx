import React from 'react';
import { Container } from './styles';
import { Text } from '../../screens/Login/styles';
import Logo from '../Logo';
import { themes } from '../../global/themes';

export default function Footer() {
  return (
      <Container>
          <Logo />
          <Text $color={themes.colors.textSecondary} $size={12}>Copryright  © 2022 - Todos os direitos reservados</Text>
          
      </Container>
   );
}