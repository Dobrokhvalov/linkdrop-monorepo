import React from 'react'
import i18next from 'i18next'
import { Switch, Route } from 'react-router'
import { Main, Page, NotFound } from 'components/pages'
import './styles'
import { Web3Consumer } from 'web3-react'

import { actions } from 'decorators'
@actions(({ user }) => ({
  locale: (user || {}).locale
}))
class AppRouter extends React.Component {
  componentWillReceiveProps ({ locale }) {
    const { locale: prevLocale } = this.props
    if (locale === prevLocale) { return }
    i18next.changeLanguage(locale)
  }

  render () {
    return <Page>
<<<<<<< HEAD:apps/app-landing/components/application/router/index.js
      <Switch>
        <Route path='/' component={Main} />
        <Route path='*' component={NotFound} />
      </Switch>
=======
      <Web3Consumer>
        {context => {
          return <Switch>
            <Route path='/' render={props => <Main {...props} account={context.account} />} />
            <Route path='*' component={NotFound} />
          </Switch>
        }}
      </Web3Consumer>
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444:apps/app-demo/components/application/router/index.js
    </Page>
  }
}

export default AppRouter
