import { combineReducers } from 'redux';

import filterReducer from './features/filterSlice';
import sorterReducer from './features/sorterSlice';

const rootReducer = combineReducers({
  sorter: sorterReducer,
  filters: filterReducer,
});

export default rootReducer;
