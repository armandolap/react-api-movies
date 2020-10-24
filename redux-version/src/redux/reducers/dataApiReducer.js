import { API_MOVIES_FETCH } from '../actions/types'
import { API_DETAIL_FETCH } from '../actions/types'
import { API_LOADING } from '../actions/types'
import { API_ERROR } from '../actions/types'

const initialState = {
     dataMovies: false,
     dataDetail: false,
     loading: false,
     err: false
}

export default function (state = initialState, action) {
     switch (action.type) {
          case API_MOVIES_FETCH:
               return {
                    ...state,
                    dataMovies: action.payload
               }
          case API_DETAIL_FETCH:
               return {
                    ...state,
                    dataDetail: action.payload
               }
          case API_LOADING:
               return {
                    ...state,
                    loading: action.payload
               }
          case API_ERROR:
               return {
                    ...state,
                    err: action.payload
               }
          default:
               return state;
     }
}