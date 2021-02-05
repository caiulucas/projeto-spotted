import React from 'react';
import { View } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

const MainButton: React.FC<RectButtonProperties> = ({children, ...props}) => {
  return (
    <Container {...props}>
      <Text>{children}</Text>
    </Container>
  );
}

export default MainButton;