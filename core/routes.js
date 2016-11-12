//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/routes.js
//

'use strict';

const Launchpad = require('./controllers/launchpad').Launchpad;
const React     = require('react');
const Route     = require('react-router').Route;
const App       = require('./presentation/app').App;

// Exports ---------------------------------------------------------------------
module.exports = (
  <Route component={ App }>
    <Route path="*" component={ Launchpad } />
  </Route>
);
