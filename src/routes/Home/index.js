import React from 'react'
import { ScrollView } from 'react-native'
import Searchbar from '@components/Searchbar'
import PokemonCard from '@components/PokemonCard'
import pokemons from '../../pokemon.json'
import { StyledHome, Title, Description, styles } from './styles'

export default Home = () => {
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
                    pokemons.map(pokemon =>
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