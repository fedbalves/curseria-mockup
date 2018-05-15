import React from 'react'
import styled from 'styled-components'

import Theme from '../modules/Theme'

const StyledGrid = styled.div`
  position: relative;
  width: auto;
  margin: auto;
  max-width: 1160px;

  height: ${props => props.height || '100%'};
  display: ${props => props.display || 'block'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  flex-direction: ${props => props.custom || 'initial'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  padding: 0 ${Theme.gutter}px;
  flex-grow: 1;

  @media only screen and (max-width : 768px) {
    flex-direction: ${props => props.flexDirection || 'row'};

    &.custom--grid {
      flex-direction: column!important;
    }
  }
`

let GridComponent = props => (
  <StyledGrid {...props}>
    {props.children}
  </StyledGrid>
)

export default GridComponent
