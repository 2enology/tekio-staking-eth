const Background = () => {
  return (
    <div className="2xl:w-[1606px] xl:w-[1000px] absolute mt-[160px]">
      <div className="relative ">
        <div
          className="absolute w-[757px] h-[757px] top-[724px] left-[69px] bg-[#006C87]
      filter blur-[350px] rounded-full -z-[1]"
        />
        <div
          className="absolute w-[574px] h-[574px] top-[565px] left-[581px] bg-[#FFC012]
      filter blur-[250px] rounded-full -z-[2]"
        />
        <div
          className="absolute w-[818px] h-[818px] top-[594px] right-0 bg-[#8B6BF1]
      filter blur-[350px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Background;
