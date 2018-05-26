import React from 'react';
import ReactDOM from 'react-dom';
// import { Router,, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'
// import getWeb3 from './util/web3/getWeb3'

// Layouts
// import App from './App'
// import Home from './layouts/home/Home'
import Dashboard from './layouts/dashboard/Dashboard'
import SignUp from './user/layouts/signup/SignUp'
import Profile from './user/layouts/profile/Profile'
import SethHome from './SethHome'
import Home from './Home'
// Redux Store
// import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from './statesauce/src/statesauce.js'

// Initialize react-router-redux.
// const history = syncHistoryWithStore(browserHistory, store)

// getWeb3
// .then(results => {
//   console.log('Web3 initialized!')
// })
// .catch(() => {
//   console.log('Error in web3 initialization.')
// })

ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Home}>
        </Route>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
