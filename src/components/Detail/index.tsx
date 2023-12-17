import { PercentCircleIcon } from "../SvgList";
import ProgressBar from "./progressBar";

const Detail = () => {
  const percent = 86;
  const alpha = 2.4 * percent;
  const top = 35 * (1 - Math.sin(((30 - alpha) * Math.PI) / 180));
  const left = 35 * (1 - Math.cos(((30 - alpha) * Math.PI) / 180));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full gap-6 mt-[121px]">
      <div className="flex flex-col items-center justify-start w-full p-8 bg-black rounded-md bg-opacity-30 gap-[16px]">
        <div className="w-full text-left">
          <h1 className="text-white text-[20px] font-bold uppercase text-left">
            Distributed Tekio tkn
          </h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <p className="text-[10px] font-extrabold uppercase text-gray-600">
              current
            </p>
            <p className="text-[20px] text-white font-bold">4817121.20</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-[10px] font-extrabold uppercase text-gray-600">
              total supply
            </p>
            <p className="text-[20px] text-white font-bold">{`10 000 000 000.00`}</p>
          </div>
        </div>
        <ProgressBar percent={30} />
      </div>
      <div className="flex flex-col items-center justify-start w-full p-8 bg-black rounded-md bg-opacity-30 gap-[16px]">
        <div className="w-full text-left">
          <h1 className="text-white text-[20px] font-bold uppercase text-left">
            Total Staked NFTs
          </h1>
        </div>
        <div className="relative flex items-center justify-between w-full">
          <div className="flex gap-[18px] relative w-full">
            <div className="">
              <p className="text-[10px] font-extrabold uppercase text-gray-600">
                staked
              </p>
              <p className="text-[20px] text-white font-bold">3252</p>
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase text-gray-600">
                total
              </p>
              <p className="text-[20px] text-white font-bold">5000</p>
            </div>
          </div>
          <div className="absolute -top-[51px] right-0">
            <div className="w-[76px] h-[76px]">
              <PercentCircleIcon />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
              <p className="text-[#2CE6FF] text-[30px] font-extrabold">
                {percent}
              </p>
              <p className="text-[#2CE6FF] font-[500] text-[12px]">percent</p>
            </div>
            <div
              className={`absolute w-[10px] h-[10px] rounded-full bg-[#2CE6FF] bottom-[${Math.floor(
                top
              )}px] left-[${Math.floor(left)}px]`}
              style={{
                bottom: Math.floor(top) + "px",
                left: Math.floor(left) + "px",
              }}
            />
          </div>
        </div>
        <ProgressBar percent={80} />
      </div>
    </div>
  );
};

export default Detail;
