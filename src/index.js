import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom'
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
import PlayGround from './PlayGround'
import Check from './Check'
import KittySelect from './KittySelect'
import Switcher from './Switcher'
import KittyListContainer from './KittyListContainer'
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
        <div>
          <Route path="/" component={Home} />
          <Route path='/playground' component={Switcher} />
          <Route path='/checkPlayground' component={Switcher} />
          <Route path='/capture' component={Switcher} />
          <Route path='/check' component={Switcher} />
          <Route path='/kittySelect' component={KittySelect} />
          <Route path='/kitties' component={KittyListContainer} />
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
