/* eslint-disable @next/next/no-img-element */

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between h-[80px]">
      <div className="w-full border-[1px] border-white opacity-10" />
      <div className="px-20 min-w-[1000px] w-full flex items-center justify-between">
        <div className="flex gap-[30px]">
          <li
            className="text-[14px] font-bold text-white uppercase border-r-2
          border-white list-none border-opacity-10 pr-[30px]"
          >
            tokenomics
          </li>
          <li className="text-[14px] font-bold text-white uppercase list-none">
            roadmap
          </li>
        </div>
        <div className="w-full flex items-center justify-end gap-[20px]">
          <img src="/imgs/opensea.png" alt="" />
          <img src="/imgs/magiceden.png" alt="" />
          <img src="/imgs/discord.png" alt="" />
          <img src="/imgs/twitter.png" alt="" />
        </div>
      </div>
      <div className="w-full border-[1px] border-white opacity-10" />
      <div className="flex items-center justify-center top-[24px] absolute left-0 right-0">
        <img src="/imgs/logo.png" className="" alt="" />
      </div>
    </div>
  );
};

export default Header;
