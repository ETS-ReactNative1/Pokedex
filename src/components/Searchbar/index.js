import React from "react"
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import SearchIcon from '@assets/icons/search.svg'
import { Colors, FontSize } from '@styles'

const StyledSearchbar = styled.View`
                            background-color:${Colors.wildSand};
                            font-size:${FontSize.regular}px;
                            padding:15px;
                            border-radius:10px;
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                        `

const Input = styled.TextInput`
                flex:1;
                margin-left:15px;
                `

const Searchbar = ({ style }) => {
    return (
        <StyledSearchbar
            style={style}
        >
            <SearchIcon width={FontSize.regular} />
            <Input placeholder='What pokemon are you looking for?' />
        </StyledSearchbar>
    )
}

Searchbar.propTypes = {
    style: PropTypes.object
}

export default Searchbar