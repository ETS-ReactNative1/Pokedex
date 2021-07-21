import { SET_IS_LOADING, SET_ERROR } from "../actionTypes";

const setIsLoading = (isLoading) => {
    return {
        type: SET_IS_LOADING,
        status: isLoading
    }
}

const setError = (errorMessage) => {
    return {
        type: SET_ERROR,
        message: errorMessage
    }
}