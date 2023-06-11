require('@nomicfoundation/hardhat-toolbox');

const privateKey = "wallet metamask privatekey"; // my wallet private key polygon mumbai testnework
//  alchemy polygone mumbai testnet api key
const ALCHEMY_API_KEY = "APIKEY"; //Alchemy apikey

module.exports = {
  solidity: '0.8.17',
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [privateKey],
    },
  },
};
