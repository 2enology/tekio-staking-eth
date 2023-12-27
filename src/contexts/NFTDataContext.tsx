import { ReactNode, createContext, useEffect, useState } from "react";
import Moralis from "moralis";
import { useAccount } from "wagmi";
import {
  BoxDatas,
  GetNFTDataContextValue,
  WalletNFTDatas,
} from "../components/DataTypes";
import {
  GOERLI_CHAIN,
  IPFS_BASE_URL,
  IPFS_DATA_URL,
  MORALIS_API_KEY,
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
  const [isApprovedAllState, setIsApprovedAllState] = useState(false);
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
          chain: GOERLI_CHAIN,
          format: "decimal",
          tokenAddresses: [TEKINFT_MINTCONTRACT_ADDR],
          mediaItems: false,
          address: address,
        });

        const propertiyArrary = await Promise.all(
          response.raw.result.map(async (item) => {
            const data = await fetchData(
              IPFS_DATA_URL + item.token_id + ".json"
            );

            const cid = data.image.split("//")[1];
            const finalUrl = `${IPFS_BASE_URL}${cid}`;

            return {
              tokenId: data.edition,
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

      console.log("Data", data.isError);
      if (!data.isError) {
        const propertiyArrary = await Promise.all(
          data.map(async (item: number) => {
            const data = await fetchData(IPFS_DATA_URL + item + ".json");

            const cid = data.image.split("//")[1];
            const finalUrl = `${IPFS_BASE_URL}${cid}`;

            // const filteredResults = Object.keys(data.attributes).filter((key) => {
            //   return (
            //     data.attributes[key].trait_type === "Hair down" &&
            //     (data.attributes[key].value.includes("robotic") ||
            //       data.attributes[key].value.includes("baseball") ||
            //       data.attributes[key].value.includes("halo"))
            //   );
            // });

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
      const state = await getMyBoxes(address);
      const claimedTokenAmount = await tokenClaimedAmount(address);

      setTotalClaimedTokenAmount(
        Number(
          parseFloat(
            ethers.utils.formatEther(claimedTokenAmount.toString())
          ).toFixed(2)
        )
      );
      const claimableState = await boxClaimable(address);
      setBoxClaimableState(claimableState);
      const tokenLaunch = await tokenLaunched();
      setTokenLaunchedState(tokenLaunch);
      const lastClaimed = await userLastClaimed(address);
      setUserLastClaimedTime(Number(lastClaimed));
      const counts = await totalStaked();
      setTotalStakedCounts(Number(counts));
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
