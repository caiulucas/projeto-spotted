import React, { useCallback } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Display, Back, Logo } from './styles';

import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

const Signin: React.FC = () => {
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
          <Logo source={logo}/>
        </View>

        <View>
          <Input label="Email:" placeholder="Digite aqui o seu email" />
          <Input label="Senha:" placeholder="Digite aqui a sua senha" />          
        </View>

        <MainButton>ENTRAR</MainButton>
      </Display>
    </Container>
  );
}

export default Signin;