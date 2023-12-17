const Background = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="max-w-[1660px] absolute">
        <div
          className="absolute w-[757px] h-[757px] top-[724px] left-[69px] bg-[#006C87]
      filter blur-[350px] rounded-full -z-[9999]"
        />
        <div
          className="absolute w-[574px] h-[574px] top-[565px] left-[581px] bg-[#FFC012]
      filter blur-[250px] rounded-full -z-[9999]"
        />
        <div
          className="absolute w-[818px] h-[818px] top-[594px] right-0 bg-[#8B6BF1]
      filter blur-[350px] rounded-full -z-[9999]"
        />
      </div>
    </div>
  );
};

export default Background;
