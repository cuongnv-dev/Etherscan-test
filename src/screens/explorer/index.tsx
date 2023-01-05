import React, {useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Token} from 'src/types';
import {EmptyComponent} from './components/empty-component';
import {ListToken} from './components/list-token';
import {SearchInput} from './components/search-input';
import {TokenDetails} from './components/token-details';
import {useGetTokenDetails} from './useGetTokenDetails';
import {useSearchToken} from './useSearchToken';

export const ExplorerScreen = () => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(
    undefined,
  );

  const {data} = useSearchToken(searchKey);
  const {data: tokenDetails} = useGetTokenDetails(selectedToken);

  const handleSearchChange = (text: string) => {
    setSelectedToken(undefined);
    setSearchKey(text);
  };

  const handleViewTokenDetail = (token: Token) => {
    setSelectedToken(token);
  };

  const renderContent = useMemo(() => {
    if (data?.length === 0) {
      return <EmptyComponent />;
    }

    if (tokenDetails) {
      return <TokenDetails tokenDetails={tokenDetails} />;
    }

    return <ListToken data={data} onSelectToken={handleViewTokenDetail} />;
  }, [data, tokenDetails]);

  return (
    <View style={styles.wrapper}>
      <SearchInput onChangeText={handleSearchChange} />
      {renderContent}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F2F3F5',
  },
});
