import {RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ExplorerScreen} from '@screens/explorer';
import {TokenDetailScreen} from '@screens/token-details';
import React from 'react';
import {ExplorerName} from '../screen-names/explorer.names';
import {ExplorerNavigatorParamList} from '../types/explorer.types';

const ExplorerStack = createNativeStackNavigator<ExplorerNavigatorParamList>();

export const ExplorerStackNavigator = () => {
  return (
    <ExplorerStack.Navigator initialRouteName={ExplorerName.ExplorerDashboard}>
      <ExplorerStack.Screen
        name={ExplorerName.ExplorerDashboard}
        component={ExplorerScreen}
        options={{headerShown: false}}
      />
      <ExplorerStack.Screen
        name={ExplorerName.TokenDetails}
        component={TokenDetailScreen}
        options={{headerShown: false}}
      />
    </ExplorerStack.Navigator>
  );
};

export type ExplorerStackProps =
  StackNavigationProp<ExplorerNavigatorParamList>;

export type ExploreStackRouteProps<
  RouteName extends keyof ExplorerNavigatorParamList,
> = RouteProp<ExplorerNavigatorParamList, RouteName>;
