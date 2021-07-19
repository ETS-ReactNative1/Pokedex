import styled from 'styled-components/native'
import { StyleSheet } from "react-native"
import { Colors } from '@styles/color'
import Heading from '@components/Heading'
import Span from '@components/Span'

/* set of styles shared among multiple components */
const sharedStyles = `
    font-weight:bold;
`

/* styled components */
const StyledPokemonCard = styled.TouchableOpacity`
    padding:20px 10px;
    border-radius:10px;
`

const Column = styled.View``

const Number = styled(Span)`
    ${sharedStyles}
    color:${Colors.fernGreen};
`

const Name = styled(Heading)`
    color:${Colors.white};
    text-transform:capitalize;
`

const TypesWrapper = styled.View`
    flex-direction:row;
`

const styles = StyleSheet.create({
    type: {
        marginRight: 10
    }
})

module.exports = {
    StyledPokemonCard,
    Column,
    Number,
    Name,
    TypesWrapper,
    styles
}