import React from "react"
import styled from 'styled-components/native'
// import SearchIcon from '@assets/icons/search.svg'
import { Colors, FontSize } from '@styles'

const StyledSearchbar = styled.View`
                            background-color:${Colors.wildSand};
                            font-size:${FontSize.regular}px;
                            padding:15px;
                            border-radius:10px;
                            display:flex;
                        `

const Input = styled.TextInput`

                `

export default Searchbar = ({ style }) => {
    return (
        <StyledSearchbar
            style={style}
        >
            {/* <SearchIcon /> */}
            <Input placeholder='What pokemon are you looking for?' />
        </StyledSearchbar>
    )
}