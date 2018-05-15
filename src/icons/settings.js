import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import styled from 'styled-components';
import Theme from '../modules/Theme';

const StyledSvg = styled(SvgIcon)`
  width: ${props => props.width}px!important;
  height: ${props => props.height}px!important;

  .settings--icon {
    fill: transparent!important;
    stroke: ${Theme.colors.elements[400]};
    stroke-width: 5px;
  }
`

class Settings extends Component {
  render() {
    const width = this.props.width
    const height = this.props.height

    return (
      <StyledSvg viewBox={`0 0 ${width*2.7} ${height*2.7}`} {...this.props}>
        <g transform={`translate(${-2111.75 + width*2.5}, ${-1220.6 + height*1.1})`}>
          <path
            className="settings--icon"
            d="M2111.75,1220.6l-9.77-.99a33.73,33.73,0,0,0-3.01-7.29l6.2-7.61a5.278,5.278,0,0,0-.36-7.07l-4.45-4.45a5.278,5.278,0,0,0-7.07-.36l-7.61,6.21a33.753,33.753,0,0,0-7.28-3.03l-1-9.76a5.281,5.281,0,0,0-5.25-4.75h-6.3a5.281,5.281,0,0,0-5.25,4.75l-0.99,9.77a33.73,33.73,0,0,0-7.29,3.01l-7.61-6.2a5.278,5.278,0,0,0-7.07.36l-4.45,4.45a5.278,5.278,0,0,0-.36,7.07l6.21,7.61a33.753,33.753,0,0,0-3.03,7.28l-9.76,1a5.281,5.281,0,0,0-4.75,5.25v6.3a5.281,5.281,0,0,0,4.75,5.25l9.77,0.99a33.73,33.73,0,0,0,3.01,7.29l-6.2,7.61a5.278,5.278,0,0,0,.36,7.07l4.45,4.45a5.278,5.278,0,0,0,7.07.36l7.61-6.21a33.753,33.753,0,0,0,7.28,3.03l1,9.76a5.281,5.281,0,0,0,5.25,4.75h6.3a5.281,5.281,0,0,0,5.25-4.75l0.99-9.77a33.73,33.73,0,0,0,7.29-3.01l7.61,6.2a5.278,5.278,0,0,0,7.07-.36l4.45-4.45a5.278,5.278,0,0,0,.36-7.07l-6.21-7.61a33.753,33.753,0,0,0,3.03-7.28l9.76-1a5.281,5.281,0,0,0,4.75-5.25v-6.3A5.281,5.281,0,0,0,2111.75,1220.6ZM2069,1244.83a15.83,15.83,0,1,1,15.83-15.83A15.833,15.833,0,0,1,2069,1244.83Z"
          />
        </g>
      </StyledSvg>
    )}
}

export default Settings;
