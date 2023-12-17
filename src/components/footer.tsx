/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between mt-[130px] relative">
      <div className="w-full border-t-[1px] border-white border-opacity-10 flex items-center justify-center py-[40px] relative">
        <p className="relative font-bold text-white uppercase text-opacity-20">
          Designed & developed by{" "}
          <a className="" href="" target="_blank" rel="referrer">
            TEKIO TEAM
          </a>
        </p>
      </div>
      <div className="absolute top-[-30px] left-0 right-0 flex items-center justify-center w-full">
        <img src="/imgs/logo.png" alt="" className="w-[64px] h-[64px]" />
      </div>
    </div>
  );
};

export default Footer;
