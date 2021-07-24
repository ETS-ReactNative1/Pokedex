import React from "react"
import PropTypes from 'prop-types'
import Type from '@components/Type'
import usePokemonCard from './usePokemonCard'
import PokemonDefaultImg from '@assets/images/pokemon-default.png'
import {
    StyledPokemonCard,
    Column,
    Number,
    Name,
    TypesWrapper,
    Image,
    ImageWrapper,
    styles
} from './styles'

const PokemonCard = ({ number, name, types, image, style, onPress }) => {
    const { color } = usePokemonCard(image)

    return (
        <StyledPokemonCard style={[{ backgroundColor: color }, style]} onPress={onPress}>
            <Column>
                <Number>
                    #{number}
                </Number>
                <Name>
                    {name}
                </Name>
                <TypesWrapper>
                    {
                        types.map((type, ind) =>
                            <Type key={ind}
                                type={type}
                                style={styles.type} />
                        )
                    }
                </TypesWrapper>
            </Column>
            <ImageWrapper id={number}>
                <Image resizeMode='contain' defaultSource={PokemonDefaultImg} source={{ uri: image }} />
            </ImageWrapper>
        </StyledPokemonCard>
    )
}

PokemonCard.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
    image: PropTypes.string,
    style: PropTypes.object,
    onPress: PropTypes.func
}

export default PokemonCard