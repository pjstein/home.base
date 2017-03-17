//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/signup.js
//

'use strict';

const storage = require('./storage');
const Button  = require('./button');
const React   = require('react');
const Input   = require('./input')

// Constants -------------------------------------------------------------------
const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Core ------------------------------------------------------------------------
const validate_email = (email) => EMAIL_RE.test(email);

// Signup ----------------------------------------------------------------------
const Signup = (props) => {
  const config = storage.config();

  return (
     <div style={{ paddingTop : 50, paddingBottom : 50 }}>
      <div className="ih">
       <Input config={ config[0] } index={ 1 } />
       <Input config={ config[1] } index={ 2 } />
      </div>
      <div className="ih">
        <Input config={ config[2] } index={ 3 } />
      </div>
      <div className="ih">
        <Input config={ config[3] } index={ 4 } />
      </div>
      <div className="ih">
        <Input config={ config[4] } index={ 5 } />
      </div>
      <Button storage={ storage } index={ 6 }>Submit</Button>
    </div>
  );
}

// Exports ---------------------------------------------------------------------
module.exports = Signup;
