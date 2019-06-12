import { put } from 'redux-saga/effects'
<<<<<<< HEAD
import { jsonRpcUrl, apiHost } from 'config'
import LinkdropSDK from 'sdk/src/index'
=======
import { jsonRpcUrl, apiHost, factory } from 'config'
import LinkdropSDK from 'sdk/src/index'
import { ethers } from 'ethers'
import { defineNetworkName } from 'linkdrop-commons'
import LinkdropFactory from 'contracts/LinkdropFactory.json'
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

const generator = function * ({ payload }) {
  try {
    const { wallet, nftAddress, tokenId, weiAmount, expirationTime, chainId, linkKey, linkdropMasterAddress, linkdropSignerSignature } = payload
    yield put({ type: 'USER.SET_LOADING', payload: { loading: true } })
<<<<<<< HEAD
=======
    const networkName = defineNetworkName({ chainId })
    const provider = yield ethers.getDefaultProvider(networkName)
    const factoryContract = yield new ethers.Contract(factory, LinkdropFactory.abi, provider)
    const version = yield factoryContract.getProxyMasterCopyVersion(linkdropMasterAddress)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    const { success, txHash, error } = yield LinkdropSDK.claimERC721({
      jsonRpcUrl,
      host: apiHost,
      weiAmount,
      nftAddress,
      tokenId,
      expirationTime,
      linkKey,
      linkdropMasterAddress,
      linkdropSignerSignature,
      chainId,
      receiverAddress: wallet,
      isApprove: false,
<<<<<<< HEAD
      version: 1
=======
      version: version.toNumber()
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    })

    if (success) {
      yield put({ type: 'TOKENS.SET_TRANSACTION_ID', payload: { transactionId: txHash } })
    } else {
      console.error({ error })
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
