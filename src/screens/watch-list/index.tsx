import {
  Alert,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Token} from 'src/types';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Icon} from '@components';

export const WatchListScreen = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [permissionStatus, setPermissionStatus] = useState<boolean>(false);

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    const status = await check(PERMISSIONS.IOS.CAMERA);
    if (status === RESULTS.GRANTED) {
      setPermissionStatus(true);
    }
  };

  const getKey = (item: Token, index: number) => `${item?.label} - ${index}`;

  const renderWatchlistItem: ListRenderItem<Token> = () => {
    return <View />;
  };

  const addAddress = () => {
    if (permissionStatus) {
      console.log('Add Address');
    } else {
      Alert.alert(
        'Cannot to open QR Code Scanner because the Camera permission is not activated',
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Your Watchlist</Text>
      <FlatList
        data={tokens}
        keyExtractor={getKey}
        renderItem={renderWatchlistItem}
      />
      <TouchableOpacity style={styles.button} onPress={addAddress}>
        <Text style={styles.buttonLabel}>ADD ADDRESS TO WATCHLIST</Text>
        <Icon icon="add" preset="xls" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F2F3F5',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'blue',
    marginTop: 32,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: '500',
    marginRight: 8,
  },
  buttonIcon: {
    tintColor: 'white',
  },
});
