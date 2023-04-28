import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import {
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { AuthProvider } from "../providers/AuthProvider";
import { useRouter } from "next/router";

const { chains, provider } = configureChains(
  [goerli, polygonMumbai, optimismGoerli, arbitrumGoerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY || "" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My Alchemy DApp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { WagmiConfig, RainbowKitProvider };

interface AppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const account = useAccount({
    // onConnect({ address, connector, isReconnected }) {
    //   if (!isReconnected) router.reload();
    // },
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        initialChain={parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN || "")}
        chains={chains}
      >
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
