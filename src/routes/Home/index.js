import React from 'react'
import PropTypes from 'prop-types'
import Animated from 'react-native-reanimated'
import useHome from './useHome'
import { Pokemon } from '@routes'
import { StyledHome, Title, Description, StyledSearchbar, StyledPokemonCard } from './styles'

const Home = ({ navigation }) => {
    const { scrollEventHandler, AnimatedFlatList, pokemons, scrollY } = useHome()

    return (
        <StyledHome>
            <Title>
                Pokedex
            </Title>
            <Description>
                Search for Pokemon by name or using the National Pokedex number.
            </Description>
            <StyledSearchbar />
            {
                pokemons.length > 0 && <AnimatedFlatList
                    onScroll={scrollEventHandler()}
                    data={pokemons}
                    keyExtractor={(item) => item.num}
                    removeClippedSubviews={true}
                    renderItem={({ item, index }) => {
                        const cardHeight = 170

                        const inputRange = [
                            -1,
                            0,
                            cardHeight * index,
                            cardHeight * (index + 2)
                        ]

                        const scale = scrollY.interpolate({
                            inputRange,
                            outputRange: [1, 1, 1, 0] //size at every point in keyframe
                        })

                        return <Animated.View style={{ transform: [{ scale }] }}>
                            <StyledPokemonCard number={item.num}
                                name={item.name}
                                types={item.type}
                                image={item.img}
                                onPress={() => navigation.navigate(Pokemon, { pokemon: item })}
                            />
                        </Animated.View>
                    }}
                />
            }
            {/* <ScrollView>
                {
                    pokemons.length > 0 && pokemons.map(pokemon =>
                        <StyledPokemonCard key={pokemon.id} number={pokemon.num}
                            name={pokemon.name}
                            types={pokemon.type}
                            image={pokemon.img}
                            style={styles.pokemonCard}
                            onPress={() => navigation.navigate(Pokemon, { pokemon })}
                        />
                    )
                }
            </ScrollView> */}
        </StyledHome>
    )
}

Home.propTypes = {
    navigation: PropTypes.object
}

export default Home