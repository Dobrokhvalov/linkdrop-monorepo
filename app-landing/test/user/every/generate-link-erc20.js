/* global describe, it */
import { expect } from 'chai'
import generateLinkERC20Generator from 'data/store/saga/user/every/generate-link-erc20.js'
import { put, select } from 'redux-saga/effects'
import LinkdropSDK from 'sdk/src/index'
import { jsonRpcUrl, claimHost } from 'config'
import configs from 'config-landing'

describe('data/store/saga/user/every/generate-link-erc20.js ERC-20', () => {
  const networkId = '1'
  const payload = { networkId }
  const gen = generateLinkERC20Generator({ payload })
  const balance = { '_hex': '0x16345785d8a0000' }
  const privateKey = '0x0fc0c96d5aba156b1263311812a7b3d0812f4120b8f3f4288c0b7806fc2aaa2a'
  const tokenAddress = '0x1a031d35e1c90cd6e4228f03c2b31cea5a0956c89be0c1c576fa52b76e2f50e2'
  const link = {
    url: 'https://www.facebook.com/Anarchist.Academy.1992/'
  }

  it('enable loading', () => {
    expect(
      gen.next().value
    ).to.deep.equal(
      put({ type: 'USER.SET_LOADING', payload: { loading: true } })
    )
  })

  it('get balance from store', () => {
    expect(
      gen.next().value
    ).to.deep.equal(
      select(generateLinkERC20Generator.selectors.balance)
    )
  })

  it('get private key from store', () => {
    expect(
      gen.next(balance).value
    ).to.deep.equal(
      select(generateLinkERC20Generator.selectors.privateKey)
    )
  })

  it('get token address from store', () => {
    expect(
      gen.next(privateKey).value
    ).to.deep.equal(
      select(generateLinkERC20Generator.selectors.tokenAddress)
    )
  })

  it('generate link', () => {
    expect(
      gen.next(tokenAddress).value
    ).to.deep.equal(
      LinkdropSDK.generateLink(
        jsonRpcUrl,
        networkId,
        claimHost,
        privateKey,
        0,
        tokenAddress,
        balance,
        configs.expirationTime
      )
    )
  })

  it('set link', () => {
    expect(
      gen.next(link).value
    ).to.deep.equal(
      put({ type: 'USER.SET_LINK', payload: { link: link.url } })
    )
  })

  it('disable loading', () => {
    expect(
      gen.next().value
    ).to.deep.equal(
      put({ type: 'USER.SET_LOADING', payload: { loading: false } })
    )
  })
})

describe('data/store/saga/user/every/generate-link-erc20.js ETH', () => {
  const networkId = '1'
  const payload = { networkId }
  const gen = generateLinkERC20Generator({ payload })
  const balance = { '_hex': '0x16345785d8a0000' }
  const privateKey = '0x0fc0c96d5aba156b1263311812a7b3d0812f4120b8f3f4288c0b7806fc2aaa2a'
  const tokenAddress = undefined
  const link = {
    url: 'https://www.facebook.com/Anarchist.Academy.1992/'
  }

  it('enable loading', () => {
    expect(
      gen.next().value
    ).to.deep.equal(
      put({ type: 'USER.SET_LOADING', payload: { loading: true } })
    )
  })

  it('get balance from store', () => {
    expect(
      gen.next().value
    ).to.deep.equal(
      select(generateLinkERC20Generator.selectors.balance)
    )
  })

  it('get private key from store', () => {
    expect(
      gen.next(balance).value
    ).to.deep.equal(
      select(generateLinkERC20Generator.selectors.privateKey)
    )
  })

  it('get token address from store', () => {
    expect(
      gen.next(privateKey).value
    ).to.deep.equal(
      select(generateLinkERC20Generator.selectors.tokenAddress)
    )
  })

  it('generate link for ETH', () => {
    expect(
      gen.next(tokenAddress).value
    ).to.deep.equal(
      LinkdropSDK.generateLink(
        jsonRpcUrl,
        networkId,
        claimHost,
        privateKey,
        balance,
        '0x0000000000000000000000000000000000000000',
        0,
        configs.expirationTime
      )
    )
  })

  it('set link', () => {
    expect(
      gen.next(link).value
    ).to.deep.equal(
      put({ type: 'USER.SET_LINK', payload: { link: link.url } })
    )
  })

  it('disable loading', () => {
    expect(
      gen.next().value
    ).to.deep.equal(
      put({ type: 'USER.SET_LOADING', payload: { loading: false } })
    )
  })
})