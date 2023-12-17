import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import WalletConnectBtn from "../components/walletConnectButton";
import Header from "../components/header";
import Background from "../components/background";
import Detail from "../components/Detail";
import Tokenomics from "../components/Tokenomics";
import RoadMap from "../components/Roadmap";
import Footer from "../components/footer";
import ImgBackground from "../components/imgBackground";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="w-full max-w-[1000px] flex mt-[172px] items-center justify-center p-3 relative flex-col">
        <WalletConnectBtn />
        <Detail />
        <Tokenomics />
        <RoadMap />
      </div>
      <Footer />
      {/* <Background /> */}
      <ImgBackground />
    </div>
  );
};

export default Home;
