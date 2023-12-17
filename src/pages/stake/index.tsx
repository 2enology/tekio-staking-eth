import { useState } from "react";
import WalletConnectBtn from "../../components/walletConnectButton";
import NftCard from "../../components/nftCard";
import SelectBar from "../../components/selectBar";

const Stake = () => {
  const [showStakedNft, setShowStakedNft] = useState(false);
  return (
    <div className="flex items-center justify-center w-full mt-[103px] flex-col gap-[35px] px-3 duration-300 transition-all">
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
        <button className="px-3 py-[16px] border-[1px] border-white border-opacity-30 rounded-md text-white font-bold text-[16px] uppercase cursor-pointer">
          claim your rewards
        </button>
      </div>
      <div className="md:w-[600px] w-full flex items-center justify-center p-[3px] bg-white bg-opacity-5 rounded-md">
        <div
          className={`w-1/2 py-[10px] font-extrabold uppercase flex items-center justify-center rounded-md cursor-pointer ${
            !showStakedNft ? "bg-white text-black" : "transparent text-white"
          }`}
          onClick={() => setShowStakedNft(false)}
        >
          my nfts
        </div>
        <div
          className={`w-1/2 py-[10px] font-extrabold uppercase flex items-center justify-center rounded-md cursor-pointer ${
            showStakedNft ? "bg-white text-black" : "transparent text-white"
          }`}
          onClick={() => setShowStakedNft(true)}
        >
          staked
        </div>
      </div>
      <div className="w-full max-w-[1446px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        <NftCard type={0} />
        <NftCard type={1} />
        <NftCard type={2} />
        <NftCard type={1} />
        <NftCard type={3} />
      </div>
      <div className="w-full max-w-[1446px]">
        <SelectBar />
      </div>
    </div>
  );
};

export default Stake;
