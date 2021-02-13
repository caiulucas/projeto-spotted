import { Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { darkerGreen, white } from './../../colors/index';

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { backgroundColor } from '../../colors';

export const Container = styled.View`
  background: ${backgroundColor};
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
`;

export const Display = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 48px 24px 32px 24px;
`;

export const Logo = styled.Image`
`;

export const WelcomeMessage = styled.Text`
  font-size: 30px;
  font-family: Montserrat_500Medium;
  color: #F2F2F2;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #000;
`;

export const ButtonContainer = styled.View`
`;

export const SignupButton = styled(RectButton)`
  height: 40px;
  width: 100%;
  background: ${white};
`
export const SignupTextButton = styled.Text`
  height: 100%;
  text-align: center;
  padding-top: 10px;
  color: ${darkerGreen};
  font-weight: bold;
`;

export const SigninButton = styled(SignupButton)`
  background: transparent;
  margin-top: 16px;
`;

export const SigninTextButton = styled(SignupTextButton)`
  border: 3px solid ${white};
  color: ${white};
`