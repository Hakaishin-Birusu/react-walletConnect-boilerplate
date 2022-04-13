import Metamask from '../assets/walletIcon/metamask.png';
import Walletconnect from '../assets/walletIcon/walletconnect.png';

export const SUPPORTED_WALLETS = {
  METAMASK: {
    connector: 'injected',
    name: 'MetaMask',
    iconName: Metamask,
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  WALLET_CONNECT: {
    connector: 'walletconnect',
    name: 'WalletConnect',
    iconName: Walletconnect,
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
  },
};
