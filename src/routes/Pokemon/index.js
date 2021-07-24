import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledPokemon, BackButton, StyledBackIcon, Title, Image, ImageWrapper } from './styles'

const Pokemon = ({ route, navigation }) => {

    const { pokemon } = route.params

    return (
        <StyledPokemon>
            <BackButton onPress={() => navigation.goBack()}>
                <StyledBackIcon />
            </BackButton>
            <Title>{pokemon.name}</Title>
            <ImageWrapper id={pokemon.num}>
                <Image resizeMode='contain' source={{ uri: pokemon.img }} />
            </ImageWrapper>
        </StyledPokemon>
    )
}

Pokemon.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object
}

Pokemon.sharedElements = (route, otherRoute, showing) => {
    const { pokemon } = route.params
    return [pokemon.num]
}

export default Pokemon