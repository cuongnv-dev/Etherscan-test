import {AppNavigator} from '@navigators';
import React from 'react';
import {View, LogBox, StatusBar} from 'react-native';
LogBox.ignoreAllLogs(true);
StatusBar.setBarStyle('dark-content');

export const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};
