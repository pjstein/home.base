//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/main.js
//

'use strict';

const ReactDOM = require('react-dom');
const Signup   = require('./signup');
const React    = require('react');
const Bk       = require('./bk');

require('normalize.css');
require('./reset.css');
require('./style.css');

// Constants -------------------------------------------------------------------
const ROOT_NODE = document.getElementById('root');

// C2 --------------------------------------------------------------------------
const C2 = (props) => <div className="c-2">{ props.children }</div>

// Sh --------------------------------------------------------------------------
const Sh = (props) => <h4 className="f-b p-b-11">{ props.children }</h4>

// Title -----------------------------------------------------------------------
const Title = () => {
  return (
    <div className="cf cl">
      <Bk>
        <div className="t f-C">
          <h1 className="c-w f-fac f-b f-72 o70 p-b-30">Let's Stop Phishing Everywhere</h1>
          <h2 className="c-w f-lg f-b f-u f-22 o70 p-b-6">Hackers don't discriminate based on size.</h2>
          <h2 className="c-w f-lg f-b f-u f-22 o40">We don't either.</h2>
        </div>
      </Bk>
    </div>
  );
}

// Form ------------------------------------------------------------------------
const Form = () => {
  return (
    <div className="mr cr s-l-b f-lat f-16">
      <div>
        <Sh>Get it now</Sh>
        <p>30 days, risk and credit card free. Watch attacks coming at your organization in real-time and take action.</p>
        <div>
          <Signup />
        </div>
      </div>
    </div>
  );
}

// Content ---------------------------------------------------------------------
const Content = () => {
  return (
    <div>
      <div className="cf cl f-lat f-16 bk-g">
        <div className="p-c">
          <div className="cf c-flex">
            <C2>
              <h3 className="f-40 f-C">Phishing Impacts Everyone</h3>
            </C2>
            <C2>
              <div className="gn" />
            </C2>
          </div>
          <div className="cf c-flex">
            <C2>
              <Sh>Don't Fall into the Protection Gap</Sh>
              <p>Big or small, you are susceptible. Cybersecurity companies typically focus only on the top of the market, but attackers typically focus on everyone to achieve their goals. So we extended our offering to support everyone. Everywhere.</p>
            </C2>
            <C2>
              <Sh>A Tangible Solution in an Intangible Environment</Sh>
              <p>Built-in cloud security only removes spam. Area 1 Security protects organizations from targeted attacks, which sneak by these filters. With both, you’re fully covered.</p>
            </C2>
          </div>
        </div>
      </div>
      <div className="cf cl f-lat f-16">
        <div className="p-c">
          <div className="b" />
          <div className="cf">
            <div className="g" />
          </div>
        </div>
        <Footer  />
      </div>
    </div>
  );
}

// Footer ----------------------------------------------------------------------
const Footer = () => {
  return (
    <div className="cf bk-dg f-u f-lat lh-68 f-C" style={{ position : 'relative', height : 68 }}>
      <div className="ca ca-l">
        <ul className="l-il">
          <li>
            <a href="//area1security.com/product" target="_blank">Product</a>
          </li>
          <li>
            <a href="//area1security.com/resources" target="_blank">Resources</a>
          </li>
          <li>
            <a href="//area1security.com/contact" target="_blank">Contact</a>
          </li>
        </ul>
      </div>
      <div className="ca ca-r">
        <span>© 2017 Area 1 Security</span>
      </div>
    </div>
  );
}

// App -------------------------------------------------------------------------
const App = (props) => {
  return (
    <div>
      <Title   />
      <Form    />
      <Content />
    </div>
  );
}

// Exports ---------------------------------------------------------------------
module.exports = () => {
  ReactDOM.render(<App />, ROOT_NODE);
}
