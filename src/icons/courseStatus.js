import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import styled from 'styled-components';

const StyledSvg = styled(SvgIcon)`
  width: ${props => props.width}px!important;
  height: ${props => props.height}px!important;
  top: -2px;
  position: relative;

  .courseStatus--icon {
    fill-rule: evenodd!important;
  }
`

class CourseStatusIcon extends Component {
  render() {
    const width = this.props.width
    const height = this.props.height

    return (
      <StyledSvg viewBox={`0 0 ${width} ${height}`} {...this.props}>
        <g transform={`scale(${width/95}) translate(-2620 -1180)`}>
          <path
            className="courseStatus--icon"
            d="M2629,1194l12-12,29,30,29-29,12,12-41,41Zm0,42,12-12,29,30,29-29,12,12-41,41Z"
          />
        </g>
      </StyledSvg>
    )}
}

export default CourseStatusIcon;
