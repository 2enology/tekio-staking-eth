/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./button";
import CheckBox from "./checkBox";

type NftCardProps = {
  type: boolean;
  tokenId: number;
  imgUrl: string;
  isSelected: boolean;
  onClick: () => void;
};

const NftCard: React.FC<NftCardProps> = ({
  type,
  tokenId,
  imgUrl,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`w-full flex flex-col bg-black bg-opacity-30 rounded-md p-[10px] ${
        isSelected ? "border-[2px] border-[#2CE6FF]" : ""
      }`}
    >
      <div className="relative shadow-nftImgShadow min-h-[340px]">
        <img src={imgUrl} className="relative w-full rounded-md" alt="" />
        <div className="absolute top-[10px] left-[10px] py-[7px] px-[10px] bg-black bg-opacity-80 rounded-md text-[14px] font-extrabold text-white">
          #{tokenId}
        </div>
      </div>
      <div className="flex items-center justify-end w-full p-[20px]">
        {/* <Button type={type} /> */}
        <CheckBox
          isSelected={isSelected}
          tokenId={tokenId}
          onClick={() => onClick()} // Pass the onClick handler to CheckBox
        />
      </div>
    </div>
  );
};

export default NftCard;
