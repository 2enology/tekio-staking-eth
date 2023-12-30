import { ReactNode, createContext, useEffect, useState } from "react";
import Moralis from "moralis";
import { useAccount } from "wagmi";
import {
  BoxDatas,
  GetNFTDataContextValue,
  WalletNFTDatas,
} from "../components/DataTypes";
import {
  IPFS_BASE_URL,
  IPFS_DATA_URL,
  MORALIS_API_KEY,
  POLYGON_CHAIN,
  STAKINGCONTRACT_ADDR,
  TEKINFT_MINTCONTRACT_ADDR,
} from "../config";
import { useTekio } from "../hooks/use-tekio";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const GetNFTDataContext = createContext<GetNFTDataContextValue>({
  getDataLoadingState: false,
  stakedNFTs: undefined,
  boxCounts: undefined,
  walletNFTs: undefined,
  boxClaimableState: false,
  isApprovedAllState: false,
  tokenLaunchedState: false,
  userLastClaimedTime: 0,
  totalStakedCounts: 0,
  totalClaimedTokenAmount: 0,
  getWalletNFTs: () => {},
  getStakedNFTs: () => {},
  getInfo: () => {},
});

interface GetNFTDataProviderProps {
  children: ReactNode;
}

const GetNFTDataProvider: React.FC<GetNFTDataProviderProps> = ({
  children,
}) => {
  const { address } = useAccount();
  const {
    getApprovedState,
    getStakedNFTDatas,
    getMyBoxes,
    getBoxType,
    boxClaimable,
    tokenLaunched,
    userLastClaimed,
    totalStaked,
    fetchData,
    tokenClaimedAmount,
  } = useTekio();

  const [getDataLoadingState, setGetDataLoadingState] = useState(false);
  const [isApprovedAllState, setIsApprovedAllState] = useState<
    boolean | unknown
  >(false);
  const [boxClaimableState, setBoxClaimableState] = useState(false);
  const [tokenLaunchedState, setTokenLaunchedState] = useState(false);
  const [userLastClaimedTime, setUserLastClaimedTime] = useState<number>(0);
  const [totalStakedCounts, setTotalStakedCounts] = useState<number>(0);
  const [totalClaimedTokenAmount, setTotalClaimedTokenAmount] =
    useState<number>(0);
  const [boxCounts, setBoxCounts] = useState<BoxDatas[]>();
  const [stakedNFTs, setStakedNFTs] = useState<WalletNFTDatas[]>();
  const [walletNFTs, setWalletNFTs] = useState<WalletNFTDatas[]>();

  const getWalletNFTs = async () => {
    if (address) {
      try {
        setGetDataLoadingState(true);
        if (!Moralis.Core.isStarted) {
          Moralis.start({ apiKey: MORALIS_API_KEY });
        }

        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          chain: POLYGON_CHAIN,
          format: "decimal",
          tokenAddresses: [TEKINFT_MINTCONTRACT_ADDR],
          mediaItems: false,
          address: address,
        });

        const propertiyArrary = await Promise.all(
          response.raw.result.map(async (item) => {
            const response = await Moralis.EvmApi.nft.getNFTMetadata({
              chain: POLYGON_CHAIN,
              format: "decimal",
              normalizeMetadata: true,
              mediaItems: false,
              address: TEKINFT_MINTCONTRACT_ADDR,
              tokenId: item.token_id,
            });

            const imgUrl = response?.raw.normalized_metadata?.image;

            const cid = imgUrl?.split("//")[1];
            const finalUrl = `${IPFS_BASE_URL}${cid}`;

            return {
              tokenId: Number(item.token_id),
              imgUrl: finalUrl,
              isSpecial: false,
            };
          })
        );

        setWalletNFTs(propertiyArrary);
        setGetDataLoadingState(false);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const getStakedNFTs = async () => {
    if (address) {
      const data = await getStakedNFTDatas(address);

      if (!data.isError) {
        const propertiyArrary = await Promise.all(
          data.map(async (item: number) => {
            const response = await Moralis.EvmApi.nft.getNFTMetadata({
              chain: POLYGON_CHAIN,
              format: "decimal",
              normalizeMetadata: true,
              mediaItems: false,
              address: TEKINFT_MINTCONTRACT_ADDR,
              tokenId: item.toString(),
            });

            const imgUrl = response?.raw.normalized_metadata?.image;

            const cid = imgUrl?.split("//")[1];
            const finalUrl = `${IPFS_BASE_URL}${cid}`;

            return {
              tokenId: data.edition,
              imgUrl: finalUrl,
              isSpecial: false,
            };
          })
        );

        setStakedNFTs(propertiyArrary);
      }
    }
  };

  const getInfo = async () => {
    if (address) {
      const approveState = await getApprovedState(
        address,
        STAKINGCONTRACT_ADDR
      );

      setIsApprovedAllState(approveState);
      const claimedTokenAmount = await tokenClaimedAmount(address);
      const claimableState = await boxClaimable(address);
      const tokenLaunch = await tokenLaunched();
      const lastClaimed = await userLastClaimed(address);
      const counts = await totalStaked();
      const state = await getMyBoxes(address);

      setTotalClaimedTokenAmount(
        Number(ethers.utils.formatEther(Number(claimedTokenAmount).toString()))
      );

      setBoxClaimableState(claimableState);

      setTokenLaunchedState(tokenLaunch);

      setUserLastClaimedTime(Number(lastClaimed));

      setTotalStakedCounts(Number(counts));

      if (state.length !== 0) {
        const propertiyArrary = await Promise.all(
          state.map(async (item: any) => {
            const type = await getBoxType(Number(item));
            return {
              boxId: Number(item),
              boxType: Number(type),
            };
          })
        );

        setBoxCounts(propertiyArrary);
      }
    }
  };

  useEffect(() => {
    if (address) {
      getWalletNFTs();
      getStakedNFTs();
      getInfo();
      const interval = setInterval(() => {
        getInfo();
      }, 6000); // 1 minute
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [address]);

  return (
    <GetNFTDataContext.Provider
      value={{
        getDataLoadingState,
        stakedNFTs,
        walletNFTs,
        boxCounts,
        isApprovedAllState,
        boxClaimableState,
        tokenLaunchedState,
        userLastClaimedTime,
        totalStakedCounts,
        totalClaimedTokenAmount,
        getWalletNFTs,
        getStakedNFTs,
        getInfo,
      }}
    >
      {children}
    </GetNFTDataContext.Provider>
  );
};

export default GetNFTDataProvider;
