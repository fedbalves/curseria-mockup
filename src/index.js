import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import App from './modules/App';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';
import history from './history';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import setHeaders from './utils/setHeaders';
import { loadJwtToken, saveState } from './storage';
import throttle from 'lodash/throttle';

import './modules/typeface_sanfrancisco/index.css';
import './modules/typeface_viasans/index.css';
import './index.css';

store.subscribe(throttle(()=>{
	saveState(store.getState())
}, 1000))

if (localStorage.getItem('jwt')) {
	setHeaders(loadJwtToken())
}

console.log(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
