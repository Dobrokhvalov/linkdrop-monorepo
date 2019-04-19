import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import saga from './saga'
import { createBrowserHistory } from 'history'
import { user, nftTokens, tokens } from './reducers'
const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
export default () => {
  const store = createStore(
    combineReducers({
      user,
      nftTokens,
      tokens,
      router: connectRouter(history)
    }),
    {},
    compose(
      applyMiddleware(thunk),
      applyMiddleware(sagaMiddleware),
      applyMiddleware(routerMiddleware(history))
    )
  )
  sagaMiddleware.run(saga)
  return store
}