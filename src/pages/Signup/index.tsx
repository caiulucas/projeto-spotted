import React, { useCallback } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Display, Back, Text } from './styles';

import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import { useNavigation } from '@react-navigation/native';

const Signup: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Container>
      <Display>
        <View>
          <Back onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={32} color="#34e078"/>
          </Back>
          <Text>Oi! Fale um pouco sobre você</Text>
        </View>

        <View>
          <Input label="Nome:" placeholder="Digite aqui o seu nome" />
          <Input label="Email:" placeholder="Digite aqui o seu email" />
          <Input label="Senha:" placeholder="Digite aqui a sua senha" />
          <Input label="Confirmar senha:" placeholder="Confirme sua senha" />
        </View>

        <MainButton>CADASTRAR</MainButton>
      </Display>
    </Container>
  );
}

export default Signup;