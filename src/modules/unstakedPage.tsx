import { StakedNFTDatas, WalletNFTDatas } from "../components/DataTypes";
import NftCard from "../components/nftCard";

type pageProps = {
  data: StakedNFTDatas[];
  data4Func: WalletNFTDatas[];
  handleAddData: (data: any) => void;
};
const UnStakedPage: React.FC<pageProps> = ({
  data,
  data4Func,
  handleAddData,
}) => {
  return (
    <div className="w-full max-w-[1446px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
      {data?.map((data, index) => (
        <NftCard
          key={index}
          type={data.isSpecial}
          tokenId={data.tokenId}
          imgUrl={data.imgUrl}
          isSelected={
            data4Func && data4Func.find((item) => item.tokenId === data.tokenId)
              ? true
              : false
          }
          onClick={() => handleAddData(data)}
        />
      ))}
    </div>
  );
};

export default UnStakedPage;
