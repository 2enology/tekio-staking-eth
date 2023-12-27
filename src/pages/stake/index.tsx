/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import SelectBar from "../../components/selectBar";
import ClaimModal from "../../components/Modals/claimModal";
import StakeModal from "../../components/Modals/stakeModal";
import { WalletNFTDatas } from "../../components/DataTypes";
import { GetNFTDataContext } from "../../contexts/NFTDataContext";
import { CircleSpinner } from "react-spinners-kit";
import ProgressBar from "../../components/Detail/progressBar";
import StakedPage from "../../modules/stakedPage";
import UnStakedPage from "../../modules/unstakedPage";
import RewardPage from "../../modules/rewardPage";

const Stake = () => {
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const {
    walletNFTs,
    getDataLoadingState,
    stakedNFTs,
    userLastClaimedTime,
    boxCounts,
  } = useContext(GetNFTDataContext);

  const [showPage, setShowPage] = useState("stake");
  const [data4Func, setData4Func] = useState<WalletNFTDatas[]>([]);
  const [selectedNFTs, setSelectedNFTs] = useState<Number[]>([]);

  const handleAddData = (data: WalletNFTDatas) => {
    const isDataExist = data4Func.some((item) => item.tokenId === data.tokenId);

    if (isDataExist) {
      const updatedData = data4Func.filter(
        (item) => item.tokenId !== data.tokenId
      );
      setData4Func(updatedData);
      setSelectedNFTs(updatedData.map((obj) => obj.tokenId));
    } else {
      const newData = [...data4Func, data];
      setData4Func(newData);
      const tokenIdsArray = newData.map((obj) => obj.tokenId);
      setSelectedNFTs(tokenIdsArray);
    }
  };

  const handleClearAll = () => {
    setData4Func([]);
    setSelectedNFTs([]);
  };

  const handleSelectAll = () => {
    if (walletNFTs && stakedNFTs) {
      showPage === "stake"
        ? (setData4Func(walletNFTs),
          setSelectedNFTs(walletNFTs.map((obj) => obj.tokenId)))
        : (setData4Func(stakedNFTs),
          setSelectedNFTs(stakedNFTs.map((obj) => obj.tokenId)));
    }
  };

  return (
    <div className="flex items-center justify-start w-full mt-[49px] md:mt-[103px] flex-col gap-[35px] px-3 duration-300 transition-all relative animate__animated animate__fadeIn min-h-screen">
      <div className="md:w-[540px] w-full p-[24px] flex items-center justify-between gap-[20px] bg-black bg-opacity-30 rounded-md">
        <div className="flex flex-col gap-[12px] w-[calc(100%-103px)]">
          <div className="flex items-center justify-between">
            <p className="font-bold text-white uppercase text-[16px]">
              next reward
            </p>
            <p className="font-bold text-white uppercase text-[16px]">3 days</p>
          </div>
          <ProgressBar
            percent={
              Math.floor(
                ((currentTimestamp - userLastClaimedTime) * 100) / Number(250)
              ) > 100
                ? 100
                : Math.floor(
                    ((currentTimestamp - userLastClaimedTime) * 100) /
                      Number(250)
                  ) < 0
                ? 0
                : Math.floor(
                    ((currentTimestamp - userLastClaimedTime) * 100) /
                      Number(250)
                  )
            }
          />
          <p className="font-bold text-white uppercase text-[13px]">
            week Bonus: 1 mystery box
          </p>
        </div>
        <div className="relative w-[103px]">
          <img src="/imgs/box1.png" className="w-[103px]" alt="" />
          <div className="absolute top-0 right-0 flex items-center justify-center">
            {/* <div>
              <span className="text-black text-[16px] font-bold absolute top-2 right-2">
                5x
              </span>
              <BoxRightTopIcon />
            </div> */}
          </div>
        </div>
      </div>
      <div className="md:w-[540px] w-full flex items-center justify-center p-[3px] bg-black bg-opacity-30 rounded-md">
        <div
          className={`w-1/2 py-[10px] gap-4 font-extrabold uppercase flex items-center justify-center rounded-md cursor-pointer ${
            showPage === "stake"
              ? "bg-white text-black"
              : "transparent text-white"
          }`}
          onClick={() => (
            setShowPage("stake"), setSelectedNFTs([]), setData4Func([])
          )}
        >
          my nfts {`(${walletNFTs === undefined ? "0" : walletNFTs?.length})`}
        </div>
        <div
          className={`w-1/2 py-[10px] font-extrabold uppercase flex items-center justify-center rounded-md cursor-pointer ${
            showPage === "unstake"
              ? "bg-white text-black"
              : "transparent text-white"
          }`}
          onClick={() => (
            setShowPage("unstake"), setSelectedNFTs([]), setData4Func([])
          )}
        >
          staked {`(${walletNFTs === undefined ? "0" : stakedNFTs?.length})`}
        </div>
        <div
          className={`w-1/2 py-[10px] font-extrabold uppercase flex items-center justify-center rounded-md cursor-pointer ${
            showPage === "rewards"
              ? "bg-white text-black"
              : "transparent text-white"
          }`}
          onClick={() => (
            setShowPage("rewards"), setSelectedNFTs([]), setData4Func([])
          )}
        >
          rewards {`(${boxCounts === undefined ? "0" : boxCounts?.length})`}
        </div>
      </div>
      {getDataLoadingState && (
        <div className="flex items-center justify-center">
          <CircleSpinner />
        </div>
      )}

      {walletNFTs && showPage === "stake" && (
        <StakedPage
          data={walletNFTs}
          data4Func={data4Func}
          handleAddData={(data) => handleAddData(data)}
        />
      )}

      {stakedNFTs && showPage === "unstake" && (
        <UnStakedPage
          data={stakedNFTs}
          data4Func={data4Func}
          handleAddData={(data) => handleAddData(data)}
        />
      )}

      {showPage === "rewards" && <RewardPage />}

      {showPage !== "rewards" && (
        <SelectBar
          pageState={showPage}
          clearAll={handleClearAll}
          selectAll={handleSelectAll}
          selectedNFTs={selectedNFTs}
        />
      )}

      <ClaimModal />
      <StakeModal />
      {/* <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 backdrop-blur-sm z-[-9997]" /> */}
    </div>
  );
};

export default Stake;
