import { createLink, createLinkERC721 } from './utils'
<<<<<<< HEAD
=======
import { newError } from '../../scripts/src/utils'
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
const ethers = require('ethers')

export const generateLink = async ({
  jsonRpcUrl,
  chainId,
  host,
  linkdropMasterPrivateKey,
  weiAmount,
  tokenAddress,
  tokenAmount,
  expirationTime,
  version,
  isApprove
}) => {
  if (jsonRpcUrl === null || jsonRpcUrl === '') {
<<<<<<< HEAD
    throw new Error('Please provide json rpc url')
  }

  if (chainId === null || chainId === '') {
    throw new Error('Please provide chainId')
  }

  if (host === null || host === '') {
    throw new Error('Please provide host')
  }

  if (linkdropMasterPrivateKey === null || linkdropMasterPrivateKey === '') {
    throw new Error(`Please provide linkdropMaster's private key`)
  }

  if (weiAmount === null || weiAmount === '') {
    throw new Error('Please provide amount of eth to claim')
  }

  if (tokenAddress === null || tokenAddress === '') {
    throw new Error('Please provide ERC20 token address')
  }

  if (tokenAmount === null || tokenAmount === '') {
    throw new Error('Please provide amount of tokens to claim')
  }

  if (expirationTime === null || expirationTime === '') {
    throw new Error('Please provide expiration time')
  }

  if (version === null || version === '') {
    throw new Error('Please provide contract version')
=======
    throw newError('Please provide json rpc url')
  }

  if (chainId === null || chainId === '') {
    throw newError('Please provide chainId')
  }

  if (host === null || host === '') {
    throw newError('Please provide host')
  }

  if (linkdropMasterPrivateKey === null || linkdropMasterPrivateKey === '') {
    throw newError(`Please provide linkdropMaster's private key`)
  }

  if (weiAmount === null || weiAmount === '') {
    throw newError('Please provide amount of eth to claim')
  }

  if (tokenAddress === null || tokenAddress === '') {
    throw newError('Please provide ERC20 token address')
  }

  if (tokenAmount === null || tokenAmount === '') {
    throw newError('Please provide amount of tokens to claim')
  }

  if (expirationTime === null || expirationTime === '') {
    throw newError('Please provide expiration time')
  }

  if (version === null || version === '') {
    throw newError('Please provide contract version')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }

  if (isApprove) {
    if (String(isApprove) !== 'true' && String(isApprove) !== 'false') {
<<<<<<< HEAD
      throw new Error('Please provide valid isApprove argument')
=======
      throw newError('Please provide valid isApprove argument')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    }
  }

  const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl)
  const linkdropMaster = new ethers.Wallet(linkdropMasterPrivateKey, provider)
  const { linkKey, linkId, linkdropSignerSignature } = await createLink({
    linkdropSigner: linkdropMaster,
    weiAmount,
    tokenAddress,
    tokenAmount,
    expirationTime,
    version,
    chainId
  })

  // Construct link
  let url = `${host}/#/receive?weiAmount=${weiAmount}&tokenAddress=${tokenAddress}&tokenAmount=${tokenAmount}&expirationTime=${expirationTime}&version=${version}&chainId=${chainId}&&linkKey=${linkKey}&linkdropMasterAddress=${
    linkdropMaster.address
  }&linkdropSignerSignature=${linkdropSignerSignature}`

  // Add isApprove param to url
  if (String(isApprove) === 'true') {
    url = `${url}&isApprove=${isApprove}`
  }

  return { url, linkId, linkKey, linkdropSignerSignature }
}

export const generateLinkERC721 = async ({
  jsonRpcUrl,
  chainId,
  host,
  linkdropMasterPrivateKey,
  weiAmount,
  nftAddress,
  tokenId,
  expirationTime,
  version,
  isApprove
}) => {
  if (jsonRpcUrl === null || jsonRpcUrl === '') {
<<<<<<< HEAD
    throw new Error('Please provide json rpc url')
  }

  if (chainId === null || chainId === '') {
    throw new Error('Please provide chain id')
  }

  if (host === null || host === '') {
    throw new Error('Please provide host')
  }

  if (linkdropMasterPrivateKey === null || linkdropMasterPrivateKey === '') {
    throw new Error(`Please provide linkdropMaster's private key`)
  }

  if (weiAmount === null || weiAmount === '') {
    throw new Error('Please provide amount of eth to claim')
=======
    throw newError('Please provide json rpc url')
  }

  if (chainId === null || chainId === '') {
    throw newError('Please provide chain id')
  }

  if (host === null || host === '') {
    throw newError('Please provide host')
  }

  if (linkdropMasterPrivateKey === null || linkdropMasterPrivateKey === '') {
    throw newError(`Please provide linkdropMaster's private key`)
  }

  if (weiAmount === null || weiAmount === '') {
    throw newError('Please provide amount of eth to claim')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }

  if (
    nftAddress === null ||
    nftAddress === '' ||
    nftAddress === ethers.constants.AddressZero
  ) {
<<<<<<< HEAD
    throw new Error('Please provide ERC721 token address')
  }

  if (tokenId === null || tokenId === '') {
    throw new Error('Please provide token id to claim')
  }

  if (expirationTime === null || expirationTime === '') {
    throw new Error('Please provide expiration time')
  }

  if (version === null || version === '') {
    throw new Error('Please provide contract version')
=======
    throw newError('Please provide ERC721 token address')
  }

  if (tokenId === null || tokenId === '') {
    throw newError('Please provide token id to claim')
  }

  if (expirationTime === null || expirationTime === '') {
    throw newError('Please provide expiration time')
  }

  if (version === null || version === '') {
    throw newError('Please provide contract version')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }

  if (isApprove) {
    if (String(isApprove) !== 'true' && String(isApprove) !== 'false') {
<<<<<<< HEAD
      throw new Error('Please provide valid isApprove argument')
=======
      throw newError('Please provide valid isApprove argument')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    }
  }

  const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl)
  const linkdropMaster = new ethers.Wallet(linkdropMasterPrivateKey, provider)

  const { linkKey, linkId, linkdropSignerSignature } = await createLinkERC721({
    linkdropSigner: linkdropMaster,
    weiAmount,
    nftAddress,
    tokenId,
    expirationTime,
    version,
    chainId
  })

  // Construct link
  let url = `${host}/#/receive?weiAmount=${weiAmount}&nftAddress=${nftAddress}&tokenId=${tokenId}&expirationTime=${expirationTime}&version=${version}&chainId=${chainId}&linkKey=${linkKey}&linkdropMasterAddress=${
    linkdropMaster.address
  }&linkdropSignerSignature=${linkdropSignerSignature}`

  // Add isApprove param to url
  if (String(isApprove) === 'true') {
    url = `${url}&isApprove=${isApprove}`
  }

  return { url, linkId, linkKey, linkdropSignerSignature }
}
