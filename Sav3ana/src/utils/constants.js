import {Image} from 'react-native';
// Blockchain
import SOL from '../assets/logos/soon.png';
import P from '../assets/logos/$P.png';
// TradFi
import USD from '../assets/logos/usd.png';
import EUR from '../assets/logos/eur.png';
import MXN from '../assets/logos/mxn.png';

const w = 50;
const h = 50;

export const refreshTime = 1000 * 60 * 1;

export const basePublicKey = '11111111111111111111111111111111';

export const iconsBlockchain = {
  sol: <Image source={SOL} style={{width: w, height: h, borderRadius: 10}} />,
  p: <Image source={P} style={{width: w, height: h, borderRadius: 10}} />,
};

export const iconsTradFi = {
  usd: <Image source={USD} style={{width: w, height: h, borderRadius: 10}} />,
  eur: <Image source={EUR} style={{width: w, height: h, borderRadius: 10}} />,
  mxn: <Image source={MXN} style={{width: w, height: h, borderRadius: 10}} />,
}

// Devnet
export const blockchain = {
  network: 'SOON',
  token: 'SOL',
  blockExplorer: 'https://explorer.devnet.soo.network/',
  rpc: 'https://rpc.devnet.soo.network/rpc',
  cluster: 'devnet', // mainnet SOON...
  iconSymbol: 'sol',
  decimals: 9,
  tokens: [
    // Updated 05/MAY/2024
    {
      name: 'Solana',
      symbol: 'SOL',
      address: 'So11111111111111111111111111111111111111112',
      decimals: 9,
      icon: iconsBlockchain.sol,
      coingecko: 'solana',
    },
    {
      name: '$P',
      symbol: '$P',
      address: '6sRQN8MvjSagGhnJG6eK8FcEq9nwuF1nbBHbx5zGQsBo',
      decimals: 9,
      icon: iconsBlockchain.p,
      coingecko: 'usd-coin',
    },
  ],
  currencies: [
    {
      name: 'US Dollar',
      symbol: 'USD',
      address: 'none',
      decimals: 2,
      icon: iconsTradFi.usd,
      coingecko: 'usd-coin',
    },
    {
      name: 'Euro',
      symbol: 'EUR',
      address: 'none',
      decimals: 2,
      icon: iconsTradFi.eur,
      coingecko: 'tether-eurt',
    },
    {
      name: 'Mexican Peso',
      symbol: 'MXN',
      address: 'none',
      decimals: 2,
      icon: iconsTradFi.mxn,
      coingecko: 'mexican-peso-tether',
    },
  ],
};


export const CloudAccountController =
  '8MwdDuw66kKisAVmh6RjiP8QDMckUkM71fSGCC6c8vCH';

export const SoonCardProgramID =
  'FPc4TkPFx8hjYpnFGg4hTRVJf2CNkKNf8R2aYehybNvX';

export const CloudPublicKeyEncryption = `
-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAtflt9yF4G1bPqTHtOch47UW9hkSi4u2EZDHYLLSKhGMwvHjajTM+
wcgxV8dlaTh1av/2dWb1EE3UMK0KF3CB3TZ4t/p+aQGhyfsGtBbXZuwZAd8CotTn
BLRckt6s3jPqDNR3XR9KbfXzFObNafXYzP9vCGQPdJQzuTSdx5mWcPpK147QfQbR
K0gmiDABYJMMUos8qaiKVQmSAwyg6Lce8x+mWvFAZD0PvaTNwYqcY6maIztT6h/W
mfQHzt9Z0nwQ7gv31KCw0Tlh7n7rMnDbr70+QVd8e3qMEgDYnx7Jm4BzHjr56IvC
g5atj1oLBlgH6N/9aUIlP5gkw89O3hYJ0QIDAQAB
-----END RSA PUBLIC KEY-----
`;

/*
  Debit = 0
  Credit = 1
*/

/*
  VISA = 0
  MASTERCARD = 1
  AMERICAN_EXPRESS = 2
*/

export const cardMemorySchema = {
  struct: {
    owner: {array: {type: 'u8', len: 32}},
    nfc: 'bool', // Activate or Deactivate
    types: 'bool', // Physical or Virtual
    kind: 'u8', // Debit, Credit, etc
    brand: 'u8', // VISA, MASTERCARD, etc
  },
};

export const transactionPayloadSchema = {
  struct: {
    instruction: 'u8',
    bump: 'u8',
    space: 'u8',
    ...cardMemorySchema.struct,
  },
};

export const paymentPayloadSchema = {
  struct: {
    instruction: 'u8',
    bump: 'u8',
    owner: {array: {type: 'u8', len: 32}},
    amount: 'u64',
    concept: 'string',
  },
};

export const ProgramInstruction = {
  CreateCard: 0,
  ChangeInfo: 1,
  Purchase: 2,
  PurchaseToken: 3,
};
