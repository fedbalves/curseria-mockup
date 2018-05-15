import React from 'react'
import styled from 'styled-components'

const StyledWrapperImg = styled.div`
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  left: ${props => props.left || 0}px;

  img {
    display: block;
    position: relative;
    margin: auto;
    padding: 0;
  }
`

let ImageComponent = props => (
  <StyledWrapperImg {...props}>
    <img alt="" {...props} />
  </StyledWrapperImg>
)

export default ImageComponent
