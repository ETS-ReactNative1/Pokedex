import styled from 'styled-components/native'
import { FontSize } from '@styles'
import Heading from '@components/Heading'
import BackIcon from '@assets/icons/back-arrow.svg'
import { SharedElement } from 'react-navigation-shared-element'

const StyledPokemon = styled.View``

/* Go Back button */
const BackButton = styled.TouchableOpacity`
                    padding:10px;
					z-index:999;
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
                height:200px;
                `

const ImageWrapper = styled(SharedElement)`
                    align-items: center;
                    justify-content:center;
                    width:100%;
                    height:40%;
					position:absolute;
                    z-index:${({isHide}) => isHide?1:500};
                    `

module.exports = {
    StyledPokemon,
    BackButton,
    StyledBackIcon,
    ImageWrapper,
    Image,
    Overlay
}