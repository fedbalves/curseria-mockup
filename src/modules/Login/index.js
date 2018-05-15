import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import isNil from 'lodash/isNil';
import Link from 'react-router-dom/Link';

import { StyledLogin } from './style';
import Button from '../../components/button';
import Image from '../../components/image';
import InputComponent from '../../components/input';

import { authLogin, passwordConfirmation, authRecoverPassword } from './action';

class LoginComponent extends Component {

  state = {
    email: undefined,
    password: undefined,
    new_password: undefined,
    confirm_password: undefined,
    recover_password: undefined,
    domain: window.location.host.indexOf('localhost') === 0 ? 'confeitariacomdaninoce' : window.location.host.split('.')[1],
  }

  handleChange = ev => {
    this.setState({
      [ev.target.id]: ev.target.value,
    })
  }

  handleClick = type => {

    switch(type) {

      case 'login':
        if (!isNil(this.state.email) && !isNil(this.state.password)) {
          this.props.authLogin({
            email: this.state.email,
            password: this.state.password,
            domain: this.state.domain,
          })
        }
        break;

      case 'password':
        if (!isNil(this.state.new_password) && !isNil(this.state.confirm_password)) {
          this.props.passwordConfirmation({
            user:	{
              password: this.state.new_password,
              password_confirmation: this.state.confirm_password,
              domain: this.state.domain,
            }
          })
        }
        break;

      case 'recover':
        if (!isNil(this.state.recover_password)) {
          this.props.authRecoverPassword({
            email: this.state.recover_password,
            uri: this.state.domain
          })
        }
        break;

      default:
        break;

    }

  }

  renderAuthentication() {
    const props = this.props.session

    return (
      <StyledLogin onSubmit={ev => {
        ev.preventDefault();
        this.handleClick('login');
      }}>
        <Image
          width={193}
          height={66}
          alt="Curseria Logo&copy;"
          src="https://curseria.com/logo.png" />

        <h2>Login</h2>

        <div className="formControl">
          <InputComponent
            type="email"
            placeholder="E-mail"
            id="email"
            key="login_name"
            onChange={this.handleChange}
          />
          {props.error && <span className="login--auth--error">{props.error}</span>}
        </div>

        <div className="formControl">
          <InputComponent
            type="password"
            placeholder="Senha"
            id="password"
            key="login_password"
            onChange={this.handleChange}
          />
        </div>

        <div className="login--action--button">
          <a href="mailto:suporte@curseria.com" target="_blank" rel="noopener noreferrer" className="login--auth--email">DÚVIDAS?</a>
          <Button type="submit" label={props.working ? '...' : 'Entrar'} disabled={props.working} onClick={() => this.handleClick('login')} />
        </div>

        <Link to="/forget_password" className="login--simple--link">esqueceu sua senha?</Link>
      </StyledLogin>
    )}

  renderResetPassword() {
    const props = this.props.session

    return (
      <StyledLogin onSubmit={ev => {
        ev.preventDefault();
        this.handleClick('password');
      }}>
        <Image
          width={193}
          height={66}
          alt="Curseria Logo&copy;"
          src="https://curseria.com/logo.png" />

        <h2>Redefina sua senha</h2>

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
          {props.errorResetPassword && <span className="login--auth--error">{props.errorResetPassword}</span>}
        </div>

        <div className="login--action--button">
          <a href="mailto:suporte@curseria.com" target="_blank" rel="noopener noreferrer" className="login--auth--email">DÚVIDAS?</a>
          <Button type="submit" label={props.working ? '...' : 'Confirmar'} disabled={props.working}  onClick={() => this.handleClick('password')} />
        </div>
      </StyledLogin>
    )}

  renderSuccess() {
    const host = this.state.domain

    return (
      <StyledLogin>
        <Image
          width={193}
          height={66}
          alt="Curseria Logo&copy;"
          src="https://curseria.com/logo.png" />

        <h2>Obrigado pela compra!</h2>
        {host === 'confeitariacomdaninoce' ? <p>Parabéns pela compra no pré-lançamento do curso “Confeitaria com Dani Noce”! Por ter comprado nesse período, você terá acesso antecipado às aulas do curso. A data prevista para o lançamento é 31/03/2018. <br /> <br /> Te informaremos por e-mail assim que o curso estiver disponível.</p>
        :<p>Te informaremos por e-mail assim que o curso estiver disponível.</p>}

      </StyledLogin>
    )}

  renderRecover() {
    const props = this.props.session

    return (
      <StyledLogin onSubmit={ev => {
        ev.preventDefault();
        this.handleClick('recover');
      }}>
        <Image
          width={193}
          height={66}
          alt="Curseria Logo&copy;"
          src="https://curseria.com/logo.png" />

          <h2>Digite seu e-mail</h2>

          <div className="formControl">
            <InputComponent
              type="email"
              placeholder="E-mail"
              id="recover_password"
              onChange={this.handleChange}
            />
          </div>

          <div className="login--action--button">
            <a href="mailto:suporte@curseria.com" target="_blank" rel="noopener noreferrer" className="login--auth--email">DÚVIDAS?</a>
            <Button type="submit" label={props.working ? '...' : 'Entrar'} disabled={props.working} onClick={() => this.handleClick('recover')} />
          </div>

          <Link to="/" className="login--simple--link">voltar</Link>

      </StyledLogin>
    )}

  renderSuccessRecover() {
    return (
      <StyledLogin>
        <Image
          width={193}
          height={66}
          alt="Curseria Logo&copy;"
          src="https://curseria.com/logo.png" />

        <h2>Solicitação efetuada</h2>

        <p>Verifique sua caixa de email.</p>

        <Link to="/" className="login--simple--link">voltar para login</Link>

      </StyledLogin>
    )}

  render() {

    return (
      <Switch>
        <Route exact path="/forget_password" render={() => this.renderRecover()} />
        <Route exact path="/success" render={() => this.renderSuccess()} />
        <Route exact path="/success_recover" render={() => this.renderSuccessRecover()} />
        <Route exact path="/reset" render={() => this.renderResetPassword()} />
        <Route path="/" render={() => this.renderAuthentication()} />
      </Switch>
    )}
}

LoginComponent = connect(
  ({session}) => ({session}),
  {authLogin, passwordConfirmation, authRecoverPassword}
)(LoginComponent);

export default LoginComponent;
