import React from "react"
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { FontSize } from '@styles/typography'

const StyledHeading = styled.Text`
                        font-size:${FontSize.large}px;
                        font-weight:bold;
                        `

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