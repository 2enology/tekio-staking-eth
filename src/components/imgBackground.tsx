/* eslint-disable @next/next/no-img-element */

const ImgBackground = () => {
  return (
    <div className="w-full xl:items-center xl:flex xl:justify-center">
      <div className="absolute hidden xl:block top-[212px] left-[-45px] -z-[9998]">
        <img src="/imgs/bg-avatar4.png" alt="" />
      </div>
      <div className="absolute hidden xl:block top-[155px] right-[207px] -z-[9998]">
        <img src="/imgs/bg-avatar1.png" alt="" />
      </div>

      <div className="absolute hidden xl:block top-[685px] right-[0px] -z-[9998] opacity-60">
        <img src="/imgs/bg-avatar2.png" alt="" />
      </div>

      <div className="absolute hidden xl:block top-[1263px] left-[-33px] -z-[9998] opacity-60">
        <img src="/imgs/bg-avatar3.png" alt="" />
      </div>
      <div
        className="absolute xl:w-[574px] w-[340px] h-[574px] xl:top-[150px] top-[135px] xl:left-[581px] left-[0] bg-[#FFC012]
      filter blur-[200px] rounded-full opacity-50 -z-[9999]"
      />
      <div
        className="absolute xl:w-[757px] h-[757px] w-[340px] xl:top-[200px] top-[340px] xl:left-[69px] -left-[138px] bg-[#006C87]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
      />
      <div
        className="absolute xl:w-[758px] w-[340px] h-[758px] top-[200px] right-[100px] bg-[#8B6BF1]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
      />
    </div>
  );
};

export default ImgBackground;
