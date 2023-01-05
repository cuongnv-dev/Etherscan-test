import {images} from '@assets/images';
import {Icon} from '@components';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HeaderComponent = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.wrapper, {paddingTop: inset.top}]}>
      <Image source={images.logo} style={styles.logo} />
      <TouchableOpacity>
        <Icon icon="qr" preset="medium" style={styles.qrButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    paddingBottom: 14,
  },
  logo: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  qrButton: {
    tintColor: 'white',
  },
});
