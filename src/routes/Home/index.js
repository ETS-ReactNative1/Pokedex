import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { Pokemon } from '@routes'
import Searchbar from '@components/Searchbar'
import PokemonCard from '@components/PokemonCard'
import { getAllPokemons } from '@redux/actions/pokemon'
import { StyledHome, Title, Description, styles } from './styles'

const Home = ({ navigation }) => {
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
                            style={styles.pokemonCard}
                            onPress={() => navigation.navigate(Pokemon, { pokemon })}
                        />
                    )
                }
            </ScrollView>
        </StyledHome>
    )
}

Home.propTypes = {
    navigation: PropTypes.object
}

export default Home