import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '@assets/images';

export const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.search} style={styles.image} />
      </View>
      <Text style={styles.title}>Welcome to Etherscan</Text>
      <Text style={styles.subTitle}>
        {'Explore the price, balance and more \non the Ethereum Network'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E7EB',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  subTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});
