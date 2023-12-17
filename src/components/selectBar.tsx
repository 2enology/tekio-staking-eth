import React from "react";
import { useModal } from "../contexts/ModalContext";

interface SelectBarProps {
  stakeState: boolean;
  clearAll: () => void;
  selectAll: () => void;
}

const SelectBar: React.FC<SelectBarProps> = ({
  stakeState,
  clearAll,
  selectAll,
}) => {
  const { openStakeModal, openClaimModal } = useModal();

  return (
    <div className="w-full max-w-[1446px]">
      <div className="w-full p-[16px] bg-black rounded-md flex flex-col md:flex-row gap-2 items-center justify-between relative z-[50]">
        <div className="flex items-center justify-center gap-[5px]">
          <div
            className="text-white rounded-md border-[1px] border-white border-opacity-25 px-[16px] py-[12px] uppercase cursor-pointer"
            onClick={() => selectAll()}
          >
            select all
          </div>
          <div
            className="text-white rounded-md border-[1px] border-white border-opacity-25 px-[16px] py-[12px] uppercase cursor-pointer"
            onClick={() => clearAll()}
          >
            clear
          </div>
        </div>
        <div
          className="text-white uppercase font-extrabold border-[1px] border-[#7e7e7e] rounded-md px-[16px] py-[12px] text-[16px] cursor-pointer
    bg-gradient-to-br from-[#18C8FF] to-[#DB01FF] w-full md:w-auto flex items-center justify-center"
          onClick={stakeState ? openStakeModal : openClaimModal}
        >
          confirm and {stakeState ? "stake" : "unstake"}
        </div>
      </div>
    </div>
  );
};

export default SelectBar;
