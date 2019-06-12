import LinkdropFactory from '../../contracts/build/LinkdropFactory'
import LinkdropSDK from '../../sdk/src/index'
import ClaimTx from '../models/claimTx'
import ClaimTxERC721 from '../models/claimTxERC721'
<<<<<<< HEAD

const ethers = require('ethers')
ethers.errors.setLogLevel('error')

const path = require('path')
const configPath = path.resolve(__dirname, '../../config/server.config.json')
const config = require(configPath)
const { jsonRpcUrl, factory, relayerPrivateKey } = config
=======
import { newError } from '../../scripts/src/utils'
import configs from '../../configs'
import ora from 'ora'
import { terminal as term } from 'terminal-kit'

import Table from 'cli-table'
import { ICONS } from 'jest-util/build/specialChars'
const ethers = require('ethers')
ethers.errors.setLogLevel('error')
const config = configs.get('server')

const { jsonRpcUrl, factory, relayerPrivateKey } = config

>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl)
const relayer = new ethers.Wallet(relayerPrivateKey, provider)

export const claim = async (req, res) => {
  const {
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
  } = req.body

<<<<<<< HEAD
  const claimParams = {
=======
  let body = {
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    weiAmount,
    tokenAddress,
    tokenAmount,
    expirationTime,
<<<<<<< HEAD
=======
    version,
    chainId,
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    linkId,
    linkdropMasterAddress,
    linkdropSignerSignature,
    receiverAddress,
<<<<<<< HEAD
    receiverSignature
  }

  if (!weiAmount) {
    throw new Error('Please provide amount of eth to claim')
  }

  if (!tokenAddress) {
    throw new Error('Please provide token address')
  }

  if (!tokenAmount) {
    throw new Error('Please provide amount of tokens to claim')
  }

  if (!expirationTime) {
    throw new Error('Please provide expiration time')
  }

  if (!version) {
    throw new Error('Please provide mastercopy version ')
  }

  if (!chainId) {
    throw new Error('Please provide chain id')
  }

  if (!linkId) {
    throw new Error('Please provide the link id')
  }

  if (!linkdropMasterAddress) {
    throw new Error(`Please provide linkdrop master's address`)
  }

  if (!linkdropSignerSignature) {
    throw new Error(`Please provide linkdrop signer's signature`)
  }

  if (!receiverAddress) {
    throw new Error(`Please provide receiver's address`)
  }

  if (!receiverSignature) {
    throw new Error('Please provide receiver signature')
=======
    receiverSignature,
    isApprove
  }

  // Make sure all arguments are passed
  for (let key in body) {
    if (!req.body[key]) {
      const error = `Please provide ${key} argument\n`
      term.red.bold(error)

      return res.json({
        success: false,
        error
      })
    }
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

  const proxyFactory = new ethers.Contract(
    factory,
    LinkdropFactory.abi,
    relayer
  )

  try {
    const initcode = await proxyFactory.getInitcode()

    const proxyAddress = await LinkdropSDK.computeProxyAddress(
      factory,
      linkdropMasterAddress,
      initcode
    )

    // Check whether a claim tx exists in database
    const oldClaimTx = await ClaimTx.findOne({
      weiAmount,
      tokenAddress,
      tokenAmount,
<<<<<<< HEAD
      version,
      chainId,
      linkId,
      linkdropMasterAddress
    })

    if (oldClaimTx && oldClaimTx.txHash) {
=======
      expirationTime,
      version,
      chainId,
      linkId,
      linkdropMasterAddress,
      receiverAddress
    })
    const table = new Table()
    let type

    if (oldClaimTx && oldClaimTx.txHash) {
      if (tokenAddress === ethers.constants.AddressZero) type = 'ETH'
      else {
        if (weiAmount === 0) type = 'ERC20'
        else type = 'ETH + ERC20'
      }
      table.push(['type', type])

      table.push(['txHash', oldClaimTx.toObject().txHash])

      term.green.bold(`\nSubmitted claim transaction\n`)
      term.bold(table.toString(), '\n')

>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
      return res.json({
        success: true,
        txHash: oldClaimTx.txHash
      })
    }

    try {
      let tx, txHash

      // Top up pattern
      if (!isApprove || String(isApprove) === 'false') {
        // Check claim params
        await proxyFactory.checkClaimParams(
          weiAmount,
          tokenAddress,
          tokenAmount,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          proxyAddress
        )

        // Claim
<<<<<<< HEAD
        console.log('\n🔦️  Claiming...\n', claimParams)
=======
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

        tx = await proxyFactory.claim(
          weiAmount,
          tokenAddress,
          tokenAmount,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          { gasLimit: 500000 }
        )
      } else if (isApprove && String(isApprove === 'true')) {
        // Approve pattern
        // Check claim params
        await proxyFactory.checkClaimParamsApprove(
          weiAmount,
          tokenAddress,
          tokenAmount,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          proxyAddress
        )

        // Claim
<<<<<<< HEAD
        console.log('\n🔦️  Claiming...\n', claimParams)
=======
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

        tx = await proxyFactory.claimApprove(
          weiAmount,
          tokenAddress,
          tokenAmount,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          { gasLimit: 500000 }
        )
      }

      txHash = tx.hash
<<<<<<< HEAD
      console.log(`#️⃣  Tx Hash: ${txHash}`)
=======
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

      // Save claim tx to database
      const claimTx = new ClaimTx({
        weiAmount,
        tokenAddress,
        tokenAmount,
        expirationTime,
        version,
        chainId,
        linkId,
        linkdropMasterAddress,
        receiverAddress,
        proxyAddress,
        txHash
      })

      const document = await claimTx.save()
<<<<<<< HEAD
      console.log(
        `🔋  Saved claim tx with document id = ${document.id} to database`
      )
=======

      if (tokenAddress === ethers.constants.AddressZero) type = 'ETH'
      else {
        if (weiAmount === 0) type = 'ERC20'
        else type = 'ETH + ERC20'
      }
      table.push(['type', type])

      for (let key in claimTx.toObject()) {
        if (key !== '_id' && key !== '__v') {
          table.push([key, claimTx.toObject()[key]])
        }
      }

      term.green.bold(`\nSubmitted claim transaction\n`)
      term.bold(table.toString(), '\n')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

      res.json({
        success: true,
        txHash: txHash
      })
    } catch (error) {
<<<<<<< HEAD
      if (error.reason) console.error(`📛  Failed with '${error.reason}'`)
      else console.error(error)
=======
      term.red.bold(`\n${error.reason ? error.reason : error}\n`)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

      return res.json({
        success: false,
        error: error
      })
    }
  } catch (err) {
<<<<<<< HEAD
    console.error(err)
=======
    term.red.bold(err)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }
}

export const claimERC721 = async (req, res) => {
  const {
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
  } = req.body

<<<<<<< HEAD
  const claimParams = {
=======
  let body = {
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    weiAmount,
    nftAddress,
    tokenId,
    expirationTime,
<<<<<<< HEAD
=======
    version,
    chainId,
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    linkId,
    linkdropMasterAddress,
    linkdropSignerSignature,
    receiverAddress,
<<<<<<< HEAD
    receiverSignature
  }

  if (!weiAmount) {
    throw new Error('Please provide amount of eth to claim')
  }

  if (!nftAddress) {
    throw new Error('Please provide nft address')
  }

  if (!tokenId) {
    throw new Error('Please provide token id to claim')
  }

  if (!expirationTime) {
    throw new Error('Please provide expiration time')
  }

  if (!version) {
    throw new Error('Please provide mastercopy version ')
  }

  if (!chainId) {
    throw new Error('Please provide chain id')
  }

  if (!linkId) {
    throw new Error('Please provide the link id')
  }

  if (!linkdropMasterAddress) {
    throw new Error(`Please provide linkdrop master's address`)
  }

  if (!linkdropSignerSignature) {
    throw new Error(`Please provide linkdrop signer's signature`)
  }

  if (!receiverAddress) {
    throw new Error(`Please provide receiver's address`)
  }

  if (!receiverSignature) {
    throw new Error('Please provide receiver signature')
=======
    receiverSignature,
    isApprove
  }

  // Make sure all arguments are passed
  for (let key in body) {
    if (!req.body[key]) {
      const error = `Please provide ${key} argument\n`
      term.red.bold(error)

      return res.json({
        success: false,
        error
      })
    }
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }

  if (isApprove) {
    if (String(isApprove) !== 'true' && String(isApprove) !== false) {
<<<<<<< HEAD
      throw new Error('Please provide isApprove argument')
=======
      throw newError('Please provide valid isApprove argument')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
    }
  }

  const proxyFactory = new ethers.Contract(
    factory,
    LinkdropFactory.abi,
    relayer
  )

  try {
    const initcode = await proxyFactory.getInitcode()

    const proxyAddress = await LinkdropSDK.computeProxyAddress(
      factory,
      linkdropMasterAddress,
      initcode
    )

    // Check whether a claim tx exists in database

    const oldClaimTx = await ClaimTxERC721.findOne({
      weiAmount,
      nftAddress,
      tokenId,
<<<<<<< HEAD
      version,
      chainId,
      linkId,
      linkdropMasterAddress
    })

    if (oldClaimTx && oldClaimTx.txHash) {
=======
      expirationTime,
      version,
      chainId,
      linkId,
      linkdropMasterAddress,
      receiverAddress
    })

    const table = new Table()

    if (oldClaimTx && oldClaimTx.txHash) {
      table.push(['type', `${weiAmount === 0 ? 'ERC721' : 'ETH + ERC721'}`])
      table.push(['txHash', oldClaimTx.toObject().txHash])

      term.green.bold(`\nSubmitted claim transaction\n`)
      term.bold(table.toString(), '\n')

>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
      return res.json({
        success: true,
        txHash: oldClaimTx.txHash
      })
    }

    try {
      let tx, txHash
      // Top up pattern
      if (!isApprove || String(isApprove) === false) {
        // Check claim params
        await proxyFactory.checkClaimParamsERC721(
          weiAmount,
          nftAddress,
          tokenId,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          proxyAddress
        )

        // Claim
<<<<<<< HEAD
        console.log('\n🔦️  Claiming...\n', claimParams)
=======
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

        tx = await proxyFactory.claimERC721(
          weiAmount,
          nftAddress,
          tokenId,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          { gasLimit: 500000 }
        )
      } else if (isApprove && String(isApprove === 'true')) {
        // Approve pattern
        // Check claim params
        await proxyFactory.checkClaimParamsERC721Approve(
          weiAmount,
          nftAddress,
          tokenId,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          proxyAddress
        )

        // Claim
<<<<<<< HEAD
        console.log('\n🔦️  Claiming...\n', claimParams)
=======
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

        tx = await proxyFactory.claimERC721Approve(
          weiAmount,
          nftAddress,
          tokenId,
          expirationTime,
          linkId,
          linkdropMasterAddress,
          linkdropSignerSignature,
          receiverAddress,
          receiverSignature,
          { gasLimit: 500000 }
        )
      }
      txHash = tx.hash
<<<<<<< HEAD
      console.log(`#️⃣  Tx Hash: ${txHash}`)
=======
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

      // Save claim tx to database
      const claimTxERC721 = new ClaimTxERC721({
        weiAmount,
        nftAddress,
        tokenId,
        expirationTime,
        version,
        chainId,
        linkId,
        linkdropMasterAddress,
        receiverAddress,
        proxyAddress,
        txHash
      })

      const document = await claimTxERC721.save()
<<<<<<< HEAD
      console.log(
        `🔋  Saved claim tx with document id = ${document.id} to database`
      )
=======

      table.push(['type', `${weiAmount === 0 ? 'ERC721' : 'ETH + ERC721'}`])
      for (let key in claimTxERC721.toObject()) {
        if (key !== '_id' && key !== '__v') {
          table.push([key, claimTxERC721.toObject()[key]])
        }
      }

      term.green.bold(`\nSubmitted claim transaction\n`)
      term.bold(table.toString(), '\n')
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

      res.json({
        success: true,
        txHash: tx.hash
      })
    } catch (error) {
<<<<<<< HEAD
      if (error.reason) console.error(`📛  Failed with '${error.reason}'`)
      else console.error(error)
=======
      term.red.bold(`\n${error.reason ? error.reason : error}\n`)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

      return res.json({
        success: false,
        error: error
      })
    }
  } catch (err) {
<<<<<<< HEAD
    console.error(err)
=======
    term.red.bold(err)
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  }
}
