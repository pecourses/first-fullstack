import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
}

let serial = 0;

const todoReducer = (state = initialState, action) => {
  const { type } = action;
  const { tasks, isFetching, error } = state;
  switch (type) {

    case ACTION_TYPES.CREATE_TASK: {
      const { values } = action;
      const newTask = {
        ...values, id: serial++
      };

      const newTasks = [...tasks, newTask];

      return {
        ...state, tasks: newTasks
      }
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { value, taskIndex } = action;

      const newTasks = [...tasks];

      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        isDone: value
      }

      return {
        ...state, tasks: newTasks
      }
    }
    case ACTION_TYPES.REMOVE_TASK: {
      const { taskIndex } = action;

      const newTasks = [...tasks]

      newTasks.splice(taskIndex, 1);

      return {
        ...state, tasks: newTasks
      }
    }
    default: { return state; }
  }
}

export default todoReducer;