import React from 'react'
import PropTypes from 'prop-types'
import { StyledType, StyledText } from './styles'

const Type = ({ style, type }) => {
    return (
        <StyledType style={style} type={type}>
            <StyledText>
                {type}
            </StyledText>
        </StyledType>
    )
}

Type.propTypes = {
    style: PropTypes.object
}

export default Type