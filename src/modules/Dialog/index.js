import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

import { StyledContent } from './style'

export default class DialogComponent extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <Dialog
          title="Livro autografado"
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={StyledContent}
          onRequestClose={this.handleClose}
        >
          Receba um livro autografado do chef Henrique Fogaça na sua casa.
        </Dialog>
      </div>
    )
  }
}

export default DialogComponent
