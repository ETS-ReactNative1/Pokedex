import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useIsMounted } from '@functions/utilities.js'
import Animated from 'react-native-reanimated'
import { FlatList } from 'react-native'
import { getAllPokemons } from '@redux/actions/pokemon'

const useHome = () => {
    const isMounted = useIsMounted()

    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemon.items)

    const scrollY = useRef(new Animated.Value(0)).current

    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

    /**
     * Retrieve pokemons when component is mounted
     * @return {void}
     */
    useEffect(() => {
        if (isMounted.current)
            dispatch(getAllPokemons())
		return () => {
			isMounted.current = false
		}
    }, [])

    const scrollEventHandler = () => {
        return Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
        )
    }

    return {
        scrollEventHandler,
        AnimatedFlatList,
        pokemons,
        scrollY
    }
}

export default useHome