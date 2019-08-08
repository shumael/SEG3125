import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GamesScreen from '../screens/GamesScreen';
import FilterScreen from '../screens/FilterScreen';
import SettingScreen from '../screens/SettingScreen';


import {
  Button, Text, View, 
} from 'react-native';

import {Icon} from 'react-native-elements'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

//Adding two screens to stack to navigate from home to filter
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Filter: FilterScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  //Styling for the big blue plus button in the nottom nav bar
  tabBarIcon: 
      <View style={{
          height: 80,
          width: 80,
          borderRadius: 100,
          backgroundColor: 'rgb(82,152,239)',
          paddingTop: 15}}>
        <Icon name="ios-add" color="white" type="ionicon" size={50}/>
      </View>
};

HomeStack.path = '';

//Create a stack for contacts and the chat screen which can be navigated to
const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
    Chat:ChatScreen
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'} />
  ),
};

MessageStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

SettingsStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Settings: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  title:'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

ProfileStack.path = '';

const GamesScreenStack = createStackNavigator(
  {
    Game: GamesScreen,
  },
  config
);

GamesScreenStack.navigationOptions = {
  tabBarLabel: 'Games',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} type='ionicon' name='logo-buffer'/>
  ),
};

GamesScreenStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ProfileStack,
  MessageStack,
  HomeStack,
  GamesScreenStack,
  SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
