import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import heroesReducer from './heroesReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  heroes: heroesReducer
});

export default rootReducer;
