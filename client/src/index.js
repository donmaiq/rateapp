import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { 
  Home,
  Collection,
  Collections,
  Results,
  NotFound,
  Create,
  Account,
  User,
} from './pages/'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './style.css'

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/account" component={ Account } />
        <Route path="/users/:slug" component={ User } />
        <Route exact path="/collections/create" component={Create} />
        <Route exact path="/collections/:slug/results" component={Results} />
        <Route path="/collections/:slug" component={Collection} />
        <Route exact path="/collections" component={ Collections } />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
