import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import {Image, 
	Name, 
	StyledEvolution, 
	StyledArrow, 
	} from './styles'
import PokemonDefaultImg from '@assets/images/pokemon-default.png'

const Evolution = ({fromPokemon, toPokemon}) => {
	return (
		<StyledEvolution>
			<View>
				<Image resizeMode='contain' defaultSource={PokemonDefaultImg} source={{ uri: fromPokemon.img }} />
				<Name>{fromPokemon.name}</Name>
			</View>
			<StyledArrow />
			<View>
				<Image resizeMode='contain' defaultSource={PokemonDefaultImg} source={{ uri: toPokemon.img }} />
				<Name>{toPokemon.name}</Name>
			</View>
		</StyledEvolution>
	)
}

Evolution.propTypes = {
	fromPokemon:PropTypes.object,
	toPokemon:PropTypes.object
}

export default Evolution