import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { FontSize } from '@styles/typography'

const StyledSpan = styled.Text`
                    font-size:${FontSize.regular}px;
                    line-height:${FontSize.regular * 1.5}px;
                    `

const Span = ({ children, style }) => {
    return (
        <StyledSpan style={style}>
            {children}
        </StyledSpan>
    )
}

Span.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Span