import {ExplorerName, ExploreStackRouteProps} from '@navigators';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

export const TokenDetailScreen = () => {
  const route = useRoute<ExploreStackRouteProps<ExplorerName.TokenDetails>>();
  const {token} = route?.params;
  return (
    <View>
      <Text>{token?.label}</Text>
    </View>
  );
};
