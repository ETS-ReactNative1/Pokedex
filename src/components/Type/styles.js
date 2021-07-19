import styled from 'styled-components'
import { Colors } from '@styles/color'
import Span from '@components/Span'

//  return type background color
const getBgColor = (type) => {
    switch (type) {
        case 'bug':
            return Colors.atlantis
        case 'dark':
            return Colors.mildGray
        case 'dragon':
            return Colors.lochMara
        case 'electric':
            return Colors.goldenDream
        case 'fairy':
            return Colors.lavenderMargenta
        case 'fight':
            return Colors.cabaret
        case 'fire':
            return Colors.tanHide
        case 'flying':
            return Colors.cornFlower
        case 'ghost':
            return Colors.blueMarguerite
        case 'grass':
            return Colors.fern
        case 'ground':
            return Colors.japonica
        case 'ice':
            return Colors.bermuda
        case 'normal':
            return Colors.manatee
        case 'poison':
            return Colors.amethyst
        case 'psychic':
            return Colors.froly
        case 'rock':
            return Colors.yuma
        case 'steel':
            return Colors.hippieBlue
        case 'water':
            return Colors.havelockBlue
        default:
            return Colors.white
    }
}

const StyledType = styled.View`
                    background-color:${props => getBgColor(props.type)};
                    align-self:flex-start;
                    padding:10px;
                    border-radius:5px;
                    `

const StyledText = styled(Span)`
                    color:${Colors.white};
                    text-transform:capitalize;
                    `

module.exports = {
    StyledType,
    StyledText
}