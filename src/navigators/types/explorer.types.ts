import {Token} from 'src/types';
import {ExplorerName} from '../screen-names/explorer.names';

export type ExplorerNavigatorParamList = {
  [ExplorerName.ExplorerDashboard]: undefined;
  [ExplorerName.TokenDetails]: {token: Token};
};
