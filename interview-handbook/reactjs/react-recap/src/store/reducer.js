import * as types from "./action.types"

const initialState = {
  movie: {
    loading: false,
    error: false,
  },
  data: []
}
export const Reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.GET_MOVIE_DETAILS_LOADING:
      return {
        ...state,
        movie: {
          loading: true,
          error: false
        }
      }
    case types.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: {
          loading: false,
          error: false,
        },
        data: [...payload],
      };
    case types.GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movie: {
          loading: false,
          error: true,
        },
      };

    case types.DELETE_MOVIE_DETAILS_LOADING:
      return {
        ...state,
        movie: {
          loading: true,
          error: false,
        },
      };
    case types.DELETE_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: {
          loading: false,
          error: false,
        },
      };
    case types.DELETE_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movie: {
          loading: false,
          error: true,
        },
      };

    default:
      return state;
  }
}