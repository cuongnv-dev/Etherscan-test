import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ExplorerName, ExploreStackRouteProps} from '@navigators';

export const TokenDetailScreen = () => {
  const route = useRoute<ExploreStackRouteProps<ExplorerName.TokenDetails>>();
  const {token} = route?.params;
  return (
    <View>
      <Text>{token?.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
