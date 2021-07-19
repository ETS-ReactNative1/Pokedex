import React from "react"
import PropTypes from 'prop-types'
import {
    StyledPokemonCard,
    Number,
    Name,
    TypesWrapper,
    styles
} from './styles'
import Type from "@components/Type"


const PokemonCard = ({ number, name, types }) => {
    return (
        <StyledPokemonCard>
            <Number>
                {number}
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
        </StyledPokemonCard>
    )
}

PokemonCard.propTypes = {
    number: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.array
}

export default PokemonCard