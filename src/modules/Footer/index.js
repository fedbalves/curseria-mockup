import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import Grid from '../../components/grid';
import Image from '../../components/image';
import { FacebookIcon, InstagramIcon } from '../../components/icons';
import EmailIcon from 'material-ui-icons/Email';

import Theme from '../Theme';

import { StyledFooter } from './style'

class FooterModule extends Component {

  render() {
    return (
      <StyledFooter>

        <Grid
          display="flex"
          flexWrap="wrap"
          justifyContent='space-between'>

          <Image
            width={193}
            height={66}
            alt="Curseria Logo&copy;"
            src="https://curseria.com/logo.png" />

            <div className="Footer--lettering">
              <div>
                <a href="https://instagram.com/curseria" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </a>

                <a href="mailto:suporte@curseria.com" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <EmailIcon color={Theme.colors.text[300]} />
                  </IconButton>
                </a>

                <a href="https://facebook.com/curseria" target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                </a>
              </div>
              <div className="Footer--Curseria inset">
                <p>www.<b>curseria</b>.com</p>
              </div>
            </div>

            <div className="Footer--Curseria outset">
              <p>www.<b>curseria</b>.com</p>
            </div>

        </Grid>

      </StyledFooter>
    )
  }
}

export default FooterModule
