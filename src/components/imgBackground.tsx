/* eslint-disable @next/next/no-img-element */

const ImgBackground = () => {
  return (
    <div className="hidden w-full lg:block">
      <div className="absolute top-[212px] left-[-45px] -z-[1]">
        <img src="/imgs/bg-avatar4.png" alt="" />
      </div>
      <div className="absolute top-[155px] right-[207px] -z-[1]">
        <img src="/imgs/bg-avatar1.png" alt="" />
      </div>

      <div className="absolute top-[685px] right-[-92px] -z-[1]">
        <img src="/imgs/bg-avatar2.png" alt="" />
      </div>

      <div className="absolute top-[1263px] left-[-33px] -z-[1] opacity-60">
        <img src="/imgs/bg-avatar3.png" alt="" />
      </div>
    </div>
  );
};

export default ImgBackground;
