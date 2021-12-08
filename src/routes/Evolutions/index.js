import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {View} from 'react-native'
import Evolution from '@components/Evolution'
import {StyledText} from './styles'

const Evolutions = () => {
	const [evolutions, setEvolutions] = useState([])
	const pokemons = useSelector((state) => state.pokemon.items)
	const pokemon = useSelector((state) => state.pokemon.current)

	useEffect(()=>{
		if(pokemons && pokemon){
			getEvolutions(pokemons, pokemon)
		}
	},[pokemons, pokemon])

	const getEvolutions = (pokemons, pokemon) => {
		const pEvols = pokemon.next_evolution
		if(pEvols){
			const _evolutions = []
			_evolutions.push({...pokemon})
			for(const pEvol of pEvols){
				const pEvolNum = pEvol.num
				const evolPokemon = pokemons.find(_pokemon => _pokemon.num === pEvolNum)
				_evolutions.push(evolPokemon)
			}
			setEvolutions([..._evolutions])
		}
	}

	return (
		<View>
			{
				evolutions.length > 1
				?evolutions.map((evolution, ind) => {
					if(evolutions[ind + 1]){
						return (
							<Evolution key={ind} fromPokemon={evolution} toPokemon={evolutions[ind + 1]}/>
						)
					}
				})
				:<StyledText>No evolution</StyledText>
			}
		</View>
	)
}

export default Evolutions