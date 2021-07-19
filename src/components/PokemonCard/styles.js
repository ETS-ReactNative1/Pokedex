import styled from 'styled-components/native'
import { StyleSheet } from "react-native"
import { Colors } from '@styles/color'
import Heading from '@components/Heading'
import Span from '@components/Span'

const StyledPokemonCard = styled.TouchableOpacity`
    padding:20px 10px;
    border-radius:10px;
`

const sharedStyles = `
    font-weight:bold;
`

const Number = styled(Span)`
    ${sharedStyles}
    color:${Colors.fernGreen};
`

const Name = styled(Heading)`
    color:${Colors.white};
    text-transform:capitalize;
`

const TypesWrapper = styled.View`
    display:flex;
    flex-direction:row;
`

const styles = StyleSheet.create({
    type: {
        marginRight: 10
    }
})

module.exports = {
    StyledPokemonCard,
    Number,
    Name,
    TypesWrapper,
    styles
}