import React from 'react';
import { View, Text, Image } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça Seu Login</Title>
    </Container>
  );
};

export default SignIn;
