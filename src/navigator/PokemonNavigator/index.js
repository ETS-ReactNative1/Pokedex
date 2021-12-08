import React, {useState, useRef} from 'react'
import { useSelector } from 'react-redux'
import PagerView from 'react-native-pager-view'
import Status from '@routes/Status'
import Evolutions from '@routes/Evolutions'
import { View } from 'react-native'
import Tab from '@components/Tab'
import {StyledView, TabsWrapper} from './styles'

export default PokemonNavigator = () => {
	const [currentPage, setCurrentPage] = useState(0)
	const pokemon = useSelector((state) => state.pokemon.current)

	const pagerViewRef = useRef(null)

	return (
		<StyledView>
			<TabsWrapper>
				<Tab color={pokemon.color} 
				isCurrent={currentPage === 0}
				onPress={() => pagerViewRef.current.setPage(0)}>
					Stats
				</Tab>
				<Tab color={pokemon.color} 
				isCurrent={currentPage === 1}
				onPress={() => pagerViewRef.current.setPage(1)}>
					Evolutions
				</Tab>
				<Tab color={pokemon.color} 
				isCurrent={currentPage === 2}
				onPress={() => pagerViewRef.current.setPage(2)}>
					Moves
				</Tab>
			</TabsWrapper>
			<PagerView ref={pagerViewRef}
			style={{flex:1}} 
			initialPage={0}
			scrollEnabled={true}
			onPageSelected={event => setCurrentPage(event.nativeEvent.position)}
			>
				<View key="1">
					<Status/>
				</View>
				<View key="2">
					<Evolutions/>
				</View>
			</PagerView>
		</StyledView>
	)
}