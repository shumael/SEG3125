import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { SettingsScreen, SettingsData } from "react-native-settings-screen";
import {
  Button, Text, View, Switch
} from 'react-native';

import { Icon, } from 'react-native-elements'

export default class SettingScreen extends React.Component {
  //Set initial value of all values to false
  state = {
    switchValueAge: false,
    switchValueLocation: false,
    switchValueNotification: false,
    switchValueDiscoverability: false,
  };

  //function to invert the state of age setting
  _handleToggleSwitchAge = () =>
    this.setState(state => ({
      switchValueAge: !state.switchValueAge,
    }));

  //function to invert the state of location setting
  _handleToggleSwitchLocation = () =>
    this.setState(state => ({
      switchValueLocation: !state.switchValueLocation,
    }));

  //function to invert the state of notification setting
  _handleToggleSwitchNotification = () =>
    this.setState(state => ({
      switchValueNotification: !state.switchValueNotification,
    }));

  //function to invert the state of discoverability setting
  _handleToggleSwitchDiscoverability = () =>
    this.setState(state => ({
      switchValueDiscoverability: !state.switchValueDiscoverability,
    }));

  settingsData = [
    {
      type: 'SECTION',
      header: ' ',
      rows: [
        {
          title: 'Share Location',
          subtitle: 'Your location will be shared with other gamers.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitchAge}
              value={this.state.switchValueAge}
            />
          ),
        },
        {
          title: 'Enable Notification',
          subtitle: 'You will recieve notifications about matches and direct messages.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitchLocation}
              value={this.state.switchValueLocation}
            />
          ),
        },
        {
          title: 'Enable Discoverability',
          subtitle: 'Allow gamers to see your profile while swiping.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitchNotification}
              value={this.state.switchValueNotification}
            />
          ),
        },
        {
          title: 'Share Age',
          subtitle: 'Show age on your profile.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitchDiscoverability}
              value={this.state.switchValueDiscoverability}
            />
          ),
        },
      ],
    },
    {
      type: 'CUSTOM_VIEW',
      render: () => (
        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      ),
    },
    {
      type: 'CUSTOM_VIEW',
      render: () => (
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            color: '#999',
            marginBottom: 40,
            marginTop: 30,
          }}
        >
          v1.2.3
        </Text>
      ),
    },
  ]

  render() {
    return (
      <SettingsScreen
        data={this.settingsData}
      />

    )
  }
}

SettingScreen.navigationOptions = {
  title: 'Settings',
};
