# IPFS-CloudStorage-Descentralized 🗃️☁️

This project provides the user with the ability to store an IPFS Hash and store the corresponding CID in a blockchain network. In the example provided, the Polygon Mumbai Testnet was used, but any other network can be selected by modifying a few lines of code. In addition, the repository includes an interface that allows files to be selected and stored in Web3.Storage is a decentralized, distributed network that provides a reliable and censorship-resistant storage system.By using Web3.Storage, files are distributed across multiple nodes in the network, increasing redundancy and data availability.This combination of IPFS and a blockchain network provides a robust solution for secure, decentralized file storage and management. IPFS hashes ensure file integrity, while CIDs stored on the blockchain enable verification and tracking of files over time.


## Setting Up
---
## 1. Clone the repository

## 2. Install dependencies

```bash
$ cd IPFS-CloudStorage-Descentralized
$ npm install --save-dev hardhat
```
## 3. Change variables in Files
```bash
# hardhat.config.js
$ ALCHEMY_API_KEY
$ privateKey
# api/uploadData.js Create account in Web3.Storage for obtained api key for a token
$ const token = "eyJhbGciOiJIUzI1NiIsInR5cC"
# pages/constant.js
$ ALCHEMY_API_URL
$ PRIVATE_KEY
$ contractAddress
```
## 4. Deployment Solidity Contract Addresses
```bash
$ npx hardhat clean
$ npx hardhat compile
```
``` bash
$ npx hardhat run scripts/deploy.js --network mumbai
```
<a href="https://imgur.com/aVaFb5e"><img src="https://i.imgur.com/aVaFb5e.gif" title="source: imgur.com" /></a>

``` bash

#After deploying the IPFSCloud.sol replace this address in src/constant.js file with the variable:

export const contractAddress ="0x74789Ec821B1a0f6342d201C533dA8d2efd19D6D";

```

## 5. Localhost Deployment

``` bash

npm install 

npm run dev 

http://localhost:3000/

```
<a href="https://imgur.com/RXIXC8V"><img src="https://i.imgur.com/RXIXC8V.gif" title="source: imgur.com" /></a>

























