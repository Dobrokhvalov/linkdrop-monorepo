import {
  computeProxyAddress,
  computeBytecode,
  createLink,
  signLink,
  signReceiverAddress
} from './utils'
import { generateLink, generateLinkERC721 } from './generateLink'
<<<<<<< HEAD
=======
import { generateLinkWeb3, generateLinkERC721Web3 } from './generateLinkWeb3'
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
import { claim, claimERC721 } from './claim'

const LinkdropSDK = {
  computeProxyAddress,
  computeBytecode,
  createLink,
  signLink,
  signReceiverAddress,
  generateLink,
  generateLinkERC721,
<<<<<<< HEAD
=======
  generateLinkWeb3,
  generateLinkERC721Web3,
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
  claim,
  claimERC721
}

export default LinkdropSDK
