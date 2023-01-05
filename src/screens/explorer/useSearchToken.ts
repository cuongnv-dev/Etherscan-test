import axios from 'axios';
import {useEffect, useState} from 'react';
import {Token} from 'src/types';

export const useSearchToken = (term?: string) => {
  const [res, setRes] = useState<Token[]>([]);

  useEffect(() => {
    searchToken(term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  const searchToken = async (key?: string) => {
    if (key) {
      const data = await axios.get(
        `https://mobiletest.etherscan.io/v1/api.ashx?key=796EBD8C9157B9EF4FF72CE7BCCEE&module=search&term=${key}`,
      );
      setRes(data?.data);
    } else {
      console.log('No key');
      setRes([]);
    }
  };
  return {data: res};
};
