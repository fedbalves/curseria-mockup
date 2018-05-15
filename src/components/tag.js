import React from 'react'
import styled from 'styled-components'

import Theme from '../modules/Theme'

const StyledTag = styled.div`
  display: inline-flex;
  margin: 0 10px 0 0;
  padding: 4px 7.5px 3.5px 5.5px;
  border-radius: 8px;
  text-transform: lowercase;
  font-family: 'san_francisco_textsemibold';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: left;

  @media only screen and (max-width : 768px) {
    letter-spacing: 0;
    margin-bottom: 5px;
  }

  color: ${props => props.color ? Theme.colors.action[props.color] : Theme.colors.elements[400]};
  border: 1px solid ${props => props.color ? Theme.colors.action[props.color] : Theme.colors.elements[400]};
`

let TagComponent = props => (
  <StyledTag {...props}>
    <span>{`${props.label}`}</span>
  </StyledTag>
)

export default TagComponent
