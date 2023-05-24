import {WalletProvider, SuiMainnetChain, SuiDevnetChain, SuiTestnetChain, SuietWallet, EthosWallet, SuiWallet} from '@suiet/wallet-kit'
import '@suiet/wallet-kit/style.css'

import { ProgramProvider } from './utils/ProgramProvider';
import Header from './components/header';
import MintPage from './pages/mint';
import './assets/styles.scss'

function App() {
  return (
    <WalletProvider chains={[SuiTestnetChain]} defaultWallets={[
      SuietWallet,
          EthosWallet,
          SuiWallet
        ]}>
      <ProgramProvider>
        <Header/>
        <MintPage/>
      </ProgramProvider>
    </WalletProvider>
  );
}

export default App;