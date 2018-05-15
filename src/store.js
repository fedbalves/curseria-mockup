import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { routerMiddleware } from 'react-router-redux';
import history from './history';
import { loadState } from './storage';

import rootEpic from './epics'
import rootReducer from './reducers'

const epicMiddleware = createEpicMiddleware(rootEpic);
const persistedState = loadState();

const store = compose(
  applyMiddleware(
    epicMiddleware,
    routerMiddleware(history),
    // createLogger(),
    promise(),
  ),
)(createStore)

export default store(rootReducer, persistedState);
