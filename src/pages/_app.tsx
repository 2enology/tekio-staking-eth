import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, goerli, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { useRouter } from "next/router";
import Head from "next/head";
import ImgBackground from "../components/imgBackground";
import { ModalProvider } from "../contexts/ModalContext";
import ProgressBar from "../components/progressBar";
import { Layout } from "../components/Layout/layout";
import GetNFTDataProvider from "../contexts/NFTDataContext";
import { ToastContainer } from "react-toastify";
import { PROJECT_ID } from "../config";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    goerli,
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = PROJECT_ID;

const { wallets } = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Rainbowkit Demo",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter() as { locale: Locale };
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        locale={locale}
        modalSize="compact"
        theme={darkTheme()}
        coolMode
      >
        <ToastContainer style={{ fontSize: 14 }} />
        <GetNFTDataProvider>
          <ModalProvider>
            <Head>
              <link rel="icon" type="image/x-icon" href="/imgs/logo.png" />
              <title>TEKIO STAKING</title>
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ImgBackground />
            <ProgressBar />
          </ModalProvider>
        </GetNFTDataProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
