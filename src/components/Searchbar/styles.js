import styled from 'styled-components/native'
import { Colors, FontSize } from '@styles'
import { StyleSheet } from 'react-native'
import SearchIcon from '@assets/icons/search.svg'

const StyledSearchbar = styled.View`
    background-color:${Colors.wildSand};
    font-size:${FontSize.regular}px;
    padding:15px;
    border-radius:10px;
    flex-direction:row;
    align-items:center;
`

const Input = styled.TextInput`
    flex:1;
    margin-left:15px;
`

const StyledSearchIcon = styled(SearchIcon)`
                        width:${FontSize.regular}px;
                        `

module.exports = {
    StyledSearchbar,
    StyledSearchIcon,
    Input
}