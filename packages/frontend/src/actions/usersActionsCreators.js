import ACTION_TYPES from './types';

export const createUser = (data) => ({
  type: ACTION_TYPES.CREATE_USER,
  data
});

export const updateUser = (data, idUser) => ({
  type: ACTION_TYPES.UPDATE_USER,
  data,
  idUser
});

export const removeUser = (idUser) => ({
  type: ACTION_TYPES.REMOVE_USER,
  idUser
});
