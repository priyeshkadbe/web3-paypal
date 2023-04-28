import Navbar from "../Navbar";
import { useAuthProvider } from "../../providers/AuthProvider";
import { useAccount,useConnect } from "wagmi";
import Unauthenticated from "../Unauthenticated";
import WalletNotFound from "../Unauthenticated/WalletNotFound";
import { useEffect, } from "react";
type props = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: props) {
  const {
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
  } = useAuthProvider();

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address,  connector, isReconnected })
      setIsConnected(true);
      if(address){
        setAddress(address);
        
      }
    },
    onDisconnect() {
      console.log('Disconnected')
      setIsConnected(false)
    },
    
  })
  const connect = useConnect({
    onError(error) {
      console.log('Error', error)
      setIsMetamaskNotInstalled(true);
    },
  })


  // useEffect(()=>{
  // },[isConnected,account])
  
	
  return (
    <>
      <Navbar
        isConnected={isConnected}
        isLoading={isLoading}
        isError={isError}
        setIsConnected={setIsConnected}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
        address={address}
        setAddress={setAddress}
        chainId={chainId}
        setChainId={setChainId}
        isMetamaskNotInstalled={isMetamaskNotInstalled}
        setIsMetamaskNotInstalled={setIsMetamaskNotInstalled}
      />
      {isConnected?children:<Unauthenticated/>}
    </>
  );
}

export default Layout;
