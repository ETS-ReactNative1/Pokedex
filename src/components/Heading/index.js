import React from "react"
import PropTypes from 'prop-types'
import { StyledHeading } from './styles'

const Heading = ({ children, style }) => {
    return (
        <StyledHeading style={style}>
            {children}
        </StyledHeading>
    )
}

Heading.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Heading