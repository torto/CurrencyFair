import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="bg-light bg-container">
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
