import React from 'react'
import { Loading } from 'linkdrop-ui-kit'
import { translate, actions } from 'decorators'
import styles from './styles.module'
import commonStyles from '../styles.module'
import config from 'config-claim'
import classNames from 'classnames'
import Fingerprint2 from 'fingerprintjs2'
import { chainId } from 'app.config.js'

@actions(({ tokens: { transactionId, transactionStatus } }) => ({ transactionId, transactionStatus }))
@translate('pages.main')
class ClaimingProcessPage extends React.Component {
  componentDidMount () {
    const { wallet, transactionId } = this.props
    if (transactionId) {
      this.statusCheck = window.setInterval(_ => this.actions().tokens.checkTransactionStatus({ transactionId, chainId }), 3000)
      return
    }
    const fingerprintCb = () => {
      Fingerprint2.get(components => {
        const fingerprint = Fingerprint2.x64hash128(components.map(({ value }) => value).join(), 31)
        this.actions().tokens.claimTokensERC20({ address: wallet, fingerprint })
      })
    }
    window.requestIdleCallback ? window.requestIdleCallback(fingerprintCb) : setTimeout(fingerprintCb, 500)
  }

  componentWillReceiveProps ({ transactionId: id, transactionStatus: status }) {
    const { transactionId: prevId, transactionStatus: prevStatus } = this.props
    if (id != null && prevId === null) {
      this.statusCheck = window.setInterval(_ => this.actions().tokens.checkTransactionStatus({ transactionId: id, chainId }), 3000)
    }
    if (status != null && prevStatus === null) {
      this.statusCheck && window.clearInterval(this.statusCheck)
      this.actions().user.setStep({ step: 5 })
    }
  }

  render () {
    const { transactionId } = this.props
    return <div className={commonStyles.container}>
      <Loading container size='small' className={styles.loading} />
      <div className={styles.title}>{this.t('titles.claiming')}</div>
      <div className={styles.subtitle}>{this.t('titles.transactionInProcess')}</div>
      <div className={styles.description}>{this.t('titles.instructions')}</div>
      <div
        className={classNames(styles.description, {
          [styles.descriptionHidden]: !transactionId
        })}
        dangerouslySetInnerHTML={{
          __html: this.t('titles.seeDetails', {
            transactionLink: `${Number(chainId) === 4 ? config.etherscanRinkeby : config.etherscanMainnet}${transactionId}`
          })
        }}
      />
    </div>
  }
}

export default ClaimingProcessPage
