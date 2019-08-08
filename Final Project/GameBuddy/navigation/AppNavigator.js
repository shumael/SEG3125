import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import  LoginScreen  from '../screens/LoginScreen';

const AppStack = createSwitchNavigator({  Main: MainTabNavigator });
const AuthStack = createSwitchNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
));
