import React from 'react'
import styled from 'styled-components'

import Theme from '../modules/Theme'
import Grid from './grid'

const StyledDivider = styled.div`
  width: 100%;
  background-color: ${Theme.colors.bases[100]};

  h3 {
    color: ${Theme.colors.elements[400]};
    height: 66px;
    margin: 20px 20px 20px 0;
    padding: 0 20px 0 0;
    border-right: 1px solid ${Theme.colors.elements[400]};
    font-family: 'san_francisco_textsemibold';
    font-size: 36px;
    font-weight: 600;
    line-height: 0.89;
    letter-spacing: 1.1px;
    text-align: left;
    line-height: 66px;
  }

  p {
    color: ${Theme.colors.text[100]};
    font-size: 21px;
    line-height: 1.52;
    letter-spacing: 0.6px;
    text-align: left;
    padding: 0;
    margin: 0;
  }

  @media only screen and (max-width : 768px) {
    > div {
      align-items: center!important;
    }
    h3 {
      line-height: 0.9;
      font-size: 22px;
    }
    p {
      font-size: 16px;
      line-height: 1;
    }
  }
`

let DividerComponent = props => (
  <StyledDivider {...props}>
    <Grid
      justifyContent="flex-start"
      alignItems="baseline"
      display="flex">

      <h3>{props.primary}</h3>
      <p>{props.secondary}</p>

    </Grid>
  </StyledDivider>
)

export default DividerComponent
