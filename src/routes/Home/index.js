import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { FontSize, Colors } from '@styles'
import Searchbar from '@components/Searchbar'

const vSpacing = 10

const StyledHome = styled.View`
                    padding:50px 30px;
                    `

const Title = styled.Text`
                font-size:${FontSize.large}px;
                font-weight:bold;
                margin-bottom:${vSpacing}px;
                `

const Description = styled.Text`
                    font-size:${FontSize.regular}px;
                    color:${Colors.mountainMist};
                    line-height:${FontSize.regular * 1.5}px;
                    `

const styles = StyleSheet.create({
    searchbar: {
        marginTop: vSpacing,
        marginBottom: vSpacing
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
        </StyledHome>
    )
}