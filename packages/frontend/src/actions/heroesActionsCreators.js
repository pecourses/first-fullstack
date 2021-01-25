import ACTION_TYPES from './types';
// Create
export const createHero = (data) => ({
  type: ACTION_TYPES.CREATE_HERO,
  data
})

export const createHeroRequest = () => ({
  type: ACTION_TYPES.CREATE_HERO_REQUEST
})

export const createHeroSuccess = (hero) => ({
  type: ACTION_TYPES.CREATE_HERO_SUCCESS,
  hero
})

export const createHeroError = (error) => ({
  type: ACTION_TYPES.CREATE_HERO_ERROR,
  error
})
// Get
export const getHeroes = () => ({
  type: ACTION_TYPES.GET_HEROES,
})

export const getHeroesRequest = () => ({
  type: ACTION_TYPES.GET_HEROES_REQUEST
})

export const getHeroesSuccess = (heroes) => ({
  type: ACTION_TYPES.GET_HEROES_SUCCESS,
  heroes
})

export const getHeroesError = (error) => ({
  type: ACTION_TYPES.GET_HEROES_ERROR,
  error
})
