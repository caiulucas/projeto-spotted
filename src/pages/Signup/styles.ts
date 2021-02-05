import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { backgroundColor, white } from '../../colors';

export const Container = styled.View`
  flex: 1;
  background: ${ backgroundColor };
`;

export const Display = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin: 0 24px;
`;


export const Back = styled(RectButton)`
  margin-bottom: 32px;
`;

export const Text = styled.Text`
  color: ${ white };
  font-size: 18px;
`;