import { put } from 'redux-saga/effects'
<<<<<<< HEAD
import { jsonRpcUrl, apiHost } from 'config'
import LinkdropSDK from 'sdk/src/index'
import { ethers } from 'ethers'
=======
import { jsonRpcUrl, factory, apiHost } from 'config'
import LinkdropSDK from 'sdk/src/index'
import { ethers } from 'ethers'
import { defineNetworkName } from 'linkdrop-commons'
import LinkdropFactory from 'contracts/LinkdropFactory.json'
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

const generator = function * ({ payload }) {
  try {
    const { wallet, tokenAddress, chainId, tokenAmount, weiAmount, expirationTime, linkKey, linkdropMasterAddress, linkdropSignerSignature } = payload
    yield put({ type: 'USER.SET_LOADING', payload: { loading: true } })
    const ethersContractZeroAddress = ethers.constants.AddressZero
<<<<<<< HEAD

=======
    const networkName = defineNetworkName({ chainId })
    const provider = yield ethers.getDefaultProvider(networkName)
    const factoryContract = yield new ethers.Contract(factory, LinkdropFactory.abi, provider)
    const version = yield factoryContract.getProxyMasterCopyVersion(linkdropMasterAddress)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    const { success, txHash, error: { reason = [] } = {} } = yield LinkdropSDK.claim({
      jsonRpcUrl,
      host: apiHost,
      weiAmount: tokenAddress === ethersContractZeroAddress ? weiAmount : '0',
      tokenAddress,
      tokenAmount: tokenAddress === ethersContractZeroAddress ? '0' : tokenAmount,
      expirationTime,
      linkKey,
      linkdropMasterAddress,
      linkdropSignerSignature,
      receiverAddress: wallet,
      isApprove: false,
      chainId,
<<<<<<< HEAD
      version: 1
=======
      version: version.toNumber()
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    })

    if (success) {
      yield put({ type: 'TOKENS.SET_TRANSACTION_ID', payload: { transactionId: txHash } })
    } else {
      if (reason.length > 0) {
        if (reason[0] === 'Insufficient amount of eth') {
          yield put({ type: 'USER.SET_ERRORS', payload: { errors: ['LINK_FAILED'] } })
        }
      }
    }
    yield put({ type: 'USER.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
  }
}

export default generator

generator.selectors = {
  wallet: ({ user: { wallet } }) => wallet
}
