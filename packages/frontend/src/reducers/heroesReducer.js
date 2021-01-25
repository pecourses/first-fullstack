import ACTION_TYPES from '../actions/types';

const initialState = {
  heroes: [],
  isFetching: true,
  error: null
}

function heroesReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {

    case ACTION_TYPES.GET_HEROES_REQUEST:
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: false
      }
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      const { hero } = action;

      return {
        ...state,
        heroes: [...heroes, hero],
        isFetching: true
      }
    }

    case ACTION_TYPES.GET_HEROES_SUCCESS: {
      const { heroes } = action

      return {
        ...state,
        heroes: heroes,
        isFetching: true
      }
    }

    case ACTION_TYPES.GET_HEROES_ERROR:
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      const { error } = action;

      return {
        ...state,
        isFetching: true,
        error
      }
    }

    default: {
      return state;
    }
  }
}

export default heroesReducer;