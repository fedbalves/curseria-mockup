import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { LoginReducer } from './modules/Login/reducer';
import { ContentReducer } from './modules/Content/reducer';

export default combineReducers({
  router: routerReducer,
  session: LoginReducer,
  content: ContentReducer,
})
