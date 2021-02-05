import styled from 'styled-components/native';
import { inputColor, mainGreen, white } from '../../colors';

export const Container = styled.View`
  margin: 16px 0 0 0;
`;

export const Label = styled.Text`
  color: ${ mainGreen };
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  background: ${ inputColor };
  height: 40px;  
  padding: 0 16px;
  border-radius: 8px;
  color: ${ white };
`;