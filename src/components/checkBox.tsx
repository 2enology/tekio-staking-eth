const CheckBox = () => {
  return (
    <div className="flex gap-[10px] items-center justify-between">
      <p className="font-extrabold uppercase text-[12px] text-white text-opacity-25">
        select
      </p>
      <div className="w-[24px] h-[24px] rounded-md border-[1px] border-white border-opacity-25 bg-black cursor-pointer"></div>
    </div>
  );
};

export default CheckBox;
