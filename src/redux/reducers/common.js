import { SET_IS_LOADING, SET_ERROR } from "../actionTypes"

const initialState = {
    isLoading: false,
    error: null
}

export default function commonReducer (state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.status
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.message
            }
    }
}