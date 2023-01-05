import {Icon} from '@components';
import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

export const SearchInput = ({...rest}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <Icon icon="explorer" />
      <TextInput
        {...rest}
        style={styles.input}
        placeholder="Search by Address / Token / TxHash / Tag"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#CBD2D9',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});
