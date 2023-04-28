import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

interface Props {
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isError: boolean;
  setIsError: (value: boolean) => void;
  address: string;
  setAddress: (value: string) => void;
  chainId: number;
  setChainId: (value: number) => void;
  isMetamaskNotInstalled: boolean;
  setIsMetamaskNotInstalled: (value: boolean) => void;
}

function Navbar({
  isConnected,
  setIsConnected,
  isLoading,
  setIsLoading,
  isError,
  setIsError,
  address,
  setAddress,
  chainId,
  setChainId,
  isMetamaskNotInstalled,
  setIsMetamaskNotInstalled,
}: Props) {
  return (
    <div className="w-full bg-[#1D2233] h-20 md:h-24">
      <div className="flex mx-auto justify-between items-center  p-6 md:w-2/3">
        <h1 className="text-xl md:text-3xl text-gray-100">Web3-Paypal</h1>
        <div className="flex gap-x-4 justify-center items-center">
          <h1 className="text-xl text-gray-500 hidden md:flex"> </h1>
          <ConnectButton chainStatus="icon" showBalance={false} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
