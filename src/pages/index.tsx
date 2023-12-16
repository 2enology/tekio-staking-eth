import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import WalletConnectBtn from "../components/walletConnectButton";
import Header from "../components/header";
import Background from "../components/background";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="w-full max-w-[1000px] flex mt-[172px] items-center justify-center p-3 relative">
        <WalletConnectBtn />
      </div>
      <Background />
    </div>
  );
};

export default Home;
