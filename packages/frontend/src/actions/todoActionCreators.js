import ACTION_TYPES from './types';

export const createTask = (values) => ({
  type: ACTION_TYPES.CREATE_TASK,
  values
})

export const updateTask = (value, taskIndex) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  taskIndex,
  value,
});

export const removeTask = (taskIndex) => ({
  type: ACTION_TYPES.REMOVE_TASK,
  taskIndex,
});
