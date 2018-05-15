import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import styled from 'styled-components';

const StyledSvg = styled(SvgIcon)`
  width: ${props => props.width}px!important;
  height: ${props => props.height}px!important;
  top: -2px;
  position: relative;

  .settings--icon {
    fill-rule: evenodd!important;
  }
`

class LinkIcon extends Component {
  render() {
    const width = this.props.width
    const height = this.props.height

    return (
      <StyledSvg viewBox={`0 0 ${width} ${height}`} {...this.props}>
        <g transform={`scale(${width/95}) translate(-2424 -1181)`}>
          <path
            className="settings--icon"
            d="M2470,1182.5a47.5,47.5,0,1,1-47.5,47.5A47.5,47.5,0,0,1,2470,1182.5Zm-16,28.5,12-12,31,32-31,32-12-12,20-20Z"
          />
        </g>
      </StyledSvg>
    )}
}

export default LinkIcon;
