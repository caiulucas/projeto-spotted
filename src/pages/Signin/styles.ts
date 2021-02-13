import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { backgroundColor } from '../../colors';

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
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const Logo = styled.Image`
  align-self: center;
`;