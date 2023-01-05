import axios from 'axios';
import {useEffect, useState} from 'react';
import {Token, TokenDetail} from 'src/types';

export const useGetTokenDetails = (token?: Token) => {
  const [res, setRes] = useState<TokenDetail | undefined>();

  useEffect(() => {
    if (token) {
      getTokenDetail(token);
    } else {
      setRes(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getTokenDetail = async (item: Token) => {
    const data = await axios.get(
      `https://mobiletest.etherscan.io/v1/api.ashx?key=796EBD8C9157B9EF4FF72CE7BCCEE&module=result&value=${item?.value}&type=${item.typeval}`,
    );
    setRes(data?.data?.result);
  };
  return {data: res};
};
