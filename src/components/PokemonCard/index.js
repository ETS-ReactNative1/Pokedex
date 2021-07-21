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
    styles
} from './styles'

const PokemonCard = ({ number, name, types, image, style }) => {
    const { color } = usePokemonCard(image)

    return (
        <StyledPokemonCard style={[{ backgroundColor: color }, style]}>
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
            <Image resizeMode='contain' defaultSource={PokemonDefaultImg} source={{ uri: image }} />
        </StyledPokemonCard>
    )
}

PokemonCard.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
    image: PropTypes.string,
    style: PropTypes.object
}

export default PokemonCard