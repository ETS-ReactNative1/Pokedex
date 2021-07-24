import { Dimensions } from 'react-native'
import { StyleSheet } from "react-native"
import styled from 'styled-components/native'
import { FontSize } from '@styles'
import Heading from '@components/Heading'
import BackIcon from '@assets/icons/back-arrow.svg'
import { SharedElement } from 'react-navigation-shared-element'

const StyledPokemon = styled.View``

const screenWidth = Dimensions.get('window').width

const BackButton = styled.TouchableOpacity`
                        background-color:black;
                    `

const StyledBackIcon = styled(BackIcon)`
                        width:${FontSize.regular}px;
                        `

const Title = styled(Heading)``

const Image = styled.Image`
                width:${screenWidth * 0.4}px;
                height:150px;
                `

const ImageWrapper = styled(SharedElement)`
                    align-items: center;
                    `

const styles = StyleSheet.create({
    imageWrapper: {
        alignItems: 'center'
    }
})
module.exports = {
    StyledPokemon,
    BackButton,
    StyledBackIcon,
    Title,
    ImageWrapper,
    Image,
    styles
}