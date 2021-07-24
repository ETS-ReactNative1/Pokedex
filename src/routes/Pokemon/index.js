import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPokemons } from '@redux/actions/pokemon'
import { StyledPokemon, Title } from './styles'

export default Pokemon = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])

    return (
        <StyledPokemon>
            <Title>Something</Title>
        </StyledPokemon>
    )
}