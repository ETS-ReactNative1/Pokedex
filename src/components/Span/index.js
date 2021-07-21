import React from 'react'
import PropTypes from 'prop-types'
import { StyledSpan } from './styles'

const Span = ({ children, style }) => {
    return (
        <StyledSpan style={style}>
            {children}
        </StyledSpan>
    )
}

Span.propTypes = {
    children: PropTypes.node,
    style: PropTypes.array
}

export default Span