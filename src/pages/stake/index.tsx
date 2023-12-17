import { useEffect, useState } from "react";
import WalletConnectBtn from "../../components/walletConnectButton";
import NftCard from "../../components/nftCard";
import SelectBar from "../../components/selectBar";
import Background from "../../components/background";
import ClaimModal from "../../components/Modals/claimModal";
import { useModal } from "../../contexts/ModalContext";
import StakeModal from "../../components/Modals/stakeModal";

interface Data {
  imgUrl: string;
  tokenId: number;
  type: number;
}

const unStakedtestData = [
  { imgUrl: "/imgs/testData/3.png", tokenId: 23, type: 0 },
  { imgUrl: "/imgs/testData/2.png", tokenId: 1123, type: 1 },
  { imgUrl: "/imgs/testData/1.png", tokenId: 343, type: 2 },
  { imgUrl: "/imgs/testData/4.png", tokenId: 2342, type: 3 },
];

const stakedtestData = [
  { imgUrl: "/imgs/testData/1.png", tokenId: 1123, type: 1 },
  { imgUrl: "/imgs/testData/2.png", tokenId: 23, type: 0 },
  { imgUrl: "/imgs/testData/4.png", tokenId: 2342, type: 3 },
  { imgUrl: "/imgs/testData/3.png", tokenId: 343, type: 2 },
];

const Stake = () => {
  const [showStakedNft, setShowStakedNft] = useState(false);
  const [nftData, setNftData] = useState(unStakedtestData);
  const [data4Func, setData4Func] = useState<Data[]>([]);
  const { openClaimModal } = useModal();

  const handleAddData = (data: Data) => {
    const isDataExist = data4Func.some((item) => item.tokenId === data.tokenId);

    if (isDataExist) {
      const updatedData = data4Func.filter(
        (item) => item.tokenId !== data.tokenId
      );
      setData4Func(updatedData);
    } else {
      const newData = [...data4Func, data];
      setData4Func(newData);
    }
  };

  const handleClearAll = () => {
    setData4Func([]);
  };

  const handleSelectAll = () => {
    showStakedNft
      ? setData4Func(stakedtestData)
      : setData4Func(unStakedtestData);
  };

  useEffect(() => {
    console.log("data4Func", data4Func);
  }, [data4Func]);

  return (
    <div className="flex items-center justify-center w-full mt-[103px] flex-col gap-[35px] px-3 duration-300 transition-all relative">
      <div className="md:w-[600px] w-full p-[32px] flex flex-col items-center justify-start gap-[24px] bg-white bg-opacity-5 rounded-md">
        <div className="flex items-center justify-start">
          <WalletConnectBtn />
        </div>
        <div className="w-full flex items-center justify-center gap-[48px]">
          <div className="flex flex-col gap-[3px]">
            <p className="text-transparent bg-gradient-to-br from-[#B3FFAB] to-[#12FFF7] bg-clip-text">
              <span className="text-[40px] font-extrabold uppercase">653</span>{" "}
              <span className="text-[22px] font-extrabold uppercase">
                tek/day
              </span>
            </p>
            <p className="text-[12px] font-medium uppercase text-white text-opacity-40">
              Rewards Rate
            </p>
          </div>
          <div className="flex flex-col gap-[3px]">
            <p className="text-transparent bg-gradient-to-br from-[#B3FFAB] to-[#12FFF7] bg-clip-text">
              <span className="text-[40px] font-extrabold uppercase">
                {Number(23145).toLocaleString()}
              </span>{" "}
              <span className="text-[22px] font-extrabold uppercase">tek</span>
            </p>
            <p className="text-[12px] font-medium uppercase text-white text-opacity-40">
              Earnings
            </p>
          </div>
        </div>
        <button
          className="px-3 py-[16px] border-[1px] border-white border-opacity-30 rounded-md text-white font-bold text-[16px] uppercase cursor-pointer"
          onClick={openClaimModal}
        >
          claim your rewards
        </button>
      </div>
      <div className="md:w-[600px] w-full flex items-center justify-center p-[3px] bg-white bg-opacity-5 rounded-md">
        <div
          className={`w-1/2 py-[10px] font-extrabold uppercase flex items-center justify-center rounded-md cursor-pointer ${
            !showStakedNft ? "bg-white text-black" : "transparent text-white"
          }`}
          onClick={() => (
            setShowStakedNft(false),
            setNftData(unStakedtestData),
            setData4Func([])
          )}
        >
          my nfts
        </div>
        <div
          className={`w-1/2 py-[10px] font-extrabold uppercase flex items-center justify-center rounded-md cursor-pointer ${
            showStakedNft ? "bg-white text-black" : "transparent text-white"
          }`}
          onClick={() => (
            setShowStakedNft(true), setNftData(stakedtestData), setData4Func([])
          )}
        >
          staked
        </div>
      </div>
      <div className="w-full max-w-[1446px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        {nftData.map((data, index) => (
          <NftCard
            key={index}
            type={data.type}
            tokenId={data.tokenId}
            imgUrl={data.imgUrl}
            isSelected={
              data4Func &&
              data4Func.find((item) => item.tokenId === data.tokenId)
                ? true
                : false
            }
            onClick={() => handleAddData(data)}
          />
        ))}
      </div>
      <SelectBar
        stakeState={!showStakedNft}
        clearAll={handleClearAll}
        selectAll={handleSelectAll}
      />
      <ClaimModal />
      <StakeModal />
    </div>
  );
};

export default Stake;
