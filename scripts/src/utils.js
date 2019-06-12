<<<<<<< HEAD
const path = require('path')
const configPath = path.resolve(__dirname, '../../config/scripts.config.json')
const config = require(configPath)
let { masterCopy, factory, chainId } = config

export const getMasterCopyAddress = () => {
  if (masterCopy == null || masterCopy === '') {
    throw 'Please provide linkdrop master copy address'
  }
  return masterCopy
}

export const getFactoryAddress = () => {
  if (factory == null || factory === '') {
    throw 'Please provide factory contract address'
  }
  return factory
}

export const getChainId = () => {
  if (chainId == null || chainId === '') {
    throw 'Please provide chain id'
  }
  return chainId
}

export const getInitcode = () => {
  return '0x6352c7420d6000526103ff60206004601c335afa6040516060f3'
}
=======
import { terminal as term } from 'terminal-kit'
import { ethers } from 'ethers'
const config = require('../../configs').get('scripts')

export const newError = message => {
  const error = new Error(term.red.bold.str(message))
  return error
}

export const getString = key => {
  if (key == null || key === '') {
    throw newError(`Please provide ${key}`)
  }

  return config[key]
}

export const getBool = key => {
  if (key == null || key === '') {
    throw newError(`Please provide ${key}`)
  }

  if (String(config[key]) !== 'true' && String(config[key]) !== 'false') {
    throw newError(`Please provide valid ${key} argument`)
  }

  return config[key]
}

export const getInt = key => {
  if (key == null || key === '') {
    throw newError(`Please provide ${key}`)
  }
  const intNumber = parseInt(config[key])
  if (!intNumber) throw newError(`Please provide valid ${key}`)
  return intNumber
}

export const getProvider = () => {
  const JSON_RPC_URL = getString('jsonRpcUrl')
  const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_URL)
  return provider
}

export const getLinkdropMasterWallet = () => {
  const LINKDROP_MASTER_PRIVATE_KEY = getString('linkdropMasterPrivateKey')
  const provider = getProvider()

  const linkdropMasterWallet = new ethers.Wallet(
    LINKDROP_MASTER_PRIVATE_KEY,
    provider
  )
  return linkdropMasterWallet
}

export const getInitCode = () => {
  return '0x6352c7420d6000526103ff60206004601c335afa6040516060f3'
}

export const getExpirationTime = () => {
  return 12345678910
}

// const JSON_RPC_URL = getString('jsonRpcUrl')
// const HOST = getString('host')
// const LINKDROP_MASTER_PRIVATE_KEY = getString('linkdropMasterPrivateKey')
// const LINKDROP_FACTORY_ADDRESS = getString('factory')
// const WEI_AMOUNT = getInt('weiAmount')
// const LINKS_NUMBER = getInt('linksNumber')
// const LINKDROP_MASTER_COPY_VERSION = getInt('version')
// const LINKDROP_MASTER_COPY_ADDRESS = getString('masterCopy')
// const CHAIN_ID = getInt('chainId')
// const EXPIRATION_TIME = getExpirationTime()
// const IS_APPROVE = getBool('isApprove')
// const TOKEN_ADDRESS = getString('tokenAddress')
// const TOKEN_AMOUNT = getInt('tokenAmount')
// const NFT_ADDRESS = getString('nftAddress')
// const NFT_IDS = getString('nftIds')
// const PROVIDER = getProvider()
// const LINKDROP_MASTER_WALLET = getLinkdropMasterWallet()
// const INIT_CODE = getInitCode()
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
