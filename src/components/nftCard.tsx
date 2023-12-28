/* eslint-disable @next/next/no-img-element */
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      className={`w-full flex flex-col bg-black bg-opacity-30 rounded-md p-[10px] relative ${
        isSelected ? "border-[2px] border-[#2CE6FF]" : ""
      }`}
    >
      <div className="relative shadow-nftImgShadow min-h-[310px]">
        <div className="absolute z-[12] top-0 left-0 bottom-[6px] right-0">
          <Skeleton
            height={"100%"}
            width={"100%"}
            baseColor="#454646"
            borderRadius={"6px"}
            highlightColor="#313131"
          />
        </div>
        <img
          src={imgUrl}
          className="relative z-[13] w-full rounded-md bottom-0"
          alt=""
        />
        <div className="absolute top-[10px] left-[10px] py-[7px] px-[10px] bg-black bg-opacity-80 rounded-md text-[14px] font-extrabold text-white z-[13]">
          #{tokenId}
        </div>
      </div>
      <div className="flex items-center justify-end w-full p-[20px] absolute right-3 z-[13]">
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
