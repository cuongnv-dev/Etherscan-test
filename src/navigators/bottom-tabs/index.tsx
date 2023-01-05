import {HeaderComponent, Icon} from '@components';
import {IconTypes} from '@components/icon/icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavouriteScreen, WatchListScreen} from '@screens/index';
import React from 'react';
import {MainBottomTabsName} from '../screen-names';
import {ExplorerStackNavigator} from '../stacks/explorer.stack';
import {MainBottomTabsNavigatorParamList} from '../types';

const MainBottomTabs =
  createBottomTabNavigator<MainBottomTabsNavigatorParamList>();

export const MainBottomTabsScreen = () => {
  const renderIcon = (name: IconTypes, color: any) => {
    return <Icon icon={name} style={{tintColor: color}} />;
  };

  return (
    <MainBottomTabs.Navigator
      screenOptions={{
        header: () => {
          return <HeaderComponent />;
        },
      }}>
      <MainBottomTabs.Screen
        options={{
          title: MainBottomTabsName.Explorer,
          tabBarIcon: ({color}) => renderIcon('explorer', color),
        }}
        name={MainBottomTabsName.Explorer}
        component={ExplorerStackNavigator}
      />
      <MainBottomTabs.Screen
        options={{
          title: MainBottomTabsName.WatchList,
          tabBarIcon: ({color}) => renderIcon('watchList', color),
        }}
        name={MainBottomTabsName.WatchList}
        component={WatchListScreen}
      />
      <MainBottomTabs.Screen
        options={{
          title: MainBottomTabsName.Favourite,
          tabBarIcon: ({color}) => renderIcon('favourite', color),
        }}
        name={MainBottomTabsName.Favourite}
        component={FavouriteScreen}
      />
    </MainBottomTabs.Navigator>
  );
};
