import * as types from '../actions/types'

const INITIAL_STATE = { id: '', movie: {}, cast: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SELECTED_MOVIE:
      return Object.assign({}, state, { id: action.movie.id })
    case types.RESET_SELECTED_MOVIE:
      return INITIAL_STATE
    default:
      return state
  }
}
