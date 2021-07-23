import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native'
import Searchbar from '@components/Searchbar'
import PokemonCard from '@components/PokemonCard'
import { getAllPokemons } from '../../redux/actions/pokemon'
// import pokemons from '@redux/pokemon.json'
import { StyledHome, Title, Description, styles } from './styles'

export default Home = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemon.items)

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [])

    return (
        <StyledHome>
            <Title>
                Pokedex
            </Title>
            <Description>
                Search for Pokemon by name or using the National Pokedex number.
            </Description>
            <Searchbar style={styles.searchbar} />
            <ScrollView>
                {
                    pokemons.length > 0 && pokemons.map(pokemon =>
                        <PokemonCard key={pokemon.id} number={pokemon.num}
                            name={pokemon.name}
                            types={pokemon.type}
                            image={pokemon.img}
                            style={styles.pokemonCard} />
                    )
                }
            </ScrollView>
        </StyledHome>
    )
}