import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './../reducers'

const store = createStore(rootReducer);

export default store;

// flux

// redux: createStore
//        combineReducers
// react-redux: connect
//              Provader