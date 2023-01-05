import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Token} from 'src/types';

export interface ListTokenProps {
  data: Token[];
  onSelectToken: (token: Token) => void;
}

export const ListToken = ({data, onSelectToken}: ListTokenProps) => {
  const viewTokenDetail = (token: Token) => () => {
    onSelectToken(token);
  };

  const getKey = (item: Token, index: number) => `${item?.label} - ${index}`;

  const renderTokenItem: ListRenderItem<Token> = ({item}) => {
    return (
      <Pressable style={styles.container} onPress={viewTokenDetail(item)}>
        <Image source={{uri: item?.logo}} style={styles.logo} />
        <View>
          <Text>{item.label}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </Pressable>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.list}
      data={data}
      renderItem={renderTokenItem}
      keyExtractor={getKey}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 24,
    paddingVertical: 20,
  },
  desc: {
    marginTop: 4,
    fontSize: 12,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E7EB',
    marginHorizontal: 40,
    marginVertical: 12,
  },
});
