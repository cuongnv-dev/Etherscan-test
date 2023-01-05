import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootName} from '../screen-names';
import {RootStackParamList} from '../types';
import {MainBottomTabsScreen} from '../bottom-tabs';

export const navigationRef = createNavigationContainerRef();

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName={RootName.MainBottomTab}>
        <RootStack.Screen
          name={RootName.MainBottomTab}
          component={MainBottomTabsScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
