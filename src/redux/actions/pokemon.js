import { GET_ALL_POKEMONS } from '../actionTypes'
import pokemons from '@redux/pokemon.json'

export const getAllPokemons = (page = 1, length = 50) => {
    return dispatch => {
        dispatch({
            type: GET_ALL_POKEMONS,
            pokemons
        })
    }
}