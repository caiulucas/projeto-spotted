import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, TextInput } from './styles';

interface IInputProps extends TextInputProps{
  label: string;
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({label, placeholder, ...props}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput placeholder={placeholder} placeholderTextColor="#828282" {...props} />
    </Container>
  );
}

export default Input;