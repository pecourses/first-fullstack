import {applyMiddleware, createStore} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

// const logger = store => next => action => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }

const sagaMiddleware = createSagaMiddleware();

const rootMiddleware = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, rootMiddleware);

sagaMiddleware.run(rootSaga);

export default store;

// flux

// redux: createStore
//        combineReducers
//        applyMiddleware
// react-redux: connect / useSelector + useDispatch
//              Provider
// redux-saga: createReduxSaga
//     sagaMiddleware->rootSaga->(rest sagas)
