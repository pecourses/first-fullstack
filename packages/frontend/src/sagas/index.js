import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import {createHeroSaga, getHeroesSaga} from './heroesSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_HERO, createHeroSaga);
  yield takeLatest(ACTION_TYPES.GET_HEROES, getHeroesSaga);
}
export default rootSaga;
