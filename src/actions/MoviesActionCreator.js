import * as MoviesAPI from '../apis/MoviesAPI';
import MoviesActionConstants from '../constants/MoviesActionConstants'

export const fetchMoviesSuccess = (movies) => ({
    type: MoviesActionConstants.MOVIES_FETCH_SUCCESS,
    payload: movies
})

export const fetchMovies = () => {
    return function(dispatch, getState) {
        return (
            MoviesAPI.fetchMovies()
            .then( (response) => {
                dispatch(fetchMoviesSuccess(response.data));
            })
        );
      }
}