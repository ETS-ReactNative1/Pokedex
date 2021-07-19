import React from "react"
import PropTypes from 'prop-types'
import SearchIcon from '@assets/icons/search.svg'
import { StyledSearchbar, Input, styles } from './styles'

const Searchbar = ({ style }) => {
    return (
        <StyledSearchbar
            style={style}
        >
            <SearchIcon style={styles.searchIcon} />
            <Input placeholder='What pokemon are you looking for?' />
        </StyledSearchbar>
    )
}

Searchbar.propTypes = {
    style: PropTypes.object
}

export default Searchbar