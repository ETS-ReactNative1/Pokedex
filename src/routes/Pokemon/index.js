import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ImageBackground } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import Status from '@routes/Status'
import { useBgColor } from '@functions/utilities.js'
import PokemonLogo from '@assets/images/pokeball.png'
import { Colors } from '@styles/color'
import { StyledPokemon, Overlay, BackButton, StyledBackIcon, Image, ImageWrapper } from './styles'

const Pokemon = ({ route, navigation }) => {
    const { pokemon } = route.params

    const { color } = useBgColor(pokemon.img)

    return (
        <StyledPokemon>
            <ImageBackground source={PokemonLogo} resizeMode='contain' style={{ width: '100%', height: '100%' }}>
                <Overlay style={{ backgroundColor: color }}>
                </Overlay>
                <BackButton onPress={() => navigation.goBack()}>
                    <StyledBackIcon fill={Colors.black} />
                </BackButton>
                <BottomSheet
                    snapPoints={['100%', '70%', '20%']}
                    initialSnap={1}
                    renderContent={Status}
                    borderRadius={50}
                />
                <ImageWrapper id={pokemon.num}>
                    <Image resizeMode='contain' source={{ uri: pokemon.img }} />
                </ImageWrapper>
            </ImageBackground>
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