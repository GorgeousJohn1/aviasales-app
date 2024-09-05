import { combineReducers } from 'redux';

import filterReducer from './features/filterSlice';
import sorterReducer from './features/sorterSlice';
import ticketsReducer from './features/ticketsSlice';

const rootReducer = combineReducers({
  sorter: sorterReducer,
  filters: filterReducer,
  tickets: ticketsReducer,
});

export default rootReducer;
