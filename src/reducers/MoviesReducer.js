import MoviesActionConstants from '../constants/MoviesActionConstants'

export const MoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case MoviesActionConstants.MOVIES_FETCH_SUCCESS:
        return { ...state, movies: action.payload }
        default:
        return state;
    }
};