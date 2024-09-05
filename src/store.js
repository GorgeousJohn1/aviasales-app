import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk))
);

export default store;
