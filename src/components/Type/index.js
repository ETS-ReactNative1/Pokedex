import React from 'react'
import PropTypes from 'prop-types'
import { StyledType, StyledText } from './styles'
import useType from './useType'

const Type = ({ style, type }) => {
    const { getIcon } = useType()

    return (
        <StyledType style={style} type={type}>
            {
                getIcon(type)
            }
            <StyledText>
                {type}
            </StyledText>
        </StyledType>
    )
}

Type.propTypes = {
    style: PropTypes.array
}

export default Type