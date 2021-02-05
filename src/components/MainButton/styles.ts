import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { mainGreen } from '../../colors';

export const Container = styled(RectButton)`
  background: ${ mainGreen }; 
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;