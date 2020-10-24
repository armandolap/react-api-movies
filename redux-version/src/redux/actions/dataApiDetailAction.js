import { API_DETAIL_FETCH } from './types'
import { API_LOADING } from './types'
import { API_ERROR } from './types'

export const dataApiDetailAction = (movieId) => {
    return async function (dispatch) {

        const apiUrl = "https://www.omdbapi.com/?apikey=4ec44f58"

        let loading = true;
        dispatch({ type: API_LOADING, payload: loading })

        const responseDetail = await fetch(`${apiUrl}&i=${movieId}`)
        const results = await responseDetail.json()
        const { Error, Response } = results

        loading = false;

        if (Response === "False") {
            dispatch({ type: API_ERROR, payload: Error })
            dispatch({ type: API_LOADING, payload: loading })
            dispatch({ type: API_ERROR, payload: false })
            return
        } else {
            dispatch({ type: API_DETAIL_FETCH, payload: results })
            dispatch({ type: API_LOADING, payload: loading })
            dispatch({ type: API_ERROR, payload: false })
        }
    }
}