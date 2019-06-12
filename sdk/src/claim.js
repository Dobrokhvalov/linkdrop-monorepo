import { signReceiverAddress } from './utils'
<<<<<<< HEAD
const ethers = require('ethers')
const axios = require('axios')

=======
import { newError } from '../../scripts/src/utils'
import ora from 'ora'
import { terminal as term } from 'terminal-kit'
const ethers = require('ethers')
const axios = require('axios')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
export const claim = async ({
  jsonRpcUrl,
  host,
  weiAmount,
  tokenAddress,
  tokenAmount,
  expirationTime,
  version,
  chainId,
  linkKey,
  linkdropMasterAddress,
  linkdropSignerSignature,
  receiverAddress,
  isApprove
}) => {
  if (jsonRpcUrl === null || jsonRpcUrl === '') {
<<<<<<< HEAD
    throw new Error('Please provide json rpc url')
  }

  if (host === null || host === '') {
    throw new Error('Please provide host')
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
    throw new Error('Please provide mastercopy version ')
  }

  if (chainId === null || chainId === '') {
    throw new Error('Please provide chain id')
  }

  if (linkKey === null || linkKey === '') {
    throw new Error('Please provide link key')
  }

  if (linkdropMasterAddress === null || linkdropMasterAddress === '') {
    throw new Error('Please provide linkdropMaster address')
  }

  if (linkdropSignerSignature === null || linkdropSignerSignature === '') {
    throw new Error('Please provide linkdropMaster signature')
  }

  if (receiverAddress === null || receiverAddress === '') {
    throw new Error('Please provide receiver address')
=======
    throw newError('Please provide json rpc url')
  }

  if (host === null || host === '') {
    throw newError('Please provide host')
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
    throw newError('Please provide mastercopy version ')
  }

  if (chainId === null || chainId === '') {
    throw newError('Please provide chain id')
  }

  if (linkKey === null || linkKey === '') {
    throw newError('Please provide link key')
  }

  if (linkdropMasterAddress === null || linkdropMasterAddress === '') {
    throw newError('Please provide linkdropMaster address')
  }

  if (linkdropSignerSignature === null || linkdropSignerSignature === '') {
    throw newError('Please provide linkdropMaster signature')
  }

  if (receiverAddress === null || receiverAddress === '') {
    throw newError('Please provide receiver address')
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

  // Get provider
  const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl)

  // Get receiver signature
  const receiverSignature = await signReceiverAddress(linkKey, receiverAddress)

  // Get linkId from linkKey
  const linkId = new ethers.Wallet(linkKey, provider).address

  const claimParams = {
    weiAmount,
    tokenAddress,
    tokenAmount,
    expirationTime,
    version,
    chainId,
    linkId,
    linkdropMasterAddress,
    linkdropSignerSignature,
    receiverAddress,
    receiverSignature,
    isApprove
  }
  try {
    const response = await axios.post(
      `${host}/api/v1/linkdrops/claim`,
      claimParams
    )
<<<<<<< HEAD
    if (response.status !== 200) {
      console.error(`\n❌ Invalid response status ${response.status}`)
    } else {
      if (response.data.success === true) {
        console.log(
          '\n✅  Claim tx has been submitted. Please verify the claim status manually.'
        )
        const { success, txHash } = response.data
        console.log(`#️⃣  Tx Hash: ${txHash}`)
        return { success, txHash }
      } else {
        const { success, error } = response.data
        if (error.reason) {
          console.error(`🆘  Request failed with '${error.reason}'`)
        } else console.error(error)
        return { success, error }
      }
    }
  } catch (err) {
    console.error(err)
=======

    if (response.status !== 200) {
      throw newError(
        term.red.bold.str(`Invalid response status ${response.status}`)
      )
    } else {
      const { error, success, txHash } = response.data
      return { error, success, txHash }
    }
  } catch (err) {
    throw newError(err)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }
}

export const claimERC721 = async ({
  jsonRpcUrl,
  host,
  weiAmount,
  nftAddress,
  tokenId,
  expirationTime,
  version,
  chainId,
  linkKey,
  linkdropMasterAddress,
  linkdropSignerSignature,
  receiverAddress,
  isApprove
}) => {
  if (jsonRpcUrl === null || jsonRpcUrl === '') {
<<<<<<< HEAD
    throw new Error('Please provide json rpc url')
  }

  if (host === null || host === '') {
    throw new Error('Please provide host')
  }

  if (weiAmount === null || weiAmount === '') {
    throw new Error('Please provide amount of eth to claim')
=======
    throw newError('Please provide json rpc url')
  }

  if (host === null || host === '') {
    throw newError('Please provide host')
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
    throw new Error('Please provide mastercopy version ')
  }

  if (chainId === null || chainId === '') {
    throw new Error('Please provide chain id')
  }

  if (linkKey === null || linkKey === '') {
    throw new Error('Please provide link key')
  }

  if (linkdropMasterAddress === null || linkdropMasterAddress === '') {
    throw new Error('Please provide linkdropMaster address')
  }

  if (linkdropSignerSignature === null || linkdropSignerSignature === '') {
    throw new Error('Please provide linkdropMaster signature')
  }

  if (receiverAddress === null || receiverAddress === '') {
    throw new Error('Please provide receiver address')
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
    throw newError('Please provide mastercopy version ')
  }

  if (chainId === null || chainId === '') {
    throw newError('Please provide chain id')
  }

  if (linkKey === null || linkKey === '') {
    throw newError('Please provide link key')
  }

  if (linkdropMasterAddress === null || linkdropMasterAddress === '') {
    throw newError('Please provide linkdropMaster address')
  }

  if (linkdropSignerSignature === null || linkdropSignerSignature === '') {
    throw newError('Please provide linkdropMaster signature')
  }

  if (receiverAddress === null || receiverAddress === '') {
    throw newError('Please provide receiver address')
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

  // Get provider
  const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl)

  // Get receiver signature
  const receiverSignature = await signReceiverAddress(linkKey, receiverAddress)

  // Get linkId from linkKey
  const linkId = new ethers.Wallet(linkKey, provider).address

  const claimParams = {
    weiAmount,
    nftAddress,
    tokenId,
    expirationTime,
    version,
    chainId,
    linkId,
    linkdropMasterAddress,
    linkdropSignerSignature,
    receiverAddress,
    receiverSignature,
    isApprove
  }
  try {
    const response = await axios.post(
      `${host}/api/v1/linkdrops/claim-erc721`,
      claimParams
    )
    if (response.status !== 200) {
<<<<<<< HEAD
      console.error(`\n❌ Invalid response status ${response.status}`)
    } else {
      if (response.data.success === true) {
        console.log(
          '\n✅  Claim tx has been submitted. Please verify the claim status manually.'
        )
        const { success, txHash } = response.data
        console.log(`#️⃣  Tx Hash: ${txHash}`)
        return { success, txHash }
      } else {
        const { success, error } = response.data
        if (error.reason) {
          console.error(`🆘  Request failed with '${error.reason}'`)
        } else console.error(error)
        return { success, error }
      }
    }
  } catch (err) {
    console.error(err)
=======
      throw newError(`Invalid response status ${response.status}`)
    } else {
      const { error, success, txHash } = response.data
      return { error, success, txHash }
    }
  } catch (err) {
    throw newError(err)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }
}
