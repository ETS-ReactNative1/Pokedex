import { GET_ALL_POKEMONS } from '../actionTypes'

const initialState = {
    items: []
}

export default function pokemon (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                items: action.pokemons
            }
        default:
            return state
    }
}