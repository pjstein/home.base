//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/bk.js
//

'use strict';

const React = require('react');

// Constants -------------------------------------------------------------------
const COLORS = [
  [ 121, 109, 238 ],
  [ 229, 139, 244 ],
  [ 214, 47,  196 ],
  [ 255, 204, 101 ],
  [ 166, 229, 115 ],
  [ 101, 171, 255 ]
];

const SPEED = 0.001;

// Bk --------------------------------------------------------------------------
class Bk extends React.Component {

  componentDidMount() {
    let step         = 0;
    let indices = [0,1,2,3];

    const updateGradient = () => {

      const c0_0 = COLORS[indices[0]];
      const c0_1 = COLORS[indices[1]];
      const c1_0 = COLORS[indices[2]];
      const c1_1 = COLORS[indices[3]];

      const istep = 1 - step;

      const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);

      const color1 = "rgb("+r1+","+g1+","+b1+")";

      const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);

      const color2 = "rgb("+r2+","+g2+","+b2+")";

      $(this.background)
        .css({background: "linear-gradient(to bottom right, "+color1+" , "+color2+" )"})
        .css({background: "-webkit-linear-gradient(left top, "+color1+", "+color2+")"})
        .css({background: "-o-linear-gradient(bottom right, "+color1+", "+color2+")"})
        .css({background: "-moz-linear-gradient(bottom right, "+color1+", "+color2+")"});

      step += SPEED;

      if ( step >= 1 ) {
        step %= 1;
        indices[0] = indices[1];
        indices[2] = indices[3];

        //pick two new target color indices
        //do not pick the same as the current one

        indices[1] = ( indices[1] + Math.floor( 1 + Math.random() * (COLORS.length - 1))) % COLORS.length;
        indices[3] = ( indices[3] + Math.floor( 1 + Math.random() * (COLORS.length - 1))) % COLORS.length;
      }
    }
    setInterval(updateGradient, 15);
  }

  render() {
    return (
      <div className="bk bk-p" ref={ (background) => this.background = background } >
        { this.props.children }
      </div>
    );
  }
}

// Exports ---------------------------------------------------------------------
module.exports = Bk;
