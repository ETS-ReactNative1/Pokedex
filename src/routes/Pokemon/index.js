import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { ImageBackground } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import Profile from '@routes/Profile'
import { useBgColor } from '@functions/utilities.js'
import { setCurrent } from '@redux/actions/pokemon'
import PokemonLogo from '@assets/images/pokeball.png'
import { Colors } from '@styles/color'
import { StyledPokemon, Overlay, BackButton, StyledBackIcon, Image, ImageWrapper, Name } from './styles'

const Pokemon = ({ route, navigation }) => {
	const [isOpen, setIsOpen] = useState(false)
    const { pokemon } = route.params
    const { color } = useBgColor(pokemon.img)
	const dispatch = useDispatch()

	const bottomSheetRef = useRef(null)

	useEffect(() => {
		if(pokemon && color){
			dispatch(setCurrent({...pokemon,color}))
		}
	}, [pokemon, color])

    return (
        <StyledPokemon>
            <ImageBackground source={PokemonLogo} resizeMode='contain' style={{ width: '100%', height: '100%' }}>
                <Overlay style={{ backgroundColor: color }}>
                </Overlay>
                <BackButton onPress={() => navigation.goBack()}>
                    <StyledBackIcon fill={Colors.black} />
                </BackButton>
                <BottomSheet
					ref={bottomSheetRef}
                    // snapPoints={['100%', '70%']}
                    snapPoints={['90%', '70%']}
                    initialSnap={1}
                    renderContent={() => <Profile name={pokemon.name} types={pokemon.type} isHideHeader={isOpen}/>}
                    borderRadius={50}
					onOpenStart={()=>setIsOpen(false)}
					onOpenEnd={() => setIsOpen(true)}
					onCloseStart={() => setIsOpen(false)}
                />
                <ImageWrapper id={pokemon.num} isHide={isOpen}>
                    <Image resizeMode='contain' source={{ uri: pokemon.img }} />
                </ImageWrapper>
				{
					isOpen && <Name>{pokemon && pokemon.name}</Name>
				}
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