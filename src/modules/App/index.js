import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';
import LoginComponent from '../Login';
import Grid from '../../components/grid';

class App extends Component {

  renderLogin() {
    return (
      <Grid
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <LoginComponent />
      </Grid>
    )
  }

  renderApp() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }

  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route path="/classes" render={() => this.renderApp()} />
          <Route path="/" render={() => this.renderLogin()} />
        </Switch>
      </MuiThemeProvider>
    )
  }
}

export default App;
