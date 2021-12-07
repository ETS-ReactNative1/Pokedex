import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'
import {StyledStats} from './styles'

const Status = () => {
	const [base, setBase] = useState({
		HP:0,
		Attack:0,
		Defense:0,
		SAT:0,
		SDE:0,
		SPD:0
	})
	const pokemon = useSelector((state) => state.pokemon.current)

	useEffect(()=>{
		if(pokemon && pokemon.base){
			const pBase = pokemon.base
			setBase({
				HP:pBase.HP,
				Attack:pBase.Attack,
				Defense:pBase.Defense,
				SAT:pBase['Sp. Attack'],
				SDE:pBase['Sp. Defense'],
				SPD:pBase.Speed
			})
		}
	}, [pokemon])

	return (
		<View>
			<StyledStats label='HP' value={base.HP} labelColor={pokemon.color}/>
			<StyledStats label='ATK' value={base.Attack} labelColor={pokemon.color}/>
			<StyledStats label='DEF' value={base.Defense} labelColor={pokemon.color}/>
			<StyledStats label='SAT' value={base.SAT} labelColor={pokemon.color}/>
			<StyledStats label='SDE' value={base.SDE} labelColor={pokemon.color}/>
			<StyledStats label='SPD' value={base.SPD} labelColor={pokemon.color}/>
		</View>
	)
}

export default Status