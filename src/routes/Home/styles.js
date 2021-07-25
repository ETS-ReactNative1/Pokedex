import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Colors } from '@styles'
import Heading from '@components/Heading'
import Span from '@components/Span'
import Searchbar from '@components/Searchbar'
import PokemonCard from '@components/PokemonCard'

//  vertical margin between components
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

const StyledSearchbar = styled(Searchbar)`
                        margin:${vSpacing}px 0;
                        `

const StyledPokemonCard = styled(PokemonCard)`
                            margin-bottom:${vSpacing}px;
                            `

module.exports = {
    StyledHome,
    Title,
    Description,
    StyledSearchbar,
    StyledPokemonCard
}