import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import styled from 'styled-components';
import Theme from '../modules/Theme';

const StyledSvg = styled(SvgIcon)`
  width: ${props => props.width}px!important;
  height: ${props => props.height}px!important;

  .settings--icon {
    fill-rule: evenodd!important;
    fill: ${Theme.colors.action.red};
  }
`

class MoreViewIcon extends Component {
  render() {
    const width = this.props.width
    const height = this.props.height

    return (
      <StyledSvg viewBox={`0 0 ${width} ${height}`} {...this.props}>
        <g transform={`scale(${width/95}) translate(-2820 -1180)`}>
          <path
            className="settings--icon"
            d="M2870.5,1183a47.5,47.5,0,1,1-47.5,47.5A47.5,47.5,0,0,1,2870.5,1183Zm-8.5,17h18v22h22v18h-22v22h-18v-22h-22v-18h22v-22Z"
          />
        </g>
      </StyledSvg>
    )}
}

export default MoreViewIcon;
