import fetch from '../fetch'

export default ({ address, fingerprint }) => {
  // address, fingerprint
  const body = JSON.stringify({ address, fingerprint })
  return fetch('http://104.236.71.227:5011/api/v1/claim-link', { method: 'POST', body })
}

// POST
// Params
// address: receiver Ethereum address
// fingerprint: hash of device fingerprint

// Returns success
// 200 OK
// success: true
// txHash: hash of claim transaction
// message: null

// Returns error
// success: false
// txHash: null
// message: «All links have been claimed»
