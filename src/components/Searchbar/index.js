import React from "react"
import PropTypes from 'prop-types'
import { StyledSearchbar, StyledSearchIcon, Input } from './styles'

const Searchbar = ({ style }) => {
    return (
        <StyledSearchbar
            style={style}
        >
            <StyledSearchIcon />
            <Input placeholder='What pokemon are you looking for?' />
        </StyledSearchbar>
    )
}

Searchbar.propTypes = {
    style: PropTypes.array
}

export default Searchbar