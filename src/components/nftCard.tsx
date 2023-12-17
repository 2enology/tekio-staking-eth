/* eslint-disable @next/next/no-img-element */
import Button from "./button";
import CheckBox from "./checkBox";

const NftCard = (props: { type: number }) => {
  return (
    <div className="w-full flex flex-col bg-white bg-opacity-5 rounded-md p-[10px]">
      <div className="relative shadow-nftImgShadow">
        <img src="/imgs/avatar3.jpg" className="relative rounded-md" alt="" />
        <div className="absolute top-[10px] left-[10px] py-[7px] px-[10px] bg-black bg-opacity-25 rounded-md text-[14px] font-extrabold text-white">
          #3043
        </div>
      </div>
      <div className="flex items-center justify-between w-full p-[20px]">
        <Button type={props.type} />
        <CheckBox />
      </div>
    </div>
  );
};

export default NftCard;
