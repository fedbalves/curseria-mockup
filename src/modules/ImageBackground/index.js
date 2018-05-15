import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { StyleImageBackground } from './style';
import Image from '../../components/image';
import Grid from '../../components/grid';

class ImageBackgroundComponent extends Component {
  render() {
    const maxWidth = 1920;
    const width = this.props.containerWidth;
    const height = 400;
    const left = width >= maxWidth ? 0 : (width - maxWidth) / 2;

    return (
      <StyleImageBackground>

        <ReactCSSTransitionGroup
          transitionName="page"
          transitionAppear={ true }
          transitionAppearTimeout={ 700 }
          transitionEnterTimeout={ 700 }
          transitionLeaveTimeout={ 700 }
            component="div"
            className="ImageBackground--wrapper">

              <Image
                width={maxWidth}
                height={height}
                left={left}
                src={this.props.src}
                alt={this.props.alt} />

          </ReactCSSTransitionGroup>

          {this.props.children &&
            <div className="ImageBackground--wrapper">
              <Grid
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                justifyContent="space-between">
                {this.props.children}
              </Grid>
            </div>}

      </StyleImageBackground>
    )
  }
}

export default Dimensions()(ImageBackgroundComponent)
