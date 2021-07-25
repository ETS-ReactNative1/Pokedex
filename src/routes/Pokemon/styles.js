import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { FontSize } from '@styles'
import Heading from '@components/Heading'
import BackIcon from '@assets/icons/back-arrow.svg'
import { SharedElement } from 'react-navigation-shared-element'

const StyledPokemon = styled.View``

/* Go Back button */
const BackButton = styled.TouchableOpacity`
                    padding:10px;
                    `

const StyledBackIcon = styled(BackIcon)`
                        width:${FontSize.regular}px;
                        transform:scaleX(-1);
                        `

const Overlay = styled.View`
                position:absolute;
                height:100%;
                width:100%;
                opacity:0.8;
                `

const Image = styled.Image`
                aspect-ratio:1;
                height:150px;
                `

const ImageWrapper = styled(SharedElement)`
                    align-items: center;
                    `

module.exports = {
    StyledPokemon,
    BackButton,
    StyledBackIcon,
    ImageWrapper,
    Image,
    Overlay
}