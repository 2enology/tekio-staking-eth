export type StakedNFTDatas = {
  tokenId: number;
  imgUrl: string;
  isSpecial: boolean;
};

export type WalletNFTDatas = {
  tokenId: number;
  imgUrl: string;
  isSpecial: boolean;
};

export type BoxDatas = {
  boxId: number;
  boxType: number;
};

export type GetNFTDataContextValue = {
  stakedNFTs: WalletNFTDatas[] | undefined;
  walletNFTs: WalletNFTDatas[] | undefined;
  getDataLoadingState: boolean;
  isApprovedAllState: boolean | unknown;
  boxClaimableState: boolean;
  tokenLaunchedState: boolean;
  userLastClaimedTime: number;
  totalClaimedTokenAmount: number;
  totalStakedCounts: number;
  boxCounts: BoxDatas[] | undefined;
  getWalletNFTs: () => void;
  getStakedNFTs: () => void;
  getInfo: () => void;
  // reFetchOwnNFTs: () => Promise<any>;
};
