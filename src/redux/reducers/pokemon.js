import { GET_ALL_POKEMONS } from '../actionTypes'

const initialState = []

export default function pokemon (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return action.pokemons
        default:
            return state
    }
}