import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TokenDetail} from 'src/types';

interface TokenDetailsProps {
  tokenDetails: TokenDetail;
}

export const TokenDetails = ({tokenDetails}: TokenDetailsProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={{uri: tokenDetails?.image}} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <Text>{tokenDetails?.name}</Text>
          <Text style={[styles.label, styles.marginTopSm]}>TOKEN (ERC-20)</Text>
          <View style={styles.valueContainer}>
            <View style={[styles.valueItem, styles.borderRight]}>
              <Text style={styles.label}>PRICE</Text>
              <Text style={styles.marginTopSm}>{tokenDetails?.price}</Text>
            </View>
            <View style={styles.valueItem}>
              <Text style={styles.label}>MARKET CAP</Text>
              <Text style={styles.marginTopSm}>{tokenDetails?.marketcap}</Text>
            </View>
          </View>
          <View style={styles.inforRow}>
            <Text style={styles.label}>TOTAL SUPPLY</Text>
            <Text style={styles.marginTopSm}>{tokenDetails?.totalsupply}</Text>
          </View>
          <View style={styles.inforRow}>
            <Text style={styles.label}>CONTRACT</Text>
            <Text style={styles.marginTopSm}>{tokenDetails?.address}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>VIEW MORE DETAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTopSm: {
    marginTop: 4,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: '500',
  },
  button: {
    width: '70%',
    backgroundColor: 'blue',
    marginTop: 32,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#F2F3F5',
  },
  label: {
    fontSize: 12,
    color: '#CBD2D9',
    fontWeight: '500',
  },
  inforRow: {
    width: '85%',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F5',
    paddingVertical: 12,
  },
  valueItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical: 8,
  },
  valueContainer: {
    marginTop: 16,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F5',
  },
  content: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  wrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});
