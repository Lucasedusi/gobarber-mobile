import React from 'react';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

import { Container, TextInput, Icon } from './styles';

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={24} color="#666360" />

    <TextInput placeholderTextColor="#666360" {...rest} />
  </Container>
);

export default Input;
