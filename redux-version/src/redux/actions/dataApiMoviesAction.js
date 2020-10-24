import { API_MOVIES_FETCH } from './types'
import { API_LOADING } from './types'
import { API_ERROR } from './types'

export const dataApiMoviesAction = (movie) => {
    return async function (dispatch) {

        const apiUrl = "https://www.omdbapi.com/?apikey=4ec44f58"

        let loading = true;
        dispatch({ type: API_LOADING, payload: loading })

        const responseMovies = await fetch(`${apiUrl}&s=${movie}`)
        const results = await responseMovies.json()
        const { Search = [], Error, Response } = results

        loading = false;

        if (Response === "False") {
            dispatch({ type: API_ERROR, payload: Error })
            dispatch({ type: API_LOADING, payload: loading })
            return
        } else {
            dispatch({ type: API_MOVIES_FETCH, payload: Search })
            dispatch({ type: API_LOADING, payload: loading })
            dispatch({ type: API_ERROR, payload: false })
        }
    }
}