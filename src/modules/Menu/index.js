import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import map from 'lodash/map';
import filter from 'lodash/filter';
import slice from 'lodash/slice';

import Settings from '../../icons/settings';

import { StyleMenu, StyleList, StyleListItem, StyledContent } from './style';
import InputComponent from '../../components/input';
import Button from '../../components/button';
import { getDevices } from '../Content/action';
import { authLogout, passwordConfirmation } from '../Login/action';

import api from '../../api';

class MenuComponent extends Component {
  state = {
    open: false,
    new_password: undefined,
    confirm_password: undefined,
    domain: window.location.host,
    devices: this.props.session.devices,
    user: this.props.session.user,
  }

  componentWillMount() {
    this.props.getDevices()
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleChange = ev => {
    this.setState({
      [ev.target.id]: ev.target.value,
    })
  }

  resetPassword = () => {
    this.props.passwordConfirmation({
      user:	{
        password: this.state.new_password,
        password_confirmation: this.state.confirm_password,
        domain: this.state.domain,
      }
    })
    this.handleClose()
  }

  deleteDevice = id => {
    var d = this.state.devices
    var _data = filter(d, i => i.id !== id)
    this.setState({
      devices: _data,
    })
    api.delete(`https://api.curseria.com/api/devices/${id}`)
  }

  render() {
    const session = this.props.session

    return (
      <StyleMenu>
        <StyleList>

          <StyleListItem
            primaryText="Configurações"
            leftIcon={<Settings width={38} height={38} />}
            onClick={this.handleOpen}
          />

        </StyleList>

        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <StyledContent>
            <header>
              <h3>Configurações de Usuário</h3>
              <i className="modal--user--close--type" onClick={this.handleClose}>fechar</i>
            </header>
            <div className="modal--body--config">
              <label htmlFor="session_name">Nome <i>(somente leitura)</i></label>
              <div className="formControl">
                <InputComponent
                  type="text"
                  disabled={true}
                  defaultValue={this.state.user.name}
                  id="session_name"
                />
              </div>

              <label htmlFor="session_email">Email <i>(somente leitura)</i></label>
              <div className="formControl">
                <InputComponent
                  disabled={true}
                  type="text"
                  defaultValue={this.state.user.email}
                  id="session_email"
                />
              </div>

              <label>Dispositivos <i>(máximo de 3 por conta)</i></label>
              <ul className="devices--list--user">
                {map(slice(this.state.devices,0,3), (device, i) =>
                  <li key={i}>{`${device.os_name} - ${device.device_name} - ${device.request_ip}`} <i className="delete--user--device" onClick={() => this.deleteDevice(device.id)}>(excluir)</i></li>
                )}
              </ul>

              <label>Trocar Senha</label>

              <div className="formControl">
                <InputComponent
                  type="password"
                  placeholder="Nova Senha"
                  id="new_password"
                  key="reset_new"
                  onChange={this.handleChange}
                />
              </div>

              <div className="formControl">
                <InputComponent
                  type="password"
                  placeholder="Repetir Senha"
                  id="confirm_password"
                  key="reset_confirm"
                  onChange={this.handleChange}
                />
                {session.errorResetPassword && <span className="login--auth--error">{session.errorResetPassword}</span>}
              </div>

              <div className="modal--body--config--footer">
                <Button type="action" label={`Salvar`} onClick={this.resetPassword} />
                <Button type="action" label={`Sair`} onClick={this.props.authLogout} />
              </div>

            </div>
          </StyledContent>
        </Dialog>

      </StyleMenu>
    )
  }
}

MenuComponent = connect(
  ({session}) => ({session}),
  {getDevices, authLogout, passwordConfirmation}
)(MenuComponent)

export default MenuComponent
