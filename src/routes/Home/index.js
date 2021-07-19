import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Colors } from '@styles'
import Heading from '@components/Heading'
import Span from '@components/Span'
import Searchbar from '@components/Searchbar'
import PokemonCard from '@components/PokemonCard'

const vSpacing = 10

const StyledHome = styled.View`
                    padding:50px 30px;
                    `

const Title = styled(Heading)`
                margin-bottom:${vSpacing}px;
                `

const Description = styled(Span)`
                    color:${Colors.mountainMist};
                    `

const styles = StyleSheet.create({
    searchbar: {
        marginVertical: vSpacing
    }
})

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