import { GET_ALL_POKEMONS, SET_CURRENT } from '../actionTypes'
import pokemons from '@redux/pokemon.json'

export const getAllPokemons = (page = 1, length = 50) => {
    return dispatch => {
        dispatch({
            type: GET_ALL_POKEMONS,
            pokemons
        })
    }
}

export const setCurrent = (pokemon) => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT,
            pokemon
        })
    }
}