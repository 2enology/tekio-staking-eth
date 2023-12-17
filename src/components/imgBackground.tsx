/* eslint-disable @next/next/no-img-element */

const ImgBackground = () => {
  return (
    <div className="hidden w-full xl:block">
      <div className="absolute top-[212px] left-[-45px] -z-[9998]">
        <img src="/imgs/bg-avatar4.png" alt="" />
      </div>
      <div className="absolute top-[155px] right-[207px] -z-[9998]">
        <img src="/imgs/bg-avatar1.png" alt="" />
      </div>

      <div className="absolute top-[685px] right-[0px] -z-[9998] opacity-60">
        <img src="/imgs/bg-avatar2.png" alt="" />
      </div>

      <div className="absolute top-[1263px] left-[-33px] -z-[9998] opacity-60">
        <img src="/imgs/bg-avatar3.png" alt="" />
      </div>
      <div className="max-w-[1660px] flex items-center">
        <div
          className="absolute w-[757px] h-[757px] top-[724px] left-[69px] bg-[#006C87]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
        />
        <div
          className="absolute w-[574px] h-[574px] top-[565px] left-[581px] bg-[#FFC012]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
        />
        <div
          className="absolute w-[818px] h-[818px] top-[594px] right-0 bg-[#8B6BF1]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
        />
      </div>
    </div>
  );
};

export default ImgBackground;
