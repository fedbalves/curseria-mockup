import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import { StyledHeader } from './style'
import Grid from '../../components/grid'
import Image from '../../components/image'
import Menu from '../Menu'

class HeaderModule extends Component {

  render() {
    return (
      <StyledHeader>

        <Grid
          display="flex"
          justifyContent='space-between'>

          <Link to={"/classes/home"}>
            <Image
              width={'auto'}
              height={40}
              alt="Curseria Logo&copy;"
              src="https://curseria.com/logo.png" />
          </Link>

          <Menu
            position="top"/>

        </Grid>

      </StyledHeader>
    )
  }
}

export default HeaderModule
