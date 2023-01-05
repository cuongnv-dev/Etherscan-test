import {AppNavigator} from '@navigators';
import React from 'react';
import {View, LogBox, StatusBar} from 'react-native';
LogBox.ignoreAllLogs(true);
StatusBar.setBarStyle('dark-content');
import {request, PERMISSIONS} from 'react-native-permissions';

request(PERMISSIONS.IOS.CAMERA).then(result => {
  console.log(result);
});

export const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};
