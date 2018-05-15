import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import styled from 'styled-components';

const StyledSvg = styled(SvgIcon)`
  width: ${props => props.width}px!important;
  height: ${props => props.height}px!important;
  position: relative;

  .PlayIcon--icon {
    fill-rule: evenodd!important;
  }
`

class PlayIcon extends Component {
  render() {
    const width = this.props.width
    const height = this.props.height

    return (
      <StyledSvg viewBox={`0 0 ${width} ${height}`} {...this.props}>
        <g transform={`scale(${width/95}) translate(-3020 -1180)`}>
          <path
            className="PlayIcon--icon"
            d="M3108.31,1223.78a7.565,7.565,0,0,1,0,13.1l-34.57,19.97-34.57,19.96a7.557,7.557,0,0,1-11.34-6.54V1190.4a7.561,7.561,0,0,1,11.34-6.55l34.57,19.97Z"
          />
        </g>
      </StyledSvg>
    )}
}

export default PlayIcon;
