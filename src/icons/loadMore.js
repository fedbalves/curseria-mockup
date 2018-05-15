import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import styled from 'styled-components';

const StyledSvg = styled(SvgIcon)`
  width: ${props => props.width}px!important;
  height: ${props => props.height}px!important;

  .settings--icon {
    fill-rule: evenodd!important;
  }
`

class LoadMoreIcon extends Component {
  render() {
    const width = this.props.width
    const height = this.props.height

    return (
      <StyledSvg viewBox={`0 0 ${width} ${height}`} {...this.props}>
        <g transform={`scale(${width/95}) translate(-3223 -1183)`}>
          <path
            className="settings--icon"
            d="M3223,1230.5a47.5,47.5,0,1,0,47.5-47.5A47.556,47.556,0,0,0,3223,1230.5Zm3.8,0a43.7,43.7,0,1,1,43.7,43.7A43.745,43.745,0,0,1,3226.8,1230.5ZM3265,1205h13v20h20v13h-20v20h-13v-20h-20v-13h20v-20Z"
          />
        </g>
      </StyledSvg>
    )}
}

export default LoadMoreIcon;
