import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
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
    flex-direction:row;
    position:relative;
    elevation:5;
    shadow-color: #000;
    shadow-offset: 0 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
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
    flex-direction:row;
    flex-wrap:wrap;
`

const screenWidth = Dimensions.get('window').width

const Column = styled.View`
                width:${screenWidth * 0.6}px;
                `

const Image = styled.Image`
                width:${screenWidth * 0.4}px;
                height:150px;
                position:absolute;
                right:0;
                top:0;
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
    Image,
    styles
}