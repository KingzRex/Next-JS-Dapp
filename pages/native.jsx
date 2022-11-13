import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

function Native({ nativeBalance, address }) {
    return <div>
        <h3> Wallet: {address}</h3>
        <h3> Balance: {nativeBalance}</h3>
    </div>;
}

export async function getServerSideProps(context) {

    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
    const address = '0x675951c3ECe300707A075d2f2714783284897E0A';
    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.BSC,
        address,
    });
    return {
      props: {
        address,
        nativeBalance: nativeBalance.result.balance.ether
      }, // will be passed to the page component as props
    };
  } 

export default Native
