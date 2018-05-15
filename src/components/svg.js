import React from 'react';

// import Theme from '../modules/Theme'

let SvgComponent = props => (
  <svg
    width={props.width}
    height={props.height}>
    {props.children}
  </svg>
)

export default SvgComponent
