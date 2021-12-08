import React from "react"
import PropTypes from 'prop-types'
import { StyledSearchbar, StyledSearchIcon, Input } from './styles'

const Searchbar = ({ style, onChangeText, value }) => {
    return (
        <StyledSearchbar
            style={style}
        >
            <StyledSearchIcon />
            <Input placeholder='What pokemon are you looking for?' onChangeText={onChangeText} value={value}/>
        </StyledSearchbar>
    )
}

Searchbar.propTypes = {
    style: PropTypes.array,
	onChangeText: PropTypes.func,
	value:PropTypes.string
}

export default Searchbar