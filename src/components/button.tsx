const Button = (props: { type: number }) => {
  const getBackgroundColor = (type: number) => {
    switch (type) {
      case 0:
        return "bg-[#EA6F75]";
      case 1:
        return "bg-[#61BAF3]";
      case 2:
        return "bg-[#D2D2D2]";
      default:
        return "bg-[#C591F2]";
    }
  };

  const getBoxShadow = (type: number) => {
    switch (type) {
      case 0:
        return {
          boxShadow:
            "0 0 6px #cc434a, inset 0px 9px 9px 0px #ffffff8c, inset 0 -5px 4px 0px #c03c44",
        };
      case 1:
        return {
          boxShadow:
            "0 0 6px #2A88C1, inset 0px 9px 9px 0px #ffffffb3, inset 0 -5px 4px 0px #1677BA",
        };
      case 2:
        return {
          boxShadow:
            "inset 0px 4px 4px 0px #ffffff, inset 0 -5px 4px 0px #0000004d",
        };
      default:
        return {
          boxShadow:
            "0 0 6px #8A28ED, inset 0px 9px 9px 0px #ffffffb3, inset 0 -5px 4px 0px #9A49E7",
        };
    }
  };

  const getTextColor = (type: number) => {
    switch (type) {
      case 0:
        return "text-[#871118]";
      case 1:
        return "text-[#0B47AD]";
      case 2:
        return "text-[#000000]";
      default:
        return "text-[#360B62]";
    }
  };

  const getText = (type: number) => {
    switch (type) {
      case 0:
        return "Mythic";
      case 1:
        return "Uncommon";
      case 2:
        return "Common";
      default:
        return "Rare";
    }
  };

  return (
    <div
      className={`nftButton rounded-md ${getBackgroundColor(
        props.type
      )} cursor-pointer`}
      style={getBoxShadow(props.type)}
    >
      <p
        className={`${getTextColor(
          props.type
        )} py-[7px] px-[10px] font-extrabold text-[12px] uppercase`}
        style={{ textShadow: "0 1px 4px #00000040" }}
      >
        {getText(props.type)}
      </p>
    </div>
  );
};

export default Button;
