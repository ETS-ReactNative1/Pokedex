import React from "react"
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { FontSize } from '@styles/typography'
import { Colors } from '@styles/color'
import Heading from '@components/Heading'
import Span from '@components/Span'
import Type from "@components/Type"

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

const PokemonCard = ({ number, name, types }) => {
    return (
        <StyledPokemonCard>
            <Number>
                {number}
            </Number>
            <Name>
                {name}
            </Name>
            {
                types.map((type, ind) =>
                    <Type key={ind} type={type} />
                )
            }
        </StyledPokemonCard>
    )
}

PokemonCard.propTypes = {
    number: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.array
}

export default PokemonCard