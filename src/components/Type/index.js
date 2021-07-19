import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Colors } from '@styles/color'

const StyledType = styled.View``

const StyledText = styled.Text`
                    color:${Colors.white};
                    `

const Type = ({ style, type }) => {
    const getBgColor = () => {

    }

    return (
        <StyledType style={style}>
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