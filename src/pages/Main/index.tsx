import React, { useCallback } from 'react';
import {Text} from 'react-native';

import backgroundImage from '../../assets/background-image.png';
import logo from '../../assets/alt-logo.png';

import { 
  Container,
  Display,  
  ImageBackground, 
  Logo, 
  SignupButton, 
  SigninButton, 
  WelcomeMessage, 
  SigninTextButton,
  SignupTextButton,
  ButtonContainer
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Main: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = useCallback((screen) => {
    navigation.navigate(screen);
  }, []);

  return (
    <Container>
      <ImageBackground source={ backgroundImage }>
        <Display>
          <Logo source={logo} />
          <WelcomeMessage>
            Bem-vindo à Rede Federal, um novo  espaço interativo
          </WelcomeMessage>
          <ButtonContainer>
            <SignupButton onPress={() => handleNavigate('SignUp')}>
              <SignupTextButton>CADASTRAR</SignupTextButton>
            </SignupButton>
            <SigninButton>
              <SigninTextButton>LOGIN</SigninTextButton>
            </SigninButton>
          </ButtonContainer>
        </Display>
      </ImageBackground>
    </Container>
  )
}

export default Main;