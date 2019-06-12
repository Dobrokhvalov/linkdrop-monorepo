import fetch from '../fetch'
import { prepareGetParams } from 'data/api/helpers'
<<<<<<< HEAD:apps/app-landing/data/api/tokens/get-tokens-opensea.js
import configs from 'config-landing'
=======
import configs from 'config-demo'
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444:apps/app-demo/data/api/tokens/get-tokens-opensea.js

export default ({ wallet, orderBy = 'current_price', orderDirection = 'asc', chainId }) => {
  const getParams = prepareGetParams({
    order_by: orderBy,
    order_direction: orderDirection,
    owner: wallet
  })
  const host = Number(chainId) === 4 ? configs.openseaRinkeby : configs.openseaMainnet
  return fetch(`${host}/api/v1/assets/${getParams}`)
}
