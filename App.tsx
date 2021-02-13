import React from 'react';
import { useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

import AuthRoutes from './src/routes/auth.routes';

export default function App() {
  const [loaded] = useFonts({
    Montserrat_500Medium,
  })

  if (!loaded) {
    return null;
  }

  return (
    <AuthRoutes />
  );
}