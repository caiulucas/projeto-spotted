import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <NavigationContainer>
    <Auth.Navigator 
      screenOptions={{
        headerShown: false,    
      }}
    >
      <Auth.Screen name="Main" component={Main}/>
      <Auth.Screen name="SignUp" component={Signup}/>
      <Auth.Screen name="SignIn" component={Signin}/>
    </Auth.Navigator>    
  </NavigationContainer>
);

export default AuthRoutes;