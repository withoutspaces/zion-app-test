import React from 'react';
import { Container, Label, TextInput } from './styles';
import { themes } from '../../global/themes';


interface TextFieldProps {
    label: string
    placeholder: string
}

export default function TextField({label, placeholder}: TextFieldProps) {
  return (
      <Container>
          <Label>{label}</Label>  
          <TextInput 
            placeholder={placeholder}
            placeholderTextColor={themes.colors.textSecondary}
          />
      </Container>
   );
}