//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/storage.js
//

'use strict';

// Constants -------------------------------------------------------------------
const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Core ------------------------------------------------------------------------
const validate_email = (s) => EMAIL_RE.test(s);
const length         = (s) => !!(s.trim().length);
const rt             = ()  => true;

// Configuration ---------------------------------------------------------------
const Configuration = [
  {
    name        : "first_name",
    placeholder : "First Name",
    family      : "text",
    validate    : length,
    classes     : 'i2',
  },
  {
    name        : "last_name",
    placeholder : "Last Name",
    family      : "text",
    validate    : length,
    classes     : 'i2',
  },
  {
    name        : "company",
    placeholder : "Company",
    family      : "text",
    validate    : length,
    classes     : '',
  },
  {
    name        : "title",
    placeholder : "Title",
    family      : "text",
    validate    : length,
    classes     : '',
  },
  {
    name        : "email",
    placeholder : "Email",
    family      : "text",
    validate    : validate_email,
    classes     : '',
  },
  {
    name     : "platform",
    family   : "choices",
    validate : rt,
    classes  : '',
    options  : [

    ]
  }
];

// Exports ---------------------------------------------------------------------
module.exports = (() => {
  let values = Configuration.reduce((m, config) => { m[config.name] = ''; return m; }, { });

  return {
    config : () => Configuration,

    get : (name) => {
      return values[name];
    },

    set : (name, value) => {
      if (name in values) values[name] = value;
    },

    validate_all : () => {
      Configuration.map(config => {
        if (!config.validate(values[config.name])) return false;
      });
      return true;
    },

    submit : () => {
      console.log("Handle form submission");
    }
  };

})();
