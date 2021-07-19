import React from 'react'
import Searchbar from '@components/Searchbar'
import PokemonCard from '@components/PokemonCard'
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
            <PokemonCard number={12} name='something' types={['bug', 'poison']} />
        </StyledHome>
    )
}