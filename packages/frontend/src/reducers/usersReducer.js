import ACTION_TYPES from '../actions/types';

const initialState = {
  users: [],
  isFetching: false,
  error: null
};

let id = 0;

const usersReduser = (state = initialState, action) => {
  const { type } = action;
  const { users } = state;
  switch (type) {
    case ACTION_TYPES.CREATE_USER: {
      const { data } = action;
      const newUser = {
        ...data, idUser: id++
      };
      const newUsers = [...users, newUser];

      return {
        ...state, users: newUsers
      };
    }

    case ACTION_TYPES.UPDATE_USER: {
      const { updUserArr } = action;
      const newUsers = [...users];

      updUserArr.forEach((updUser) => {
        const userIndex = users.findIndex((user) => user.Id === updUser.Id);
        newUsers[userIndex] = updUser;
      });

      return {
        ...state,
        newUsers
      };
    }

    case ACTION_TYPES.REMOVE_USER: {
      const { userIds } = action;
      const newUsers = [...users];

      userIds.forEach((userId) => {
        const userIndex = users.findIndex((user) => user.Id === userId);
        newUsers.splice(userIndex, 1);
      });

      return {
        ...state,
        newUsers
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReduser;

// const userListActionReducer = (state = initialValues, action) => {
//   const { type } = action;
//   const { users } = state;
//   switch (type) {
//     case ACTION_TYPES.CREATE_USERS: {
//       const { newUserArr } = action;
//       const newUsers = [...users].concat(newUserArr);
//       return {
//         ...state,
//         newUsers,
//       };
//     }
//     case ACTION_TYPES.UPDATE_USERS: {
//       const { updUserArr } = action;
//       const newUsers = [...users];
//       updUserArr.forEach((updUser) => {
//         const userIndex = users.findIndex((user) => user.Id === updUser.Id);
//         newUsers[userIndex] = updUser;
//       });
//       return {
//         ...state,
//         newUsers,
//       };
//     }
//     case ACTION_TYPES.REMOVE_USERS: {
//       const { userIds } = action;
//       const newUsers = [...users];
//       userIds.forEach((userId) => {
//         const userIndex = users.findIndex((user) => user.Id === userId);
//         newUsers.splice(userIndex, 1);
//       });
//       return {
//         ...state,
//         newUsers,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
