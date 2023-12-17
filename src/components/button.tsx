const Button = (props: { type: number }) => {
  return (
    <div
      className={`nftButton rounded-md ${
        props.type === 0
          ? "bg-[#EA6F75]"
          : props.type === 1
          ? "bg-[#61BAF3]"
          : props.type === 2
          ? "bg-[#D2D2D2]"
          : "bg-[#C591F2]"
      } cursor-pointer`}
      style={
        props.type === 0
          ? {
              boxShadow:
                "0 0 6px #cc434a, inset 0px 9px 9px 0px #ffffff8c, inset 0 -5px 4px 0px #c03c44",
            }
          : props.type === 1
          ? {
              boxShadow:
                "0 0 6px #2A88C1, inset 0px 9px 9px 0px #ffffffb3, inset 0 -5px 4px 0px #1677BA",
            }
          : props.type === 2
          ? {
              boxShadow:
                "inset 0px 4px 4px 0px #ffffff, inset 0 -5px 4px 0px #0000004d",
            }
          : {
              boxShadow:
                "0 0 6px #8A28ED, inset 0px 9px 9px 0px #ffffffb3, inset 0 -5px 4px 0px #9A49E7",
            }
      }
    >
      <p
        className={`${
          props.type === 0
            ? "text-[#871118]"
            : props.type === 1
            ? "text-[#0B47AD]"
            : props.type === 2
            ? "text-[#000000]"
            : "text-[#360B62]"
        } py-[7px] px-[10px] font-extrabold text-[12px] uppercase`}
        style={{
          textShadow: "0 1px 4px #00000040",
        }}
      >
        {props.type === 0
          ? "Mythic"
          : props.type === 1
          ? "Uncommon"
          : props.type === 2
          ? "common"
          : "Rare"}
      </p>
    </div>
  );
};

export default Button;
