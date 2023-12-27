import { useContext, useState } from "react";
import MysteryBox from "../components/mysteryBox";
import { GetNFTDataContext } from "../contexts/NFTDataContext";
import { CircleSpinner } from "react-spinners-kit";
import { useTekio } from "../hooks/use-tekio";
import { useLockedBody } from "../hooks/use-locked-body";
import { errorAlert, successAlert } from "../components/toastGroup";
import { useAccount } from "wagmi";

const RewardPage = () => {
  const { address } = useAccount();
  const { claimMyBox, getBox } = useTekio();
  const { boxCounts, getInfo, stakedNFTs, boxClaimableState } =
    useContext(GetNFTDataContext);
  const { setLocked } = useLockedBody();
  const [loading, setLoading] = useState(false);

  const handleClaimBox = async (id: number) => {
    setLoading(true);
    setLocked(true);
    try {
      const result = await claimMyBox(id);
      if (result) {
        successAlert("Claimed Successful!");
        getInfo();
      } else {
        errorAlert("Claim Canceled");
      }
      setLoading(false);
      setLocked(false);
    } catch (error) {
      console.log(error);
      errorAlert("Claim Error");
      setLoading(false);
      setLocked(false);
    }
  };

  const handleGetBox = async () => {
    if (address) {
      setLoading(true);
      setLocked(true);
      try {
        const result = await getBox();
        if (result) {
          getInfo();
          successAlert("Claimed Successful!");
        } else {
          errorAlert("Claim Canceled");
        }
        setLoading(false);
        setLocked(false);
      } catch (error) {
        console.log(error);
        errorAlert("Claim Error");
        setLoading(false);
        setLocked(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {stakedNFTs?.length !== 0 && boxClaimableState && (
        <div
          className="px-2 py-4 my-5 font-bold text-red-500 uppercase bg-black rounded-md cursor-pointer bg-opacity-40 text-md animate-pulse"
          onClick={() => handleGetBox()}
        >
          Get My MysteryBoxes
        </div>
      )}
      <div className="w-full max-w-[1446px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        {boxCounts?.map((data, key) => (
          <MysteryBox
            key={key}
            boxId={data.boxId}
            boxType={data.boxType}
            onClick={() => handleClaimBox(data.boxId)}
          />
        ))}
        {loading && (
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25 backdrop-blur-md z-[9999] items-center justify-center flex">
            <CircleSpinner size={50} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardPage;
