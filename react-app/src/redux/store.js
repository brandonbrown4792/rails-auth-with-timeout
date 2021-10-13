import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
