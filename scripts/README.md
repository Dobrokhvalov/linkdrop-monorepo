# Scripts

## Short description

Scripts for setting up, deploying, generating links and claiming linkdrops

## Dislaimer

**Scripts should be run within root directory of monorepo**

**Always make sure to restart the server after deploying any new contract**

## Configure

<<<<<<< HEAD
Config file should be located in config folder within root directory
Make sure to copy and fill config params from config.json.sample
=======
Config file should be located at `configs/scripts.config.json` within root directory
Make sure to copy and fill config params from scripts.config.json.sample
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

## General setup

Before running any of the commands below, make sure to have contract artifacts in `contracts/build` directory by running:

```bash
yarn compile-contracts
```

<<<<<<< HEAD
Following steps require the next params to be present in config.json: `jsonRpcUrl, senderPrivateKey`
=======
Following steps require the next params to be present in scripts.config.json: `jsonRpcUrl, senderPrivateKey`
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
Before generating linkdrops you have to deploy mastercopy and factory contracts:

### Deploy mastercopy

```bash
yarn deploy-mastercopy
```
<<<<<<< HEAD
This will deploy mastercopy contract and update config.json

### Deploy factory

Before deploying the factory contract make sure mastercopy address is present in config.json
=======
This will deploy mastercopy contract and update all neccessary config files

### Deploy factory

Before deploying the factory contract make sure mastercopy address is present in scripts.config.json
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

```bash
yarn deploy-factory
```
<<<<<<< HEAD
This will deploy a factory contract and update config.json


## Generate links and claim ETH
In addition to general setup params from above step, this step requires the following params to be present in config.json: `host, networkId, amount, linksNumber, receiverAddress`

To test ETH linkdrop, you need to:

0. Configure amount of wei to send per link in config.json
=======
This will deploy a factory contract and update all neccessary config files



## Generate links and claim ETH
In addition to general setup params from above step, this step requires the following params to be present in scripts.config.json: `host, networkId, amount, linksNumber, receiverAddress`

To test ETH linkdrop, you need to:

0. Configure amount of wei to send per link in scripts.config.json
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

1. Generate links. During link generation, ETH needed for claim will be sent to the proxy address
```bash
yarn generate-links-eth
```
This will generate `linksNumber` links and update `scripts/output/linkdrop_eth.csv`

2. Claim ETH

With the running server `yarn server`, run the following command: 

```bash
yarn claim-eth
```

## Generate links and claim ERC20 tokens
<<<<<<< HEAD
In addition to general setup params, this step requires the following params to be present in config.json: `host, networkId, token, amount, linksNumber, receiverAddress`

To test ERC20 linkdrop, you need to:

0. Configure ERC20 token address and amount (in atomic value) of tokens to send per link in config.json
=======
In addition to general setup params, this step requires the following params to be present in scripts.config.json: `host, networkId, token, amount, linksNumber, receiverAddress`

To test ERC20 linkdrop, you need to:

0. Configure ERC20 token address and amount (in atomic value) of tokens to send per link in scripts.config.json
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
If you don't have any ERC20 tokens owned by sender who `senderPrivateKey` belongs to, you can deploy a new one by running:
```bash
yarn deploy-erc20
```
<<<<<<< HEAD
This will deploy mock ERC20 token contract, mint 10^6 mock tokens to deployer and update config.json
=======
This will deploy mock ERC20 token contract, mint 10^6 mock tokens to deployer and update scripts.config.json
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

1. Generate links. During link generation, tokens needed for claim will be transfered to the proxy address
```bash
yarn generate-links-erc20
```
This will generate `linksNumber` links and update `scripts/output/linkdrop_erc20.csv`

2. Claim tokens

With the running server `yarn server`, run the following command: 

```bash
yarn claim-erc20
```

## Generate links and claim ERC721 tokens
<<<<<<< HEAD
In addition to general setup params, this step requires the following params to be present in config.json: `host, networkId, nft, tokenIds, receiverAddress`

To test ERC721 linkdrop, you need to:

0. Configure ERC721 token address and tokenIds (array) to send per link in config.json
=======
In addition to general setup params, this step requires the following params to be present in scripts.config.json: `host, networkId, nft, tokenIds, receiverAddress`

To test ERC721 linkdrop, you need to:

0. Configure ERC721 token address and tokenIds (array) to send per link in scripts.config.json
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
If you don't have any ERC721 tokens owned by sender who `senderPrivateKey` belongs to, you can deploy a new one by running:
```bash
yarn deploy-erc721
```
<<<<<<< HEAD
This will deploy mock ERC721 NFT contract, mint 10 mock NFTs to deployer and update config.json
=======
This will deploy mock ERC721 NFT contract, mint 10 mock NFTs to deployer and update scripts.config.json
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

1. Generate links. During link generation, NFTs with `tokenIds` will be transfered to the proxy address
```bash
yarn generate-links-erc721
```
This will generate links and update `scripts/output/linkdrop_erc721.csv`

2. Claim NFT

With the running server `yarn server`, run the following command: 

```bash
yarn claim-erc721
```

## Run server

```bash
yarn server
```
